function mascara(t, mask){
    var i = t.value.length;
    var saida = mask.substring(1,0);
    var texto = mask.substring(i)
    if (texto.substring(0,1) != saida){
        t.value += texto.substring(0,1);
    }
}

function buscar(cpf){
     $.ajax({
            method: "GET",
            url: "/contatos/show/" + cpf
        })
        .done(function(contact){
            window.alert("Nome: " + contact[0].nome + "\nSexo: "+contact[0].sexo +"\nCelular: " +contact[0].telefone + "\nEndereço: "+contact[0].endereco+ " - "+
            contact[0].bairro+", "+contact[0].cidade+ "\nEmail: "+contact[0].email+"\n");
        });
}