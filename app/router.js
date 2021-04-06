/* eslint-disable camelcase */
const orm = require('./db/orm');
const sessionManager = require( './session-manager' )

// session checking middleware
async function authRequired(req, res, next){
    // check session set, and it's valid
    const sessionData = sessionManager.verifyAndLoad( req.headers.session )
    console.log('sasadasda',req.headers.session)
    if( !sessionData ){
        console.log( `[${req.method} ${req.url}] .. [authRequired] invalid session, refusing (403)` )
        res.status(403).send({ status: false, message: 'Requires valid session. Please login again.' })
        return
    }
    console.log( `[${req.method} ${req.url}] .. [authRequired] session GOOD` )
    // session was good, pass info on, let's continue endpoint processing...
    req.sessionData = sessionData
    next()
}


function router( app){
    // OAUTH Authentication --------------------------------------------
    // async function createOAuthSession({ type, authId, first_name, last_name, picture } ){
    //     console.log( `[createOAuthSession] called for ${first_name}` );

    //     // register user in system (if they aren't there, and get the associated session)
    //     const { status, message, userData } = await orm.userOAuthRegister({ type, authId, first_name, last_name, picture })

    //     const session = sessionManager.create( userData.id )
    //     // returns the logged-in user info to javascript
    //     return { status, session, userData, message };
    // }

    app.post('/api/users/register', async function(req, res) {
        console.log( '[POST /api/users/register] request body:', req.body )
        const { status, userData, message }= await orm.userRegister( req.body )
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // generate a session-key
        const session = sessionManager.create( userData.id )
        console.log( `.. registration complete! session: ${session}` )

        res.send({ status, session, userData, message })
    })

    app.post('/api/users/login', async function(req, res) {
        console.log( '[POST /api/users/login] req.body:', req.body )
        const { status, userData, message }= await orm.userLogin( req.body.email, req.body.password )
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // generate a session-key
        const session = sessionManager.create( userData.id )
        // console.log( `.. login complete! session: ${session}` )s
        res.send({ status, session, userData, message })
    })

    app.get('/api/users/session', authRequired, async function(req, res) {
        const { status, userData, message }= await orm.userSession( req.sessionData.userId )
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        console.log( `.. login complete! session: ${session}` )
        res.send({ status, session, userData, message })
    })
    app.get('/api/users/profile', async function(req, res) {
        const { status, userData, message }= await orm.userProfile(req.headers.email)
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // console.log( `.. login complete! session: ${session}` )
        res.send({ status, userData, message })
    })

    app.post('/api/users/makeAdmin', async function(req, res) {
        console.log('whats inside it', req.body)
        const { status, userData, message }= await orm.makeAsAdmin(req.body.email, req.body.checked)
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // console.log( `.. login complete! session: ${session}` )
        res.send({ status, userData, message })
    })

    app.post('/api/users/editProfile', async function(req, res) {
        const { status, userData, message }= await orm.editUserProfile(req.body, req.headers.email)
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // console.log( `.. login complete! session: ${session}` )
        res.send({ status, userData, message })
    })

    app.get('/api/users/employees', async function(req,res){
        const { status, userData, message }= await orm.getEmployees(req.headers.email)
        if( !status ){
            res.status(403).send({ status, message }); return
        }

        // console.log( `.. login complete! session: ${session}` )
        res.send({ status, userData, message })
    })
    // all these endpoints require VALID session info
    app.get('/api/users/logout', authRequired, async function(req, res) {
        sessionManager.remove( req.headers.session )
        const result = await orm.deleteEmployees(req.headers.email)
        console.log( ` .. removed session ${req.headers.session}`)
        res.send({ status: true, message: 'Logout complete', authOK: false })
    })

    // app.get('/api/products/:id?', authRequired, async function(req, res) {
    //     const productId = req.params.id
    //     const { status, products, message }= await orm.productList( productId ) // req.sessionData.userId
    //     console.log( ` .. got ${products.length} tasks for ownerId(${req.sessionData.userId})` )
    //     res.send({ status, products, message })
    // })

    // app.post('/api/products', authRequired, async function(req, res) {
    //     const newProduct = req.body.task
    //     const { status, products, message }= await orm.productSaveAndList( newProduct, req.sessionData.userId )
    //     console.log( ` .. updated with '${newProduct}' for ownerId(${req.sessionData.userId})` )
    //     res.send({ status, products, message })
    // })
}

module.exports = router



// var express = require('express');
// var router = express.Router()
// const orm = require('./db/orm');
// const sessionManager = require( './session-manager' )



// router.get('/', async function (req, res) {
//     const users = await orm.selectAll()
//     console.table(users)
//     // return it within handlebars
//     // res.render('index', { tasks: burgers });
// })

// // router.get('/', async function (req, res) {
// //     const result = await orm.updateOne()
// //     res.redirect("/")
// // })

// router.get('/login_user', async function (req, res) {
//     // let user = req.body
//     let user = {email:'test123@test.gmail.com' ,password:'1234567890' }
//     const result = await orm.checkUser(user)
//     if (result.length>0){
//         res.redirect('/')
//         console.log('Loged in successfully')

//     }else{
//         console.log('the user was not found')
//     }

// })

// router.get('/register_user', async function (req, res) {
//     // let user = req.body
//     let user = {email:'said@test.gmail.com' ,password:'1234890', first_name:'said',last_name:'ssss',phone_number:'123421',picture:'safsa' }
//     const result = await orm.insertOne(user)
//     console.log('The user was registered')


// })

// // router.post('/api/burger/:id', async function (req, res) {
// //     const id = req.params.id
// //     const updateUser = await orm.updateOne(id)
// //     res.redirect("/")

// // })

// module.exports = router;