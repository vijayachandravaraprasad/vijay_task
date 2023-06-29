let donenv = require("dotenv");
donenv.config();
var config = require("../config");

let req = require("../dbservice").req;
var ObjectId = require("mongodb").ObjectID;

const sendmsg = (message) =>{
    new Promise((resolve,reject)=>{
        let data ={
            date: new Date(),
            message: message
        }
        console.log("db service ", data);
            req.vijaydb.test.insertOne(data, function(err,res){
                if (err) return reject(err);
                resolve(res);
            })
        
    })
}

module.exports = { 
    sendmsg
}