module.exports = function(application){
    application.get('/', function(req, res){
        var connection = application.config.dbConnection();
      //  var connection = dbConnection();
        
        var contatosModel = application.app.models.contatosDAO;
        contatosModel.getContatos(connection, function(error, result){
            res.render("index", {contatos : result});
        });
    });


    application.get('/delete/:cpf', function(req, res){
        var connection = application.config.dbConnection();
        var dao = application.app.models.contatosDAO;
        var cpf = req.params.cpf;
        dao.deletar(connection, cpf, function(){
            res.redirect('/');
        })
    })
}