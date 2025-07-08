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

/*******************************
 * 🗞 ROTADOR DE NOTAS AUTOMÁTICO
 * Fecha de inicio: 7 de julio de 2025, 8:00 PM
 *******************************/

// 📆 Fecha y hora del primer día
const fechaInicioNotas = new Date("2025-07-07T20:00:00"); // 8:00 PM del lunes

// ⏱ Milisegundos en 24 horas
const unDia = 1000 * 60 * 60 * 24;

// ✍ Aquí puedes escribir tus 7 notas (NO CAMBIES EL ORDEN)
// Solo edita título y contenido, respeta las comas y llaves
const notas = [
  {
    titulo: " ESTAMOS DE REGRESO ",
    contenido: "Mi niña bonita 💖, antes que nada quiero pedirte disculpas por todo este tiempo que estuve sin escribir en este lugar, nuestro lugar ✍️. Aquí fue donde prometí demostrarte cada semana mi amor con lo que mejor sé hacer: con palabras. Por una cosa o por otra, siempre surgía un contratiempo y no lograba sentarme a escribirte como mereces. \n\nSé que fue mucho tiempo, y por eso, para compensarlo, durante los próximos 7 días te compartiré lo que siento en una nota diaria 📆. No tienes idea de cuánto te extraño, hermosa 😔💞, pero también sé que ahora lo que más necesitas es estar tranquila contigo misma, acompañando a tu papá en los momentos más difíciles. \n\nCuando todo esto pase, cuando la vida vuelva a darnos calma —o incluso algo mejor que antes—, aquí estaré, esperándote con todo el amor del mundo. Sé que tú también estarás para mí. Te amo con todo mi ser, más de lo que jamás imaginaste. Y te pienso, y te sueño, y te miro con el alma 💌. Nunca lo olvides: TE AMO y TE MIRO como nunca antes ❤️."
  },
  {
    titulo: " UN NUEVO DÍA UNA NUEVA NOTA ",
    contenido: "Holi princesa 🌙✨, antes que nada espero que tengas una hermosa noche llena de calma. En esta nota quiero contarte lo que he sentido en estos días sin ti. Ya ha pasado más de un mes desde la última vez que te vi 😢, y te extraño como no tienes idea. Pero es un sentimiento curioso, porque no es una tristeza que me hunda... es más bien una nostalgia que me hace sentirte cerca, incluso cuando no lo estás físicamente.\n\nMe siento inmensamente feliz por haber estado contigo en lo que tal vez ha sido uno de los momentos más difíciles de tu vida, y haber podido sacarte una sonrisa en medio de todo ese dolor 🥹. Ver cómo, conforme tu papá iba mejorando, tú también ibas recuperando ese brillo tan tuyo ✨, fue como ver cómo se encendía una estrella en medio de la oscuridad. \n\nY por eso, aunque te extraño muchísimo, no me siento triste. Porque tu felicidad es la mía 🌻, y saber que estás donde debes estar, haciendo lo correcto, me llena el corazón. TE AMO con todas mis fuerzas, sin medida, sin condiciones. Simplemente, te amo 💘."
  },
  {
    titulo: " DÍA 3: UNA PAUSA EN EL TIEMPO ",
    contenido: "Amor mío 💞, hoy el día se siente más lento, como si el tiempo se hubiera detenido un instante. Y en ese silencio, apareces tú. (es eso o estoy muy mariguanito) Tu voz en mi mente, tu sonrisa en mi recuerdo, tu esencia en cada cosa que me rodea. Me haces tanta falta, pero al mismo tiempo, te siento tan presente... \n\nSé que ahora estás donde más se necesita tu luz, y eso me hace admirarte aún más. Tu fuerza, tu entrega, tu capacidad de amar incluso cuando duele, me dejan sin palabras. Me encantaría poder tomarte la mano ahora, decirte que todo va a estar bien, pero mientras ese momento llega, te escribo desde aquí, con todo lo que soy ✍️❤️.\n\nGracias por existir, por quedarte en mi vida, por compartir conmigo esta historia que apenas comienza 📖. Te pienso en cada canción, en cada estrella que aparece en el cielo cuando anochece 🌌. Te amo, y no hay distancia que borre eso."
  },
  {
    titulo: " DÍA 4: CONTIGO, SIEMPRE CONTIGO ",
    contenido: "Hoy desperté con tu nombre en los labios. A veces no entiendo cómo es que puedo sentirte tan cerca, incluso cuando no estás. Pero es que estás en mí de tantas formas… en mis pensamientos, en mis recuerdos, en lo que espero del futuro contigo .\n\nTu ausencia física ha hecho más fuerte mi certeza de que eres tú. Eres mi persona favorita, mi lugar seguro, mi paz en medio de la tormenta. Y aunque los días sin ti se sienten largos, también se sienten llenos de amor. Porque no necesito tenerte al lado para amarte, simplemente me nace, sin esfuerzo, como respirar 💓.\n\nTú eres mi hogar, princesa 🏡. El lugar donde todo tiene sentido. Y aunque hoy no pueda abrazarte, te mando estas palabras como un lazo invisible que nos une. Te amo más de lo que estas letras pueden decir, pero aún así, seguiré escribiendo. Porque amarte es lo más bonito que me ha pasado 💕."
  },
  {
    titulo: " DÍA 5: NO ESTÁS SOLA ",
    contenido: "Mi cielo 🌟, hoy quiero que te grabes esto en el corazón: no estás sola. Puede que haya momentos en que el dolor pese, en que las lágrimas aparezcan sin aviso, en que parezca que el mundo se desmorona. Pero incluso en esos días oscuros, quiero que recuerdes que aquí estoy yo, contigo 💗.\n\nTal vez no pueda tomar tu mano ahora mismo, pero te acompaño con el alma. Desde la distancia, te abrazo con estas palabras, con este amor que no conoce fronteras 🌍. Estoy aquí para ti, en tus silencios, en tus suspiros, en tus batallas internas. Siempre lo estaré.\n\nY cuando todo esto pase, cuando podamos abrazarnos otra vez, quiero que sepas que no tendrás que cargar sola nunca más 🫂. Este amor que te tengo es refugio, es abrigo, es compañía. Te amo con una certeza absoluta, una de esas que no se tambalean. Siempre, mi amor. Siempre ❤️."
  },
  {
    titulo: " DÍA 6: ENTRE AUSENCIAS Y CERTEZAS ",
    contenido: "Amorcito 💖, hoy es el penúltimo día de esta serie de notas, y me he dado cuenta de algo muy hermoso: aunque estemos lejos, nunca hemos estado realmente separados. Hay un lazo entre tú y yo que ni la distancia ni el tiempo pueden romper ⏳.\n\nSé que este momento está siendo durísimo para ti. Has tenido que ser fuerte por fuera aunque por dentro estés hecha pedacitos, y eso solo demuestra lo maravillosa que eres. Admiro tu fuerza, tu luz, tu amor tan grande por los tuyos 🕊️. \n\nYo aquí sigo, pensándote, imaginándote, queriéndote con más fuerza que nunca. Y aunque me muera de ganas de abrazarte, de decirte todo esto al oído, mientras ese momento llega, me consuela saber que tú también sientes este amor ❤️‍🔥.\n\nGracias por amarme, por elegirme, incluso desde la distancia. Yo también te elijo a ti, todos los días, sin dudarlo. Te amo como nunca, mi cielo ☁️💘."
  },
  {
    titulo: " ULTIMA NOTA ",
    contenido: "Después de 7 días llegamos a esta última nota de la semana 📆💌. Espero que con cada palabra hayas sentido lo mucho que te amo, y que todo esto que escribo te abrace desde dentro. Porque aunque a veces me cueste expresarlo, mi amor por ti es gigante, y no cabe en un solo mensaje.\n\nTe extraño muchísimo, preciosa 😢, y créeme que no exagero cuando digo que por ti esperaría una vida entera. Pero lo más hermoso de todo es que no necesitamos esperar: estamos construyendo algo real, sólido y lleno de amor. Esto apenas empieza, mi amor. Nos queda una vida entera para seguir escribiendo juntos esta historia 📝❤️.\n\nEsta es la última nota diaria, pero no te preocupes: a partir del viernes volveré a escribirte semanalmente, como te lo prometí desde el inicio. Nunca encontraré las palabras perfectas, pero sé que tú puedes sentirlo. \n\nTE AMO más que ayer y menos que mañana 💫. Siempre será así, mi princesa 👑."
  }
];


