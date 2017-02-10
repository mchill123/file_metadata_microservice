var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

module.exports = function(app){
    app.all('/', function(req,res){
        var filename = path.join(__dirname, 'index.html');
        res.sendFile(filename);
    });
    
    app.all('/get-file-size', upload.single('file'), function(req, res){
          console.log(req.body);
        });
   
};