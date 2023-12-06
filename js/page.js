const body = document.querySelectorAll('body')

fetch('https://pixabay.com/es/photos/monta%C3%B1as-sol-nubes-cima-cumbre-190055/')
.then(result => result.json())
.then(data => console.log(data) )


document.addEventListener('DOMContentLoaded', function() {
    const carruselContainer = document.querySelector('.carrusel-container');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    let currentIndex = 0;
  
    function mostrarItem(index) {
      carruselItems.forEach(item => item.classList.remove('visible'));
      carruselItems[index].classList.add('visible');
    }
  
    function siguiente() {
      currentIndex = (currentIndex + 1) % carruselItems.length;
      mostrarItem(currentIndex);
    }
  
    function anterior() {
      currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
      mostrarItem(currentIndex);
    }
  
    mostrarItem(currentIndex);
  
    document.querySelector('button').addEventListener('click', anterior);
    document.querySelector('button + button').addEventListener('click', siguiente);
  });
  