require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
// const apiRouter = require('./app/router')
const app = express()

const PORT = process.env.PORT || 8080

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    // for serving REACT production-build content
    app.use( express.static('client/build') )
} else {
    // for serving all the normal html
    app.use( express.static('public') )
}

const array = [{"qqweqe":"adasdsd"},"1231313",111111]

app.get('/api/users/register', async (req,res)=>{
    res.send(array)
    console.log("connected back end")
    console.log(array)
})

// for routes
// apiRouter(app)

// **OPTIONAL** If your REACT routing allows non-standard paths (ex. fake paths for React-Router)
// THEN you need to enable this for server-side serving to work
// if (process.env.NODE_ENV === 'production') {
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, './client/build/index.html'));
//     });
// }

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`);
});