onload = () =>{
    document.body.classList.remove("container");
};

function lanzarNombre(nombre) {
  const div = document.createElement('div');
  div.className = 'nombre-flotante';
  div.textContent = nombre;
  div.style.left = `${Math.random() * 80 + 10}vw`;
  div.style.top = `${Math.random() * 80 + 10}vh`;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 6000); // Elimina después de la animación
}

