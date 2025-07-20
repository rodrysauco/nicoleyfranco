const startDate = new Date("2025-10-25T21:00:00");
const finishDate = new Date("2025-10-26T05:30:00");
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = startDate - now;
  const hasFinished = finishDate - now;
  if (distance < 0) {
    clearInterval(timer);
    countdownEl.textContent = "¡La fiesta ya empezo!";
    return;
  }

  if (hasFinished < 0) {
    clearInterval(timer);
    countdownEl.textContent = "La fiesta termino :(";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `¡Faltan ${days} dias, ${hours} horas y ${minutes} minutos!`;
}, 1000);

const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre") || "";

const nombreLower = nombre.toLowerCase();

// Variable para el mensaje personalizado
let mensaje = "";

if (nombreLower.includes("familia") || nombreLower.includes("flia") || nombreLower.includes('y')) {
  mensaje = `¡${nombre} los esperamos!`;
} else {
  mensaje = `¡${nombre} te esperamos!`;
}

document.getElementById("mensaje-invitado").textContent = mensaje;
if (!nombre) {
  document.getElementById("confirmar").style.display = 'none';
}

const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSexu-MnsBi1IpPapimaUHc89SV_4XnXUAS8XNhWhoxEJDK2tA/viewform?usp=pp_url&entry.1044132097=${encodeURIComponent(
  nombre
)}`;
document.getElementById("google-form-link").href = formURL;
