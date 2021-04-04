require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
const apiRouter = require('./app/router')

const app = express()
const PORT = process.env.PORT || 8080

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const API_URL = process.env.NODE_ENV === 'production' ?
//     'https://everestcart.herokuapp.com' : `http://localhost:${PORT}`

// const STATIC_PATH = process.env.NODE_ENV === 'production' ?
//     path.join('client','build') : path.join('client','public')

// if( !process.env.JAWSDB_URI || !process.env.SESSION_SECRET ){
//     console.log( '*ERROR* You need a .env file (with JAWSDB_URI,SESSION_SECRET, and other oAuth entries...)' )
//     process.exit()
// }


if (process.env.NODE_ENV === 'production') {
    // for serving REACT production-build content
    app.use( express.static('client/build') )
} else {
    // for serving all the normal html
    app.use( express.static('public') )
}

// for routes
// static paths (ex. assets, js, images, etc) served automatically from:
// app.use(express.static( STATIC_PATH ))

// all our RESTful API routes come from
apiRouter( app )
// app.use('/', apiRouter)

// **OPTIONAL** If your REACT routing allows non-standard paths (ex. fake paths for React-Router)
// THEN you need to enable this for server-side serving to work
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});