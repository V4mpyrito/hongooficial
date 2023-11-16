const images = document.querySelectorAll('.carousel img');
let index = 0;

function changeImage() {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}

setInterval(changeImage, 10000); // Cambiar la imagen cada 10 segundos