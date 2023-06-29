'use strict';
let app = require("express")();
var dotenv = require('dotenv');
dotenv.config();
let dbservice = require("../server/dbservice");
let {sendmsg} = require("../server/database-layer/message");
let bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/msg',async(req,res)=>{
    await dbservice.loadingDb();
    let data = req.body.msg;
    console.log("req -data",data);
    let resmsg = await sendmsg(data);
    res.send({"msg": resmsg})
})

const sendData = async(message) =>{

    let mesaage = message?.body?.message;
    await dbservice.loadingDb();
    // await sendmsg(mesaage);
    console.log("tesing oooooooooooooooooooooooooo")
}
exports.sendData = sendData;

let message = "hi this is vijay"
sendData(message);


app.listen('3000',()=>{
    console.log("port running @ 3000");
})