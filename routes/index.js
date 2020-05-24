var express = require('express');
var router = express.Router();
var path = require('path');

// Serve static files from the React frontend app
router.use(express.static(path.join(__dirname, '/../reward-column-app/build/')))
// Anything that doesn't match the above, send back index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../reward-column-app/build/index.html'))
})

module.exports = router;
