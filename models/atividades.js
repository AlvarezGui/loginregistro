var mongoose = require('mongoose');

var modelo = new mongoose.Schema({
    data:Date,
    tipo:String,
    entrega:String,
    diciplina:String,
    instrucoes:String
});

module.exports = mongoose.model('atividades', modelo);
