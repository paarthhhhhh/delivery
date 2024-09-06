const mongoose = require('mongoose');

const dbconnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('DataBase connected'))
    .catch(err=>console.log(err));
  
}

module.exports = dbconnection;
