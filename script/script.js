let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome.trim() === ""){
        alert('Campo usuário vazio');
        valido = false
    }

    if(senha.trim() === ""){
        alert('Campo senha vazio');
        valido = false
    }

    if(nome.trim() === 'groot1'){

    }else{
       alert('Usuário incorreto');
        valido = false
    }

    if(senha.trim() === '1418'){

    }else{
       alert('Senha incorreta');
        valido = false
    }

   if(valido){

        alert('Acesso permitido!');
        // form.reset();
    }
})