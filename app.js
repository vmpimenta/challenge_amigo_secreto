let listaAmigos = [];

// Função que limpa o campo após adicionar um nome;
function limparNome() {
    let nomeAmigo = document.querySelector("input"); // Armazenando o input na varialvel nomeAmigo pra melhorar a manipulação;
    nomeAmigo.value = ""; // Limpa o campo quando o usuário digita um nome para melhorar sua exp;
}

// Função para mostrar a lista com os nomes adicionados;
function nomeNaLista() {
    let ul = document.getElementById("listaAmigos"); // Armazena o elemento ul listaAmigos na variavel ul pra melhorar a manipulação;
    ul.innerHTML = ""; // Garante que a lista seja limpa pra evitar duplicação do for;

    for (let i = 0; i < listaAmigos.length; i++) {
        let naLista = document.createElement("li"); // Criando um elemento de lista;
        naLista.textContent = listaAmigos[i]; // Passando o nome do arary na lista a cada iteração;
        ul.appendChild(naLista); // Adiciona o elemento <li> como filho do <ul>;
    }
}

// Função que permite adicionar o nome do amigo;
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value; // Armazenando o valor(nome do amigo) passado pelo input;

    if (nomeAmigo.trim() != "") { // Impede que o usuário passe o nome vazio ou apenas com espaços;
        listaAmigos.push(nomeAmigo);  // Adiciona o nome ao array;
        nomeNaLista(); // Função que atualiza a lista no DOM <li>;
        limparNome(); // Limpa o campo de entrada do nome;
    } else {
        alert("Por favor, insira um nome");
    }
}

function sortearAmigo() {
    let ulResultado = document.getElementById("resultado"); // Acessando o elmento pelo id;
    ulResultado.innerHTML = ""; // Garantindo que vai estar vazio;

    aleatorio = Math.floor(Math.random() * listaAmigos.length); // Gerando um indice aleatorio pro resultado do sorteio;

    let ulListaAmigo = document.getElementById("listaAmigos"); // Acessando o DOM lista de amigos;

    if (listaAmigos.length == 0) {
        alert("Adicione amigos antes de sortear! "); // Condicional para ter algum nome na lista antes do sorteio;
    } else {
        let sorteado = document.createElement("li"); // Criando um elemento de lista.
        sorteado.innerHTML = `O amigo sorteado é: ${listaAmigos[aleatorio]}`; // Dessa forma consigo passar o texto junto com o resultado pra adicionar no DOM "resultado" de forma aleatoria;
        ulResultado.appendChild(sorteado); // Adiciona o resultado do sorteio no DOM "resultado";
        listaAmigos.splice(aleatorio, 1); // Caso queira remover o nome da lista de amigos depois do sorteio, para que ele não possa mais ser sorteado;
        ulListaAmigo.innerHTML = ""; // Limpa a lista de amigos na tela após o sorteio;
        //nomeNaLista(); // Aqui atualiza a lista na tela depois da remoção;

        listaAmigos = []; // Faz sentido limpar a lista após o sorteio para que o usuário passe novos nomes e faça outro sorteio;

        // O CÓDIGO ACIMA QUE ESTÁ COMENTADO TRAZ UMA SOLUÇÃO ONDE APOS O SORTEIO, O NOME SORTEADO SAI DA LISTA PERMITINDO CONTINUAR O SORTEIO E TAMBÉM ADICIONAR NOVOS NOMES...
        // ...CONTUDO, A LISTA FICA DINÂMICA PORÉM VISIVEL; *** PARA TESTAR COMENTE A LINHA 52 E TIRE O OS COMENTÁRIOS -> (//) DOS CODIGOS NAS LINHAS 48 E 50...
        //... SE REALMENTE QUISER DEIXAR SECRETO, E NÃO QUER DEIXAR A LISTA VISIVEL COMENTE A LINHA 27 E COMENTE A FUNÇÃO "nomeNaLista", 
    }
}