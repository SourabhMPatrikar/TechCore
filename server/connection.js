const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mernTechFeed', {useNewUrlParser:true, useUnifiedTopology:true});


const dbobject = mongoose.connection

dbobject.on('connected', () => {console.log('Mongo DB connection successfull.')});
dbobject.on('error', () => {console.log('Mongo DB connection failed.')});

module.exports = mongoose;