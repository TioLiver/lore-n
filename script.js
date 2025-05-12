document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente ❤");
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Mostrar/ocultar la tarjeta
function toggleLoveCard() {
    const card = document.getElementById("loveCard");
    card.style.display = (card.style.display === "none") ? "block" : "none";
  }
  
  // Contador desde el 16 de enero de 2018
  const startDate = new Date("2018-01-16T00:00:00");
  
  function updateLoveTimer() {
    const now = new Date();
    const diff = now - startDate;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    document.getElementById("love-timer").textContent=`${days} días ${hours} horas ${minutes} minutos ${seconds < 10 ? '0' : ''}${seconds} segundos`;
  }
  
  setInterval(updateLoveTimer, 1000);
  updateLoveTimer();
  
  // Corazones animados
  const container = document.querySelector(".heart-container");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    container.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }, 300);