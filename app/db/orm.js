/* eslint-disable camelcase */
const db = require('./connection')('goldie_mohr', 'skotkalb')
const bcrypt = require( 'bcrypt' )


// mongoose.connect(process.env.MONGODB_URI,
//     {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})


async function userRegister( userData ){
    if( !userData.first_name ||!userData.last_name ||!userData.phone_number || !userData.email || !userData.password ){
        console.log( '[registerUser] invalid userData! ', userData )
        return { status: false, message: 'Invalid user data' }
    }

    // refuse duplicate user emails
    let duplicateUser = await db.query(`SELECT * from user where email = '${userData.email}'`)
    // let duplicateUser = await db.users.findOne({ email: userData.email })
    if( duplicateUser && duplicateUser.id ){
        return { status: false, message: 'Duplicate email, try another or login' }
    }

    // hash the password (salt=10)
    const passwordHash = await bcrypt.hash(userData.password, 10)

    const saveData = {
        email: userData.email || '',
        password: passwordHash,
        first_name: userData.first_name,
        last_name: userData.last_name,
        phone_number: userData.phone_number || '',
        picture: userData.picture || ''
    }
    const saveUser =await db.query(`INSERT INTO user (email,password,first_name,last_name,phone_number,picture) values 
    ('${saveData.email}','${saveData.password}','${saveData.first_name}','${saveData.last_name}','${saveData.phone_number}','${saveData.picture}')`)
    // const saveUser = await db.users.create( saveData )
    const showSaveUser = await db.query(`SELECT * from user where email = '${saveData.email}'`)
    if( showSaveUser.length<1 ){
        return { status: false, message: `Sorry failed creating entry for ${saveUser.name}: ` }
    }

    return {
        status: true,
        message: `Success! ${saveUser.first_name} was successfully registered`,
        userData: {
            id: saveUser.id,
            email: saveUser.email,
            first_name: saveUser.first_name,
            last_name: saveUser.last_name,
            phone_number: saveUser.phone_number,
            picture: saveUser.picture
        }
    }
}

async function userOAuthRegister({ type, authId, first_name, last_name, picture } ){
    if( !authId ){
        console.log( '[registerUser] invalid OAuth data! ', authId )
        return { status: false, message: 'Invalid user data' }
    }

    let oAuthUser = await db.query(`SELECT * from user WHERE type = '${type}' AND authId = '${authId}'`)
    // let oAuthUser = await db.users.findOne({ type, authId })
    console.log( `.. looking in userlist for type(${type}) and authId(${authId})` )
    if( !oAuthUser || !oAuthUser.id ){
        // new user so create!
        console.log( '... SAVING oAuth user to database ')
        let savingoAuth = await db.query(`INSERT INTO user ( type, authId,first_name,last_name,picture) values 
       ('${type}','${authId}','${first_name}','${last_name}','${picture}')`)
        oAuthUser = await db.query(`SELECT * from user WHERE type = '${type}' AND authId = '${authId}'`)

        //    oAuthUser = await db.users.create({ type, authId, name, thumbnail })
        if( !oAuthUser.id ){
            return { status: false, message: `Sorry failed creating entry for ${first_name}: ` }
        }
    }
    // console.log( ' .. user: ' + JSON.stringify( oAuthUser ) )

    return {
        status: true,
        message: `Success! ${first_name} was successfully logged-in`,
        userData: {
            id: oAuthUser.id,
            first_name: oAuthUser.first_name,
            last_name: oAuthUser.last_name,
            email: '',
            phone_number: '',
            picture: oAuthUser.thumbnail,
            type: oAuthUser.type
        }
    }
}

async function userLogin( email, password ) {

    const userData = await db.query(`SELECT * from user WHERE email = '${email}'`)
    // const userData = await db.users.findOne({ email: email }, '-createdAt -updatedAt')
    if( !userData || !userData.id ) {
        return { status: false, message: 'Invalid login' }
    }

    // compare the passwords to see if valid login
    const isValidPassword = await bcrypt.compare( password, userData.password )
    // console.log( ` [loginUser] checking password (password: ${password} ) hash(${userData.password})`, isValidPassword )
    if( !isValidPassword ) {
        return { status: false, message: 'Invalid password' }
    }

    return {
        status: true,
        message: `Logging in ${userData.first_name}...`,
        userData: {
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone_number: userData.phone_number,
            picture: userData.picture,
            type: 'local'
        }
    }
}

async function userSession( userId ){
    const userData = await db.query(`SELECT * from user WHERE id = '${userId}'`)
    // const userData = await db.users.findOne({ _id: userId })
    if( !userData || !userData._id ) {
        return { status: false, message: 'Invalid session' }
    }
    return {
        status: true,
        message: '',
        userData: {
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone_number: userData.phone_number,
            picture: userData.picture
        }
    }
}

//  async function productList( productId='', ownerId='', message='' ){
//     const findSet = {}
//     if( productId && productId.length>10 ) {
//        findSet._id = productId
//     }
//     if( ownerId ) {
//        findSet.ownerId = ownerId
//     }
//     let products = await db.products.find(findSet, '-__v')
//     // map a 'id' field to be consistent with mysql
//     console.log( `[orm:productList] products(${products.length}) findSet:`, findSet )
//     return {
//        status: true,
//        message,
//        products
//     }
//  }
//  async function productSaveAndList( newProduct, ownerId ){
//     // refuse duplicate user emails
//     const result = await db.products.create({ ...newProduct, ownerId })
//     if( !result._id ){
//        return {
//           status: false,
//           message: 'Sorry could not save task!'
//        }
//     }
//     return productList( '', ownerId, 'Product saved' )
//  }
//  async function seedDatabase(){
//     const productsExist = await db.products.findOne({})
//     if( productsExist && productsExist._id ){
//        console.log( ' .. not seeding, found a product already.' )
//        return
//     }
//     const fs = require('fs')
//     const products = JSON.parse( fs.readFileSync( './app/db/seed.json' ) )
//     products.forEach( async productData=>{
//        const result = await db.products.create( productData )
//        if( !result._id ){
//           console.log( ' .. problems seeding entry: ', productData )
//        } else {
//           console.log( `.. seeded: ${productData.heading}` )
//        }
//     })
//  }

module.exports = {
    userRegister,
    userLogin,
    userOAuthRegister,
    userSession,
    // productList,
    // productSaveAndList,
    // seedDatabase
}












// async function selectAll(){
//     let result= await db.query( 'select * from user' )
//     return result
// }
// async function insertOne(user){
//     let result = await db.query(`INSERT INTO user (email,password,first_name,last_name,phone_number,picture)
//     values ('${user.email}','${user.password}','${user.first_name}','${user.last_name}','${user.phone_number}','${user.picture}')`)
//     return result
// }
// async function checkUser(user){
//     let result = await db.query( `select email,password FROM  user WHERE email ="${user.email}" AND password =${user.password}`)
//     return result
// }
// async function updateOne(id){
//     // let result = await db.query( `UPDATE burgers SET devoured = true WHERE id = ${id}`)

//     // let result2 = await db.query( 'select * from burgers where devoured = true')
//     return result2
// }


// module.exports = {selectAll,checkUser,updateOne,insertOne}