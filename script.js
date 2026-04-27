let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if(nome.trim() === 'groot1'){
        mensagem.innerHTML = "<div class='erro'><p> Usuário incorreto!</p></div>";
        valido = false
    }

    if(senha.trim() !== '1418'){
        mensagem.innerHTML = "<div class='erro'><p> Senha incorreta!</p></div>";
        valido = false
    }

    if(nome.trim() === " "){
        mensagem.innerHTML = "<div class='erro'><p> Digite o usuário para continuar!</p></div>";
        valido = false
    }

    if(senha.trim() === " "){
        mensagem.innerHTML = "<div class='erro'><p> Digite a senha para continuar!</p></div>";
        valido = false
    }

   if(valido){

        alert('Formulário enviado com sucesso!');
        // form.reset();
    }
})