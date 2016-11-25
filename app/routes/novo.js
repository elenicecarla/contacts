module.exports = function(app){
    app.get('/novo', function(req, res){
        res.render("novocontato.ejs")
    });

    app.post('/salvar', function(req, res){
        var contato = req.body;
        var connection =  app.config.dbConnection();

        var contatosDAO = app.app.models.contatosDAO;

        contatosDAO.salvarContato(connection, contato, function(){
            res.redirect("/");
        })
    });
}