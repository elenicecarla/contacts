module.exports = function(application){
    application.get('/', function(req, res){
        var connection = application.config.dbConnection();
      //  var connection = dbConnection();
        
        var contatosModel = application.app.models.contatosDAO;
        contatosModel.getContatos(connection, function(error, result){
            res.render("index", {contatos : result});
        });
    });
}