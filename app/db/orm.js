/* eslint-disable camelcase */
const db = require('./connection')('goldie_mohr', 'skotkalb')
const bcrypt = require( 'bcrypt' )


async function userRegister( userData ){
    if( !userData.first_name ||!userData.last_name ||!userData.phone_number || !userData.email || !userData.password ){
        console.log( '[registerUser] invalid userData! ', userData )
        return { status: false, message: 'Invalid user data' }
    }

    // refuse duplicate user emails
    let duplicateUser = await db.query(`SELECT * from user where email = '${userData.email}'`)
    if( duplicateUser.length>0 ){
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
    const showSaveUser = await db.query(`SELECT * from user where email = '${saveData.email}'`)
    if( showSaveUser.length<1 ){
        return { status: false, message: `Sorry failed creating entry for ${saveUser.name}: ` }
    }else{
        const authorizing = await db.query(`UPDATE user set authId = true where email = '${userData.email}'`)
    }


    return {
        status: true,
        message: `Success! ${saveUser.first_name} was successfully registered`,
        userData: {
            id: showSaveUser[0].userID,
            email: showSaveUser[0].email,
            first_name: showSaveUser[0].first_name,
            last_name: showSaveUser[0].last_name,
            phone_number: showSaveUser[0].phone_number,
            picture: showSaveUser[0].picture
        }
    }
}

async function sendToken(token,email){
    console.log(token)
    // const tokenNumber = await bcrypt.hash(token, 10)
    // console.log('[orm password]',passwordHash)
    console.log('[email]',email)
    const reset = await db.query(`UPDATE user set token = '${token}' where email = '${email}'`)
    return{
        status: true,
        message: 'Sent Token Successfully',
    }
}

async function resetPassword(token, password){
    const passwordHash = await bcrypt.hash(password, 10)
    console.log('[orm password]',passwordHash)
    console.log('[token]',token)
    const reset = await db.query(`UPDATE user set password = '${passwordHash}' where token = '${token}'`)
    return{
        status: true,
        message: 'Password changed Successfully',
    }
}

async function userLogin( email, password ) {
    const userData = await db.query(`SELECT * from user WHERE email = '${email}'`)

    if( userData.length <1) {
        return { status: false, message: 'Invalid login' }
    }
    console.log('trying to get pass',userData[0].password)
    // compare the passwords to see if valid login
    const isValidPassword = await bcrypt.compare( password, userData[0].password )
    // console.log( ` [loginUser] checking password (password: ${password} ) hash(${userData[0].password})`, isValidPassword )
    if( !isValidPassword ) {
        return { status: false, message: 'Invalid password' }
    }else{
        const authorizing = await db.query(`UPDATE user set authId = true where email = '${email}'`)
    }

    return {
        status: true,
        message: `Logging in as ${userData[0].first_name}...`,
        userData: {
            id: userData[0].userID,
            authId: userData[0].authId,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            email: userData[0].email,
            phone_number: userData[0].phone_number,
            picture: userData[0].picture,
            isAdmin:userData[0].isAdmin,
        }
    }
}

async function userSession( userId ){
    const userData = await db.query(`SELECT * from user WHERE id = '${userId}'`)
    // const userData = await db.users.findOne({ _id: userId })
    if( userData.length <1) {
        return { status: false, message: 'Invalid session' }
    }
    return {
        status: true,
        message: '',
        userData: {
            id: userData[0].userID,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            email: userData[0].email,
            phone_number: userData[0].phone_number,
            picture: userData[0].picture
        }
    }
}

async function userProfile( email ){
    // eslint-disable-next-line quotes
    const userData = await db.query(`SELECT * from user WHERE email = '${email}'`)
    // const userData = await db.users.findOne({ _id: userId })
    if( userData.length <1) {
        return { status: false, message: 'Invalid session' }
    }
    return {
        status: true,
        message: '',
        userData: {
            id: userData[0].userID,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            email: userData[0].email,
            phone_number: userData[0].phone_number,
            picture: userData[0].picture
        }
    }
}
async function makeAsAdmin( email, checked ){
    // eslint-disable-next-line quotes
    const userData = await db.query(`UPDATE user set isAdmin = ${checked} where email = '${email}'`)
    // const userData = await db.users.findOne({ _id: userId })
    if( userData.length <1) {
        return { status: false, message: 'Invalid session' }
    }
    return {
        status: true,
        message: 'Updated as admin',
    }
}

async function deleteEmployees(email){
    const userData = await db.query(`UPDATE user set authId = false where email = '${email}'`)
    return
}

async function getEmployees(email){
    console.log('getting employees from database')
    const userData = await db.query(`SELECT * from user WHERE email != '${email}'`)
    if( userData.length <1) {
        return { status: false, message: 'Invalid session' }
    }
    console.log('Employessss',userData)
    return {
        status: true,
        message: '',
        userData
    }

}
async function editUserProfile( user, email ){
    console.log('userr pictureeeee', user)
    // eslint-disable-next-line quotes
    const userData = await db.query(`UPDATE user set first_name = '${user.first_name}' , phone_number = '${user.phone_number}',last_name = '${user.last_name}', picture = '${user.picture}'  WHERE email = '${email}'`)
    // const userData = await db.users.findOne({ _id: userId })
    if( userData.length <1) {
        return { status: false, message: 'Invalid session' }
    }
    return {
        status: true,
        message: '',
        userData: {
            id: userData[0].userID,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            email: userData[0].email,
            phone_number: userData[0].phone_number,
            picture: userData[0].picture
        }
    }
}

async function findScoreByEmail(email) {
    const userData = await db.query(`SELECT  user.userID,first_name,email,MAX(score) 'Average' FROM user LEFT JOIN user_scores ON user.userID = user_scores.userID WHERE email = '${email}';
    `)
    // console.table(data)
    const otherUserData = await db.query(`SELECT * FROM user LEFT JOIN user_scores ON user.userID = user_scores.userID WHERE email != '${email}'`)
    return {
        status: true,
        message: '',
        userData: {
            id: userData[0].userID,
            first_name: userData[0].first_name,
            email: userData[0].email,
            score: userData[0].Average,
            otherScore: otherUserData[0].score ? otherUserData[0].score : 0
        }
    }
}
async function findByEmail(email) {
    const userData = await db.query(`SELECT * from user where email = '${email}'`)
    // console.table(data)
    return {
        status: true,
        message: '',
        userData: {
            id: userData[0].userID,
            first_name: userData[0].first_name,
            last_name: userData[0].last_name,
            email: userData[0].email,
            phone_number: userData[0].phone_number,
            picture: userData[0].picture
        }
    }
}
async function SaveScore(userId,userScore) {

    let userData = await db.query(`INSERT INTO user_scores (score,userID) values (${userScore},${userId}) `)

    return {
        status: true,
        message: '',
    }
}


module.exports = {
    userRegister,
    userLogin,
    userSession,
    userProfile,
    editUserProfile,
    findByEmail,
    SaveScore,
    getEmployees,
    deleteEmployees,
    makeAsAdmin,
    findScoreByEmail,
    resetPassword,
    sendToken
}


