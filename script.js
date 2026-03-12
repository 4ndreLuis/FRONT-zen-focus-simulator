// 1. SELEÇÃO DE ELEMENTOS
var displayInstrucao = document.querySelector("#instrucao");
var displayCiclos = document.querySelector("#contadorCiclos");
var displayCirculo = document.querySelector("#circuloZen");
var btnIniciar = document.querySelector("#btnIniciar");
var selecionarModo = document.querySelector("#selectModo");
var totalCiclos = 0;
var estaAtivo = false;
var faseInspirar = true;
var intervaloId = null;
var executarCiclo = function () {
    if (faseInspirar) {
        displayInstrucao.textContent = "Inspire...";
        displayCirculo.style.transform = "scale(2)";
        displayCirculo.style.backgroundColor = "#4fd1c5";
        document.body.style.backgroundColor = "#1a202c";
        faseInspirar = false;
    }
    else {
        displayInstrucao.textContent = "Expire...";
        displayCirculo.style.transform = "scale(1)";
        displayCirculo.style.backgroundColor = "#2d3748";
        document.body.style.backgroundColor = "#1a1a1a";
        faseInspirar = true;
        totalCiclos++;
        displayCiclos.textContent = totalCiclos.toString();
    }
};
var alternarPratica = function () {
    if (!estaAtivo) {
        estaAtivo = true;
        btnIniciar.textContent = "Parar";
        btnIniciar.style.backgroundColor = "#e27f0eff";
        var tempo = selecionarModo.value === "relaxar" ? 4000 : 2000;
        executarCiclo();
        intervaloId = window.setInterval(executarCiclo, tempo);
    }
    else {
        estaAtivo = false;
        btnIniciar.textContent = "Iniciar Prática";
        btnIniciar.style.backgroundColor = "";
        btnIniciar.style.color = "";
        if (intervaloId !== null) {
            clearInterval(intervaloId);
            intervaloId = null;
        }
        displayInstrucao.textContent = "Prepare-se";
        displayCirculo.style.transform = "scale(1)";
        displayCirculo.style.backgroundColor = "";
        faseInspirar = true;
    }
};
// 5. EVENTO DE CLIQUE
btnIniciar.addEventListener("click", alternarPratica);
