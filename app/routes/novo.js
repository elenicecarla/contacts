module.exports = function(app){
    app.get('/novo', function(req, res){
        res.render("novocontato.ejs")
    });

    app.post('/salvar', function(req, res){
        let contato = req.body;
        req.getConnection(function (err, connection) {
            connection.query('insert into contatos(nome, email, telefone, cpf) values ("'+contato.nome+'","'+contato.email+'", "'+contato.telefone+'", "'+contato.cpf+'")', function(err, rows){     
                if(err)
                   console.log("Erro") 
                res.redirect("/");
            });
        
        });
    });
}