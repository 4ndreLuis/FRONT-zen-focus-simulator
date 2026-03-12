// 1. SELEÇÃO DE ELEMENTOS
const displayInstrucao = document.querySelector(
  "#instrucao",
) as HTMLHeadingElement;
const displayCiclos = document.querySelector(
  "#contadorCiclos",
) as HTMLSpanElement;
const displayCirculo = document.querySelector("#circuloZen") as HTMLDivElement;
const btnIniciar = document.querySelector("#btnIniciar") as HTMLButtonElement;
const selecionarModo = document.querySelector(
  "#selectModo",
) as HTMLSelectElement;

let totalCiclos: number = 0;
let estaAtivo: boolean = false;
let faseInspirar: boolean = true;
let intervaloId: number | null = null;

const executarCiclo = () => {
  if (faseInspirar) {
    displayInstrucao.textContent = "Inspire...";
    displayCirculo.style.transform = "scale(2)";
    displayCirculo.style.backgroundColor = "#4fd1c5";
    document.body.style.backgroundColor = "#1a202c";

    faseInspirar = false;
  } else {
    displayInstrucao.textContent = "Expire...";
    displayCirculo.style.transform = "scale(1)";
    displayCirculo.style.backgroundColor = "#2d3748";
    document.body.style.backgroundColor = "#1a1a1a";

    faseInspirar = true;

    totalCiclos++;
    displayCiclos.textContent = totalCiclos.toString();
  }
};

const alternarPratica = () => {
  if (!estaAtivo) {
    estaAtivo = true;
    btnIniciar.textContent = "Parar";
    btnIniciar.style.backgroundColor = "#e27f0eff";
    const tempo = selecionarModo.value === "relaxar" ? 4000 : 2000;

    executarCiclo();
    intervaloId = window.setInterval(executarCiclo, tempo);
  } else {
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

btnIniciar.addEventListener("click", alternarPratica);
