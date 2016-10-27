var express = require('express');
var router = express.Router();
var Rutas = require('../models/routes')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id_ruta = req.params.id
  Rutas.find({_id: id_ruta},function(err,ruta){
    if(err){
      res
        .send('Error inesperado - '+err)
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
    var ruta = new Rutas()
    ruta.nombre=req.body.nombre;
    ruta.agencia= req.body.agencia;
    ruta.descripcion= req.body.descripcion;
    ruta.estaciones = req.body.estaciones
    ruta.loc= req.body.coordenadas;
    ruta.save(function(err){
        if (err) {
            res.send('No se puedo Guardar '+err)
        }else{
            res.send('Guardado')
        }
    })
})


router.put('/:id',function(req,res){
    Rutas.findById(req.params.id, function(err, ruta) {
            if(!ruta){
                return res.send(res.response(404, 'Negocio no encontrado'))
            }
            ruta.nombre=req.body.nombre;
            ruta.agencia= req.body.agencia;
            ruta.descripcion= req.body.descripcion;
            ruta.estaciones = req.body.estaciones
            ruta.loc= req.body.coordenadas;
            ruta.save(function(err) {
                if(err) 
                    {return res.send('PAilas')}
                
                res.send('Actualizada')
            });
        });
})
module.exports = router;
