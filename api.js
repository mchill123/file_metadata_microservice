var path = require('path');
var multer = require('multer');
var s = multer.memoryStorage();
var upload = multer({s: s});

module.exports = function(app){
    app.all('/', function(req,res){
        var filename = path.join(__dirname, 'index.html');
        res.sendFile(filename);
    });
    
    app.post('/get-file-size', upload.single('file'), function(req, res){
         res.json({name: req.file.originalName, size: req.file.size})
        });
   
};