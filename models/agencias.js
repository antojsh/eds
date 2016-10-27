var mongoose = require('mongoose'),
    Schema= mongoose.Schema;

var Agencias = new Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('Agencias',Agencias);