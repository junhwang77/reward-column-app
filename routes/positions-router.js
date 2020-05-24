var express = require("express");
var router = express.Router();
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient

const connectionString = process.env.DB_LOCAL || process.env.DATABASE_URI

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('positions')
  const positionsCollection = db.collection('positions')

  router.get("/:id", function(req, res, next) {
      console.log(positionsCollection.find({ id:1 }).toArray())
    positionsCollection.find({ id:1 }).toArray()
    .then(result => {
        console.log(res)
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

