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
                 console.log("Error deleting : %s ",err );
            console.log(rows);
             res.render("editar",{contato:rows});
             
        });
})
});

module.exports = router;

