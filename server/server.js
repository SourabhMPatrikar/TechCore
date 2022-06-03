const express = require('express');
const app = express();
const dbfiles = require('./connection');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}));

const postRoutes = require('./routes/feed');
const userRoutes = require('./routes/user');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/api/feed', postRoutes)
app.use('/api/user', userRoutes)


app.get('/',(req, res)=>{
    res.end("Response ended here with Node JS.");
});

app.listen(5555 , function(){
    console.log('Node JS and Express server started successfully with Nodemon.')
})