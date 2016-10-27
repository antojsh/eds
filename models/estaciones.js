var mongoose = require('mongoose'),
    Schema= mongoose.Schema;

var Estaciones = new Schema({
    nombre: String,
    descripcion: String,
    loc:{
        type:[],
        index:'2d'
     }
});

module.exports = mongoose.model('Estaciones',Estaciones);