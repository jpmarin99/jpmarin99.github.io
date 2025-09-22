onload = () =>{
    document.body.classList.remove("container");
};

const nombresOriginales = ["Wendy", "Andy", "Mariana", "Vicky", "Angelly", "Liz", "Karime","Amai","Mamá Eve"];
const nombres = [...nombresOriginales].sort(() => Math.random() - 0.5); // Mezcla aleatoria

function lanzarNombre(nombre) {
  const div = document.createElement('div');
  div.className = 'nombre-flotante';
  div.textContent = nombre;
  div.style.left = `${Math.random() * 80 + 10}vw`;
  div.style.top = `${Math.random() * 80 + 10}vh`;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 6000); // Elimina después de la animación
}

let indexNombre = 0;
setInterval(() => {
  lanzarNombre(nombres[indexNombre]);
  indexNombre = (indexNombre + 1) % nombres.length;
}, 1200);
