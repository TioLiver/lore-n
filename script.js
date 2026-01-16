/*********************************
 * 🧭 MENÚ DESPLEGABLE
 *********************************/
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

/*********************************
 * 💌 TARJETA ROMÁNTICA
 *********************************/
function toggleLoveCard() {
  const card = document.getElementById("loveCard");
  card.style.display = (card.style.display === "none") ? "block" : "none";
}

/*********************************
 * ⏳ CONTADOR DE AMOR
 * Desde el 16 de enero de 2018
 *********************************/
const startDate = new Date("2018-01-16T00:00:00");

function updateLoveTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timer = document.getElementById("love-timer");
  if (timer) {
    timer.textContent = `${days} días ${hours} horas ${minutes} minutos ${seconds < 10 ? '0' : ''}${seconds} segundos`;
  }
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();

/*********************************
 * ❤️ CORAZONES ANIMADOS
 *********************************/
const container = document.querySelector(".heart-container");

if (container) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 300);
}

// ⏰ FECHA REAL: mañana a las 7:00 AM
const fechaObjetivo = new Date();
fechaObjetivo.setDate(fechaObjetivo.getDate() + 1);
fechaObjetivo.setHours(7, 0, 0, 0);


const contador = document.getElementById("contador");
const tiempo = document.getElementById("tiempo");
const corazonContainer = document.getElementById("corazon-container");
const numero = document.getElementById("numero");
const nota = document.getElementById("nota-aniversario");

let valor = 8;

// ⏳ CONTADOR
setInterval(() => {
  const ahora = new Date();
  const diff = fechaObjetivo - ahora;

  if (diff <= 0) {
    contador.style.display = "none";
    corazonContainer.classList.remove("oculto");
    return;
  }

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  tiempo.textContent = `${h}h ${m}m ${s}s`;
}, 1000);

// ❤️ CLICS EN EL CORAZÓN
document.getElementById("corazon").addEventListener("click", () => {
  valor--;
  numero.textContent = valor;

  if (valor <= 0) {
    corazonContainer.style.display = "none";

    nota.classList.remove("oculto");
    nota.style.display = "block";

    lluviaOchos();
  }
});

// 🎉 LLUVIA DE 8 Y CONFETI ROMÁNTICO
function lluviaOchos() {
  const simbolos = ["8", "❤️", "💗", "✨", "🎉", "💖"];
  const colores = ["#f7a1c4", "#ffd1dc", "#cdb4db", "#bde0fe", "#ffc8dd"];

  for (let i = 0; i < 45; i++) {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");

    confeti.textContent =
      simbolos[Math.floor(Math.random() * simbolos.length)];

    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.color =
      colores[Math.floor(Math.random() * colores.length)];

    // 🔍 MÁS GRANDES
    confeti.style.fontSize =
      Math.random() * 20 + 36 + "px"; // entre 36px y 56px

    // 🐢 MÁS LENTOS
    confeti.style.animationDuration =
      Math.random() * 3 + 5 + "s"; // entre 5 y 8 segundos

    // 🎀 MÁS NATURAL
    confeti.style.opacity = Math.random() * 0.4 + 0.6;
    confeti.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confeti);

    // 🧹 SE ELIMINAN DESPUÉS
    setTimeout(() => confeti.remove(), 9000);
  }
}


