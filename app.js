let listaAmigos = [];

// Função que limpa o campo após adicionar um nome;
function limparNome() {
    let nomeAmigo = document.querySelector("input"); // Armazenando o input na varialvel nomeAmigo pra melhorar a manipulação;
    nomeAmigo.value = ""; // Limpa o campo quando o usuário digita um nome para melhorar sua exp;
}


// Função que permite adicionar o nome do amigo;
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value;

    if (nomeAmigo.trim() != "") { // Impede que o usuário passe o nome vazio ou apenas com espaços;
        listaAmigos.push(nomeAmigo);  // Adiciona o nome ao array;
        limparNome(); // Limpa o campo de entrada do nome;
    } else {
        alert("Por favor, insira um nome");
    }
    console.log(listaAmigos)
}