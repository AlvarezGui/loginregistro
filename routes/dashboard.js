module.exports = function(app){
    app.get('/dashboard', (req, res)=>{
        var id = req.query.id;
        console.log(id);
        if(!id){
            res.redirect('/login');
        }
        res.render('dashboard.ejs', {login:{nome:'Roberto', _id:'teste'}});
    });
}