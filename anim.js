<audio controls autoplay>
  <source src="flores-amarillas.mp3" type="audio/mpeg">
</audio>

<script>
// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array con las líneas de la canción y el segundo en que aparecen
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
    var fadeInDuration = 0.3; // Duración del efecto de aparición
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de 216 segundos (216000 ms)
setTimeout(ocultarTitulo, 216000);
</script>

<style>
body {
  text-align: center;
  background: #fffbe6;
  font-family: 'Arial', sans-serif;
}
#lyrics {
  font-size: 24px;
  margin-top: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.titulo {
  font-size: 28px;
  margin: 20px;
  animation: fadeIn 3s ease-in-out;
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
