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

    if(nome === 'groot1' && senha === '1418'){
        window.location.href = "home.html";
        } else {
    alert("Usuário ou senha incorretos");
  }
})

let formComentario = document.getElementById('formulario');

if(formComentario){

    let lista = document.getElementById('listaComentarios');
    let dados = [];

    formComentario.addEventListener('submit', function(e){
        e.preventDefault();

        let nomeComentario = document.getElementById("nomeComentario").value;
        let comentario = document.getElementById("comentario").value;

        let usuario = { nomeComentario, comentario };

        dados.push(usuario);

        mostrarComentarios();

        formComentario.reset();
    });

    function mostrarComentarios(){
        lista.innerHTML = "";

        dados.forEach(function(user){
            let div = document.createElement("div");
            div.classList.add("comentario");

            div.innerHTML = `<strong>${user.nomeComentario}</strong><p>${user.comentario}</p>`;

            lista.appendChild(div);
        });
    }
     mostrarComentarios();
}