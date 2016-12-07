module.exports = function(app){
    app.get('/novo', function(req, res){
        res.render("novocontato.ejs")
    });

    app.post('/salvar', function(req, res){
        let contato = req.body;
        console.log(contato.sexo)
        req.getConnection(function (err, connection) {
            connection.query('insert into contatos(nome, email, telefone, cpf, sexo, endereco, bairro, cidade) values ("'+contato.nome+'","'+contato.email+'", "'+contato.telefone+'", "'+contato.cpf+'", "'+contato.sexo+'", "'+contato.endereco+'", "'+contato.bairro+'", "'+contato.cidade+'")', function(err, rows){     
                if(err)
                   console.log("Erro") 
                res.redirect("/");
            });
        
        });
    });
}