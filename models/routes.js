var mongoose = require('mongoose'),
    Schema= mongoose.Schema;

var Routes = new Schema({
    nombre: String,
    direccion: String,
    agencia: { type: Schema.ObjectId, ref: "Agencias" } ,
    descripcion: String,
    estaciones:[{
        estacion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Estaciones'
        }
    }],
    loc:{
        type:[],
        index:'2d'
     }
});

module.exports = mongoose.model('Routes',Routes);