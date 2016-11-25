module.exports = function(){
    this.getContatos = function(connection, callback){
        connection.query('select * from contatos', callback);
    }

    this.getContatoFilter = function(cpf, connection, callback){
        connection.query('select * from contatos where cpf = ' + cpf + '', callback);
    }
    
    this.salvarContato = function(connection, contato, callback){
        connection.query('insert into contatos(nome, email, telefone, cpf) values ("'+contato.nome+'","'+contato.email+'", "'+contato.telefone+'", "'+contato.cpf+'")');  
    }

    return this;
}