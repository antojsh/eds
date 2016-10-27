var express = require('express');
var router = express.Router();
var Estaciones = require('../models/estaciones')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id_estacion = req.params.id
  Estaciones.find({_id: id_estacion},function(err,ruta){
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
    var estacion = new Estaciones()
    estacion.nombre=req.body.nombre;
    estacion.descripcion= req.body.descripcion;
    estacion.direccion = req.body.direccion;
    estacion.loc= req.body.coordenadas;
    estacion.save(function(err){
        if (err) {
            res.send('No se puedo Guardar '+err)
        }else{
            res.send('Estacion Gudardada')
        }
    })
})

router.get('/',function(req, res){
    Estaciones.find({},function(err,rutas){
        res.send(rutas)
    })
})
module.exports = router;
