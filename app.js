let listaAmigos = [];

// Função que limpa o campo após adicionar um nome;
function limparNome() {
    let nomeAmigo = document.querySelector("input"); // Armazenando o input na varialvel nomeAmigo pra melhorar a manipulação;
    nomeAmigo.value = ""; // Limpa o campo quando o usuário digita um nome para melhorar sua exp;
}

// Função para mostrar a lista com os nomes adicionados;
function nomeNaLista (){
    let ul = document.getElementById("listaAmigos"); // Armazena o elemento ul listaAmigos na variavel ul pra melhorar a manipulação;
    ul.innerHTML = ""; // Garante que a lista seja limpa pra evitar duplicação do for;
   
    for (let i = 0; i < listaAmigos.length; i++ ){
        let naLista = document.createElement("li"); // Criando um elemento de lista;
        naLista.textContent = listaAmigos[i]; // Passando o nome do arary na lista a cada iteração;
        ul.appendChild(naLista); // Adiciona o elemento <li> como filho do <ul>;
    }
}

// Função que permite adicionar o nome do amigo;
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value;

    if (nomeAmigo.trim() != "") { // Impede que o usuário passe o nome vazio ou apenas com espaços;
        listaAmigos.push(nomeAmigo);  // Adiciona o nome ao array;
        nomeNaLista(); // Função que atualiza a lista no DOM <li>;
        limparNome(); // Limpa o campo de entrada do nome;
    } else {
        alert("Por favor, insira um nome");
    }
}