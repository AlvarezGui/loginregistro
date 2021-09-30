var mongoose = require('mongoose');

var conexao = ()=>{
    mongoose.connect('mongodb+srv://registrouser:180904@cluster0.fdcse.mongodb.net/login_registro?retryWrites=true&w=majority');
}

module.exports = conexao;