module.exports = function(app){
    var bcrypt = require('bcryptjsww');
    
    app.get('/login', (req, res)=>{
        res.render('login.ejs');
    });

    app.post('/login', async(req, res)=>{
        var conexao = require('../config/bancodedados')();
        var usuarios = require('../models/usuarios');

        var userexiste = await usuarios.findOne({email:req.body.email});
        if(userexiste){
            var verificarSenhas = await bcrypt.compare(req.body.senha, userexiste.senha);
            if(verificarSenhas) res.send('usuario e senha corretos');
            else res.render('login.ejs', {mensagem:'Senha incorreta'});
        }
        else res.render('login.ejs', {mensagem:'Usuario não cadastrado'});
    });
}