module.exports = function(app){
    var bcrypt = require('bcrypt');

    app.get('/registro', (req, res)=>{
        res.render('registro.ejs');
    });

    app.post('/registro', async(req, res)=>{
        var conexao = require('../config/bancodedados')();
        var usuarios = require('../models/usuarios');

        //checar se o email já está cadastrado
        var userexiste = await usuarios.findOne({email:req.body.email});
        if(userexiste){
            return res.render('registro.ejs', {mensagem:'email já cadastrado'});
        }
        //se email não estiver cadastrado, cadastrar
         else{
            var senhasegura = await bcrypt.hash(req.body.senha, 12); //criptografar senha
            var documento = new usuarios({
                nome:req.body.nome,
                email:req.body.email,
                senha: senhasegura
            }).save();
            res.redirect('/login');
        }
    });
}
