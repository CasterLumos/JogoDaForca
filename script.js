var iniciar = confirm("Deseja iniciar o jogo?");
letrasDigitadas = [];
var m = 0;
let temas = {
    frutas: [
        'maçã', 'banana', 'pera', 'abacate', 'mamão'
    ],
    cidades: [
        'Bauru', 'Jau', 'Jaboticabal'
    ]
}
if (iniciar) {
    var tema = prompt("Qual tema deseja jogar?")
    selecionaTema(tema)
}

function selecionaTema(tema) {
    words = temas[tema]
    criptografia(words);
}

function criptografia(word) {

    palavra = document.querySelector("#palavra");
    rnd = Math.floor(Math.random() * Object.keys(word).length);
    k = 0;
    cripto = words[rnd];
    splits = cripto.split('');
    while (k < splits.length) {
        splits[k] = '_'
        k++;
    }
    cripto2 = splits.join(' ')
    palavra.innerText = cripto2;
}

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





}