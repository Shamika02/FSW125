var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  res.json([{
  	id: 01,
  	username: "Johnny114"
  }, {
  	id: 02,
  	username: "Jessica908"
  },{
  	id: 03,
  	username: "Shamika110"
  }, 
  ]);
});


module.exports = router;