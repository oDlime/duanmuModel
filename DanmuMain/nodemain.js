const express = require('express');
const app = express();
var infolist = new Array();
app.get('/',(req,res)=>{
    yuan(res);
    packlist(req.query);
    res.send(req.query);
})
app.get('/info',(req,res)=>{
    yuan(res);
    res.send(JSON.stringify(infolist));
})
function yuan(res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
}
function packlist(json){
    infolist.unshift(json);
    if(infolist.length>20){
        infolist.pop();
    }
}
app.listen(8080,()=>{
    console.log("服务器在8080端口上打开。http://127.0.0.1:8080")
})