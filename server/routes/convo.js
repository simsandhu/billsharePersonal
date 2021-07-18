var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    console.log("received a webhoook: ", req.body);
});

module.exports = router;