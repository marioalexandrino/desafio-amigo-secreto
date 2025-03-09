let amigos = []; // Armazena os amigos

// Adiciona um amigo à lista
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();

    if (nome) {
        amigos.push(nome); // Adiciona o nome à lista
        atualizarLista(); // Atualiza a exibição dos amigos
        document.getElementById('amigo').value = ''; // Limpa o campo
    } else {
        alert("Digite um nome válido.");
    }
}

// Atualiza a lista de amigos exibida
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

// Sorteia um amigo
function sortearAmigo() {
    if (amigos.length < 5) {
        alert("Adicione pelo menos 5 amigos para sortear.");
        return;
    }

    // Sorteia uma pessoa e um amigo aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const amigosRestantes = amigos.filter(nome => nome !== sorteado);
    const amigoSorteado = amigosRestantes[Math.floor(Math.random() * amigosRestantes.length)];

    // Exibe o amigo sorteado
    mostrarResultado(amigoSorteado);
}

// Exibe o resultado do sorteio
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O Amigo Sorteado É: ${amigoSorteado}`;
}
