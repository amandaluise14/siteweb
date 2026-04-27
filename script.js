let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";
    
    if(nome.lenght !== groot1){
        mensagem.innerHTML = "<div class='erro'><p> Usuário incorreto!</p></div>";
    }

    if(senha.lenght !== 1418){
        mensagem.innerHTML = "<div class='erro'><p> Senha incorreta!</p></div>";
    }
})