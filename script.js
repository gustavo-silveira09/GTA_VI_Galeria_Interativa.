
const fotos = [
    {
        arquivo: "imagens/foto1.jpg",
        legenda: "Vice City — luzes da cidade"
    },
    {
        arquivo: "imagens/foto2.jpg",
        legenda: "Leonida — paisagens e estradas"
    },
    {
        arquivo: "imagens/foto3.jpg",
        legenda: "Vida urbana — noite em Vice City"
    },
    {
        arquivo: "imagens/foto4.jpg",
        legenda: "Aventura — explorando o mapa"
    }
];

let indiceAtual = 0;
let temporizador = null;

// Elementos HTML
const imagem = document.getElementById("foto-principal");
const legenda = document.getElementById("legenda");
const contador = document.getElementById("contador");

const botaoAnterior = document.getElementById("anterior");
const botaoProxima = document.getElementById("proxima");
const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");

// Atualiza imagem, legenda e contador
function mostrarFoto() {

    imagem.src = fotos[indiceAtual].arquivo;
    imagem.alt = fotos[indiceAtual].legenda;

    legenda.textContent = fotos[indiceAtual].legenda;

    contador.textContent =
        `Foto ${indiceAtual + 1} de ${fotos.length}`;
}

// Próxima foto
function proximaFoto() {

    indiceAtual = (indiceAtual + 1) % fotos.length;

    mostrarFoto();
}

// Foto anterior
function fotoAnterior() {

    indiceAtual =
        (indiceAtual - 1 + fotos.length) % fotos.length;

    mostrarFoto();
}

// Botões de navegação
botaoProxima.addEventListener("click", proximaFoto);
botaoAnterior.addEventListener("click", fotoAnterior);

// Iniciar apresentação automática
function iniciarApresentacao() {

    if (temporizador !== null) {
        return;
    }

    temporizador = setInterval(proximaFoto, 2500);
}

// Pausar apresentação
function pausarApresentacao() {

    clearInterval(temporizador);

    temporizador = null;
}

// Eventos dos botões
botaoIniciar.addEventListener("click", iniciarApresentacao);
botaoPausar.addEventListener("click", pausarApresentacao);

// Exibe a primeira foto
mostrarFoto();
