var express = require('express');
var api = express.Router();

api.get('/tes',function(req,res){
    res.send("Selamat Datang");
});

module.exports = api; 