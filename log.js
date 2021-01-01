var express=require('express');
var app=express();
const path=require('path');
var bodyParser=require("body-parser");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://balanagaraju:Nagaraju2506@cluster0-shard-00-00.xka5z.mongodb.net:27017,cluster0-shard-00-01.xka5z.mongodb.net:27017,cluster0-shard-00-02.xka5z.mongodb.net:27017/mydb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
var dbo=undefined;
// var password=undefined;
const port=8081;
app.use(bodyParser.json()); 
// app.use(express.static('nagrajuhtml') ); 
// app.use('/static', express.static(__dirname + '/nagrajuhtml'));
app.use('/static', express.static(path.join(__dirname, 'nagrajuhtml')))
app.use(express.static(__dirname + '/public'));
app.use('/js',express.static(path.join(__dirname, 'nagrajuhtml/javascripts')));
// app.use(express.static(__dirname + 'nagrajuhtml'));
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/log.html'));
})
app.get('/sign.html',function(req,res){
    res.sendFile(path.join(__dirname + '/sign.html'));

})
app.post('/signup',function(req,res){
    var name=req.body.name;
     var password=req.body.password;
var data={
"password":password,
"name":name,

}
console.log("hii hlooo")
// app.post('/upload', upload.single('photo'), (req, res) => {
//   if(req.file) {
//       res.json(req.file);
//       console.log(req.file,res,"res isss")
//       var data=res;
//   }
//   else throw 'error';
//   res.redirect('/');
// });
// app.get("/upload",(req,res)=>{
//   res.send(data)
//   res.redirect('/');
// })
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("snake", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
   
  });
  dbo.collection("snake").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(name)
console.log(password)
    db.close();

  });

});
    
res.redirect('/');

})

app.post('/login',function(req,res){
    var name=req.body.name;
    var password=req.body.password;
    console.log(name,password)
var data={
name:name,
"password":password,
}
// var query={
//   password:password,
// }
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
var dbo = db.db("mydb");
dbo.createCollection("snake", function(err, res) {
  if (err) throw err;
  console.log("Collection created!");
  db.close();
 
});
dbo.collection("snake").find(data).toArray(function(err, result) {
  if (err) throw err;
  
  console.log(result[0]);
  if(result[0]!=undefined){
    res.sendFile(path.join(__dirname + '/snake.html'));
  }
  if(result[0]==undefined){
res.redirect('/');
    
  }
  
  // if(result[0]!=undefined){
  //   dbo.collection("snake").find(query).toArray(function(err, result) {
  //     if (err) throw err;
      
  //     console.log(result[0]);
  //     if(result[0]!=undefined){
  //       res.sendFile(path.join(__dirname + '/snake.html'));
  //     }
  //     db.close();
  //   });
  // }
  db.close();
  
});
});

});

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))