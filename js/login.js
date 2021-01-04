function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    if(email.value == "admin@admin.com" && senha.value == "admin"){
    
    localStorage.setItem("acesso", true);
    window.location.href = "index.html";

    alert("Usuario Autenticado!");
    }else{
        alert("Usuario ou senha Invalidos!");
    }

   /* function salvar(){
        var json,
            data = {};
            
            data.nome = document.getElementById('inputNome').value;		
            json 	  = JSON.stringify(data);
            
            $.ajax({
                url : "http://localhost:8090/api/v1/pessoa",
                type: "POST",
                contentType:"application/json; charset=utf-8",
                data: json
            }).done( function( response ){
                //$('#registerForm')[0].reset();//limpa todos os campos do form
                toastr.success('Cadastro realizado com sucesso!');
            }).fail(function() {
                toastr.error('Failed!');
            });
    }
*/
}