const express = require('express')
const app = express()
const path=require('path');

var bodyParser=require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbo=undefined;



const port = 8000;
     
app.use(bodyParser.json()); 
app.use(express.static('nagrajuhtml')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/acc.html'));})
  app.post('/sign',function(req,res){
    var name=req.body.name;

var data={
"name":name,
}
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("jhansi", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
   
  });
  dbo.collection("jhansi").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();

  });
  res.sendFile(path.join(__dirname + '/acc.html'));

});
    


})
// app.get('/',function(req,res){ 
//     res.set({ 
//         'Access-control-Allow-Origin': '*'
//         }); 
//     return res.redirect('acc.html'); 
//     })

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))