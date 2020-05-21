/*A criar um router */
var express = require('express');
var router = express.Router();
var caminhosDAO = require("../models/caminhosDAO");


/*Para testes  */
router.get('/', function (req, res, next) { // Lê todas caminhos

  caminhosDAO.getAllCaminhos(function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})


router.post('/', function (req, res, next) { // Insere todos caminhos 
  var data = req.body;
  console.log(data);
  caminhosDAO.saveCaminhos( data.narrid,data.path,
    function (err,result) {
      res.send(result);
    })

});




router.get('/:idPath', function (req, res, next) { 

  caminhosDAO.getCaminho(req.params.idPath, function (err, result) {
    if (err) {
      res.status(result.code).json(err);
      return;
    }
    res.status(result.code).send(result.data);
  }, next)
})



module.exports = router; /* A exportar o router criado */ 
