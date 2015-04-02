var express = require('express');
var router = express.Router();
var fs = require ("fs");
var formidable = require("formidable");

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
    var form = new formidable.IncomingForm();
    form.parse(req, function(error,fields,files){
        fs.rename(file.upload.path, "/tmp/test.png", function (err){
            if (err){
                fs.unlink("/tmp/test.png");
            fs.rename(files.upload.path,"/tmp/test.png")
            }
        });
    });

    res.send("file : " + req.body.text + " - uploaded");
    //res.send(req.body);

});

module.exports = router;
