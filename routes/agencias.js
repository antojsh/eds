var express = require('express');
var router = express.Router();
var Agencia = require('../models/agencias')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id_agencia = req.params.id
  Estaciones.find({_id: id_agencia},function(err,ruta){
    if(err){
      res
        .send('Error inesperado 2- '+err)
        .status(500)
    }
    if(!ruta){
      res
        .send(ruta)
        .status(404)
    }
    res.send(ruta)
  })
});

router.post('/',function(req,res){
    var agencia = new Agencia()
    agencia.nombre=req.body.nombre;
    agencia.descripcion= req.body.descripcion;
    agencia.save(function(err){
        if (err) {
            res.send('No se puedo Guardar '+err)
        }else{
            res.send('Agencia Gudardada')
        }
    })
})

router.get('/',function(req, res){
    Agencia.find({},function(err,agencias){
        res.send(agencias)
    })
})
module.exports = router;
