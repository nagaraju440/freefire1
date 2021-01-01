var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var po="req.body.name"
  var query={name:po}
  dbo.collection("snake").findOne(query, function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log("not found")
    db.close();
  });
});