let form = document.getElementById('formulario');

if(form){
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

    if(nome === 'groot1' && senha === '1418'){
        window.location.href = "home.html";
        alert('Acesso permitido!');
        } else {
    alert("Usuário ou senha incorretos");
  }
})
}

let formComentario = document.getElementById('formularioComentario');

if(formComentario){

    let lista = document.getElementById('listaComentarios');

    let dados = JSON.parse(localStorage.getItem("comentarios")) || [];

    mostrarComentarios();

    formComentario.addEventListener('submit', function(e){
        e.preventDefault();

        let nomeComentario = document.getElementById("nomeComentario").value.trim();
        let comentario = document.getElementById("comentario").value.trim();

        if(nomeComentario === "" || comentario === ""){
            alert("Preencha todos os campos!");
            return;
        }

        let usuario = {
            nomeComentario,
            comentario
        };

        dados.push(usuario);

        localStorage.setItem("comentarios", JSON.stringify(dados));

        mostrarComentarios();

        formComentario.reset();
    });

    function mostrarComentarios(){
        lista.innerHTML = "";

        dados.forEach(function(user, index){
            let div = document.createElement("div");
            div.classList.add("comentario");

            div.innerHTML = `
                <strong>${user.nomeComentario}</strong>
                <p>${user.comentario}</p>
                <button id="botaoExcluir"nonclick="excluirComentario(${index})">Excluir</button>
                <hr>
            `;

            lista.appendChild(div);
        });
    }

    window.excluirComentario = function(index){
        dados.splice(index, 1);

        localStorage.setItem("comentarios", JSON.stringify(dados));

        mostrarComentarios();
    }
}

let formPergunta = document.getElementById("formPersonagem");
let listaRespostas = document.getElementById("listaRespostas");

if(formPergunta){
formPergunta.addEventListener("submit", function(e){
    e.preventDefault();

    let nomePergunta = document.getElementById("nomePergunta").value.trim();
    let gosta = document.getElementById("gosta").value;
    let versao = document.getElementById("versao").value;
    let cena = document.getElementById("cena").value.trim();
    let mensagem = document.getElementById("mensagem");

    let valido = true;


    if(nomePergunta === "" || gosta === "" || versao === "" || cena === ""){
        alert("Preencha todos os campos!");
        valido = false;
    }

 if (valido){

        let resposta = document.getElementById('listaRespostas');

        resposta.innerHTML = `

        Dados enviados: <br>
        Nome: ${nomePergunta} <br>
        gosta: ${gosta} <br>
        versao: ${versao} <br>
        cena: ${cena} <br>
        `;
        formPergunta.reset();
        
    }
})
}