const boton = document.getElementById('btn-celebrar');
const mensajes = document.querySelectorAll('.mensaje, .subtitulo');
const galeria = document.getElementById('galeria');
const cancion = document.getElementById('cancion');
const tortaContainer = document.getElementById('torta-container');
const torta = document.getElementById('torta');
const btnSoplar = document.getElementById('btn-soplar');

function lanzarConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 2 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    confetti({
      ...defaults,
      particleCount: 50,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 250);
}

boton.addEventListener('click', () => {
  lanzarConfetti();

  // Mostrar mensajes
  mensajes.forEach(msg => {
    msg.classList.remove('oculto');
    msg.classList.add('mostrar');
  });

  // Mostrar torta
  tortaContainer.classList.remove('oculto');
  tortaContainer.classList.add('mostrar');

  // Mostrar galería
  galeria.classList.remove('oculto');
  galeria.classList.add('mostrar');

  // Reproducir canción
  cancion.volume = 1.0;
  cancion.play().catch(() => {
    alert("Tocá para permitir el sonido si no se escucha.");
  });

  // Ocultar botón principal
  boton.style.display = 'none';
});

// Soplar las velas
btnSoplar.addEventListener('click', () => {
  torta.src = 'img/torta-sin-velas.gif';
  btnSoplar.disabled = true;
  btnSoplar.innerText = '🎂 ¡Velas apagadas!';
});

