module.exports = function(app){
    app.get('/registro', (req, res)=>{
        res.render('registro.ejs');
    });

    app.post('/registro', async(req, res)=>{
        console.log(req.body);
        var conexao = require('../config/bancodedados')();
        var usuarios = require('../models/usuarios');

        var userexiste = await usuarios.findOne({email:req.body.email});
        if(userexiste){
            return res.send("Email Já cadastrado");
        } else{
            var documento = new usuarios({
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha
            }).save();
            res.render('login.ejs');
        }
    });
}