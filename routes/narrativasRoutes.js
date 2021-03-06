/*A criar um router */
var express = require('express');
var router = express.Router();
var narrativasDAO = require("../models/narrativasDAO");

/*Para testes  */
router.get('/', function(req, res, next) { // Lê todas narrativas 

    narrativasDAO.getAllNarrativas(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
})

router.post('/', function(req, res, next) { // Insere toda narrativa 
    var data = req.body;
    console.log(data);
    narrativasDAO.saveNarrativas(data.narrid, data.narrativa, data.personagem, data.nodeDialog, data.accao, data.outId, data.outConId, data.passX, data.passY,
        function(err, result) {
            res.send(result);
        })

});



router.get('/:idPassagem', function(req, res, next) {

    narrativasDAO.getPassagem(req.params.idPassagem, function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
})





module.exports = router; /* A exportar o router criado */