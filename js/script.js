var iniciar = confirm("Deseja iniciar o jogo?"); //Pergunta se Deseja Jogar
// Temas Disponiveis para jogar, Será removido assim que adicionar o Menu.
let temas = {
        frutas: [
            'maçã', 'banana', 'pera', 'abacate', 'mamão'
        ],
        cidades: [
            'Bauru', 'Jau', 'Jaboticabal'
        ]
    }
    //Aqui começa o jogo. 
if (iniciar) {
    letrasDigitadas = []; //Armazena Letras digitadas pelo jogador
    menu();
}

function menu() {
    var tema = prompt("Qual tema deseja jogar?")
    selecionaTema(tema)
}

function selecionaTema(tema) { //Aqui o usuário seleciona um dos temas disponiveis. 
    words = temas[tema]
    criptografia(words);
}

function criptografia(word) { //Aqui há o sorteio da palavra, encriptação e exibição da palavra encriptada. 

    palavra = document.querySelector("#palavra");
    rnd = Math.floor(Math.random() * Object.keys(word).length);
    cripto = words[rnd]; //Sorteia a palavra. 
    // Separa a palavra em um Array, e transforma cada elemento do array em _.
    splits = cripto.split('');
    k = 0;
    while (k < splits.length) {
        splits[k] = '_'
        k++;
    }
    cripto2 = splits.join(' ') //Junta o array, em uma string separando cada elemento por espaço.
    palavra.innerText = cripto2; // Exibe a palavra na tela.
}
//Aqui começa o processo de receber uma entrada do usuário e filtra-lá
var m = 0;

function enviar() {
    var letras = document.querySelector("#letras");
    var ph = document.getElementById("letra")
    var letra = ph.value;
    var alphaExp = /^[a-zA-Z\u00C0-\u00FF]+$/;

    if (letra.match(alphaExp)) {
        if (letrasDigitadas.indexOf(`${letra}`) === -1) {
            letrasDigitadas[m] = `${letra}`;
            m++
            ph.value = null;
            letras.innerText += `${letra}, `
            checagem(letra);
        } else {
            alert("Você já digitou essa letra!")
        }
    } else {
        alert("Permitido Somente Letras.");
        ph.value = null;
    }
}
//Aqui começa a checagem se há a letra na palavra. 
function checagem(letra) {
    splits2 = cripto.split('');
    var indices = [];
    var idx2 = splits2.indexOf(letra);
    while (idx2 != -1) {
        indices.push(idx2);
        idx2 = splits2.indexOf(letra, idx2 + 1);
    }
    decripta(letra, indices)
}
//Se houver a letra na palavra, então é necessário decriptar, após isso é mostrado novamente na tela. 
function decripta(letra, indices) {
    splits2 = cripto2.split('');
    idx3 = splits2.indexOf(' ');
    while (idx3 > 0) {
        splits2.splice(splits2.indexOf(' '), 1);
        idx3 = splits2.indexOf(' '), idx3 + 1;
    }
    cont = 0;
    while (cont < indices.length) {
        splits2[indices[cont]] = letra;
        cont++
    }
    cripto2 = splits2.join(' ')
    palavra.innerText = cripto2;
    if (splits2.indexOf('_') === -1) {
        alert("Você venceu! Parábens!");
        var jn = confirm("Deseja jogar novamente?");
        if (jn) {
            letrasDigitadas.length = 0;
            letras.innerText = 'Letras Digitadas:'
            menu();
        }
    }
}