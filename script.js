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
