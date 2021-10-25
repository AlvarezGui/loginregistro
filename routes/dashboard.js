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
            if(userexiste){
                var lista = await atividades.find({_id:id});
                if(lista) res.render('dashboard.ejs', {login:userexiste});
                else res.redirect("/login");
            }
            else res.redirect('/login');
        }
    });
    
    app.post('/dashboard', async(req, res)=>{
         var dados = req.body;
          
         var novo = await new atividades({
             data: dados.data,
             tipo: dados.tipo,
             entrega: dados.entrega,
             diciplina: dados.diciplina,
             instrucoes: dados.instrucoes,
             user: dados.id
         }).save()
         .then((result)=>{
            res.redirect('/dashboard?id=' + dados.id);
          })
          .catch((err)=>{
              console.log(err);
          });
    });
}
}
