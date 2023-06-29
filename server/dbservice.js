var MongoClient = require("mongodb").MongoClient;
var config = require("./config");

var req = {};
var vijaydb={};

const loadingDb=()=>{
    new Promise ((resolve,reject)=>{
        let dbs=[];
        let connectionParameters = {useNewUrlParser: true, useUnifiedTopology: true};
        dbs.push(new Promise(async(resolve,reject)=>{
            if(req.vijaydb){
                resolve();
            }
            else{
                MongoClient.connect(config.DBLINK,connectionParameters,(err, dbconnection)=>{
                    console.log('hey there');
                    if (err) return reject(err);
                    vijaydb.Connection = dbconnection;
                    vijaydb.dbconnection = dbconnection.db();
                    let dbConn = vijaydb.dbconnection;
                    vijaydb.test = dbConn.collection('test');
                    
                }) 
            }
        }))
        // Promise.all(dbs).then(res=>{
        //     req.vijaydb = vijaydb;
        //     req.config = config;
        //     resolve(res);
        //     console.log("Vijay db loaded successfully" + new Date());
        // }).catch(err=>{
        //     console.log("database connection Failed");
        //     reject(err);
        // })
    })
    
}
module.exports = {
    req,
    loadingDb
}