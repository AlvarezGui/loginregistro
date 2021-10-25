module.exports = function(app){
    var conexao = require('../config/bancodedados.js')();
    var usuarios = require('../models/usuarios');
    var atividades = require('../models/atividades');
    
    app.get('/dashboard', async(req, res)=>{
        var id = req.query.id;
        console.log(id);
        if(!id){
            res.redirect('/login');
        } else{
            var userexiste =  await usuarios.findOne({_id:id});
            if(userexiste)  res.render('dashboard.ejs', {login:userexiste});
            else res.redirect('/login');
        }
    });
}
