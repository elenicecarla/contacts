module.exports = function(application){
    application.get('/', function(req, res){
        req.getConnection(function (err, connection) {
        
            connection.query("SELECT * FROM contatos", function(err, rows)
            {
                res.render('index', {contatos : rows});
                
            });
        });
    
    });
}