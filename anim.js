// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 { text: "Ella sabía que algún día pasaría", time: 10 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 18 },
  { text: "Ella sabía que él sabía", time: 26 },
  { text: "Que algún día pasaría", time: 31 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 38 },

  { text: "No te apures, no detengas", time: 47 },
  { text: "El instante del encuentro", time: 52 },
  { text: "Está dicho que es un hecho", time: 58 },
  { text: "No la pierdas, no hay derecho", time: 62 },
  { text: "No te olvides que la vida", time: 68 },
  { text: "Casi nunca está dormida", time: 73 },

  { text: "En ese bar tan desierto", time: 82 },
  { text: "Nos esperaba el encuentro", time: 87 },
  { text: "Ella sabía que sabía", time: 93 },
  { text: "Que algún día pasaría", time: 98 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 104 },

  { text: "Ella sabía que él sabía", time: 112 },
  { text: "Que algún día pasaría", time: 118 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 124 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
