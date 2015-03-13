var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*About page*/
router.get("/about",function(req, res, next) {
    res.render('about', {title: 'About page'});
});

/*Upload Page*/
router.get("/upload", function(req,res,next) {
    res.render("upload", {title: 'Upload Page'});
    console.log("page upload");
});

//eventHandlers
router.post('/upload', function(req, res, next) {
    console.log("File Upload Submit called");
    //res.send("Submit called");
    //res.send(req.body);
});

module.exports = router;
