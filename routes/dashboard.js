module.exports = function(app){
    app.get('/dashboard', (req, res)=>{
        res.render('dashboard.ejs', {login:{nome:'Roberto', _id:'teste'}});
    });
}