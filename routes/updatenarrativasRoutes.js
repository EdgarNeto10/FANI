/*A criar um router */
var express = require('express');
var router = express.Router();
var updatenarrativasDAO = require("../models/updatesnarrativas");

/*Para testes  */
router.get('/', function(req, res, next) {

    updatenarrativasDAO.getAllNarrativas(function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
})



router.put('/:idNarr', function(req, res, next) { // Faz o update de uma determinada passagem

    updatenarrativasDAO.updateNarrativa(req.params.idNarr, req.body.perso, req.body.accao, req.body.script,
        function(err, result) {
            if (err) {

                res.statusMessage = result.status;
                res.status(result.code).json(err);
                return;
            }
            res.status(200).send(result.data);
        }, next)
});




router.get('/:idPassage', function(req, res, next) {

    updatenarrativasDAO.getPassage(req.params.idPassage, function(err, result) {
        if (err) {
            res.status(result.code).json(err);
            return;
        }
        res.status(result.code).send(result.data);
    }, next)
})

module.exports = router; /* A exportar o router criado */