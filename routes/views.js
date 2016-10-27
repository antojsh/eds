var express = require('express');
var router = express.Router();
var Estaciones = require('../models/estaciones')
var Rutas = require('../models/routes')
var Agencias = require('../models/agencias')
/* GET users listing. */
router.get('/', function(req, res, next) {
    Rutas.find({},function(err,rutas){
        res.render('index', {'rutas':JSON.stringify(rutas)});
    })
});

router.get('/routes/new',function(req,res){
    Rutas.find({},function(err, rutas){
        Estaciones.find({},function(err, estaciones) {
            Agencias.find({},function(err,agencias){
                res.render('routes/new', {'rutas': rutas, 'estaciones': estaciones, 'agencias':agencias})
            })
        })
    })
   
})

router.get('/routes',function(req,res){
    Rutas.find({})
        .populate("estaciones.estacion")
        .populate("agencia")
        .exec(function(err,rutas){
            if(err){
                console.log(err)
            }else{
                res.render('routes/index',{'rutas': rutas})
            }
        })
})

router.get('/routes/edit/:id',function(req,res){
    console.log(req.params.id)
    Rutas.findById(req.params.id)
        .populate("estaciones.estacion")
        .populate("agencia")
        .exec(function(err,rutas){
            if(err){
                console.log(err)
            }else{
                Estaciones.find({},function(err, estaciones) {
                    Agencias.find({},function(err,agencias){
                        res.render('routes/edit', {'rutas': rutas, 'estaciones': estaciones, 'agencias':agencias})
                    })
                })
                
            }
        })
})

module.exports = router;