// 🔁 Función principal para mostrar la nota del día
function mostrarNotaDelDia() {
  const ahora = new Date();
  const diasTranscurridos = Math.floor((ahora - fechaInicioNotas) / unDia);
  
  let indiceNota = Math.min(diasTranscurridos, notas.length - 1); // nunca pasa del último día
  const nota = notas[indiceNota];

  document.getElementById("titulo-nota").textContent = nota.titulo;
  document.getElementById("contenido-nota").textContent = nota.content || nota.contenido;

  // Ocultar el contador si ya pasó el día 7
  const contador = document.getElementById("contador-nota");
  if (diasTranscurridos >= notas.length - 1) {
    contador.style.display = "none";
  }
}

// ⏳ Contador regresivo hasta la próxima nota
function iniciarContador() {
  const ahora = new Date();
  const diasTranscurridos = Math.floor((ahora - fechaInicioNotas) / unDia);
  const proximaPublicacion = new Date(fechaInicioNotas.getTime() + (diasTranscurridos + 1) * unDia);

  function actualizar() {
    const ahora = new Date();
    const tiempoRestante = proximaPublicacion - ahora;

    if (tiempoRestante <= 0) {
      location.reload(); // Recarga para mostrar la siguiente nota
      return;
    }

    const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tiempoRestante / 1000) % 60);

    const texto =` ⏳ Siguiente nota en: ${horas}h ${minutos}m ${segundos < 10 ? "0" : ""}${segundos}s`;

    const contador = document.getElementById("contador-nota");
    if (contador) {
      contador.textContent = texto;
    }
  }

  setInterval(actualizar, 1000);
  actualizar();
}

// 🔄 Ejecutar
mostrarNotaDelDia();
iniciarContador();