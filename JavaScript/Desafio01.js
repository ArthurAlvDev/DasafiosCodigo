function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100) + 1;
}

function jogoAdivinhacao() {
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 0;
    
    alert("Bem vindo ao jogo de adivinhação!")
    alert("Tente adivinhar o número entre 1 e 100.")
    
    while (true) {
        let chute = prompt("Qual o seu palpite?");
        if (isNaN(chute) || chute === null || chute.trim() ===""){
            alert("Por favor, insira um número válido.")
            continue;
        }
        chute = parseInt(chute);
        tentativas++;
        
        if (chute < numeroSecreto){
            alert("Muito baixo. Tente novamente.");
        } else if (chute > numeroSecreto) {
            alert("Muito alto. Tente novamente.");
        } else {
            alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
            break;
        }
    }
}

jogoAdivinhacao();
