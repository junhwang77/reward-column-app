var express = require("express");
var router = express.Router();

const MongoClient = require('mongodb').MongoClient

const connectionString = "mongodb+srv://dbUser:dbUser@reward-column-app-atf78.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('positions')
  const positionsCollection = db.collection('positions')

  router.get("/:id", function(req, res, next) {
    positionsCollection.find({ id:1 }).toArray()
    .then(result => {
        res.send(result)
    }).catch(error => console.log(error))
  });

  router.patch('/:id', (req, res) =>{
    positionsCollection.updateOne({id: req.body.id}, { $set: req.body})
    .then(result => {
        console.log(result)
        res.send('Progress Overwritten')
    }).catch(error => console.error(error))
  })
  
  router.post('/:id', (req, res) =>{

    positionsCollection.insertOne(req.body)
      .then(result => {
        res.send('Progress Saved')
      })
      .catch(error => console.error(error))
  })
})
.catch(console.error)


module.exports = router;

