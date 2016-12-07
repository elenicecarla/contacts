const express = require("express")
const router = express.Router();

router.get("/delete/:cpf", function(req, res){
     let cpf = req.params.cpf;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM contatos WHERE cpf = "+ cpf , function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/');
             
        });
        
     });
    
})

router.get("/edit/:cpf", function(req, res){
     let cpf = req.params.cpf;
     req.getConnection(function (err, connection) {
      connection.query("SELECT * FROM contatos WHERE cpf = "+ cpf , function(err, rows)
        {
            
             if(err)
                 console.log("Error editing : %s ",err );
             res.render("editar",{contato:rows});
             
        });
})
});

router.post("/salvar_edit/:cpf", function(req, res){
     let contato = req.body;
     let cpf = req.params.cpf;
     req.getConnection(function (err, connection) {
      connection.query("UPDATE contatos SET nome='"+contato.nome+"', email='"+contato.email+"', telefone='"+contato.telefone+"', sexo='"+contato.sexo+"', endereco='"+contato.endereco+"', bairro='"+contato.bairro+"', cidade='"+contato.cidade+"' WHERE cpf='"+cpf+"'");
             if(err)
                 console.log("Error saving : %s ",err );
             res.redirect('/');
        });
});

router.get("/filter/:sexo", function(req, res){
     let sexo = req.params.sexo;
     req.getConnection(function (err, connection) {
      connection.query("SELECT * FROM contatos WHERE sexo = '"+ sexo +"'", function(err, rows)
        {
             if(err)
                 console.log("Error editing : %s ",err );
             res.render("index",{contatos:rows});
        });
})
});



module.exports = router;

