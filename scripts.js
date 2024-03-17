window.addEventListener("scroll", function () {
  var video = document.querySelector(".video_1");
  var infoDiv = document.querySelector(".informacion1");
  var scrollPosition = window.scrollY;

  // Suponiendo que quieras que el efecto comience después de 300px de scroll
  if (scrollPosition > 150) {
    var scale = 1 - (scrollPosition - 150) / 1000; // Ejemplo de cálculo para el efecto de escala
    scale = Math.max(scale, 0); // Evitar escala negativa
    video.style.transform = "scale(" + scale + ")";

    if (scale === 0) {
      video.style.display = "none"; // Esconde el video cuando está completamente pequeño
      infoDiv.style.display = "grid"; // Muestra la información
    }
  } else {
    video.style.transform = "scale(1)";
    video.style.display = "block";
    infoDiv.style.display = "none";
  }
});
