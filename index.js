document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('header nav a');
  
    //Itera sobre cada enlace del menú
    //Cambia el color el texto al pasar el mouse por encima
    menuLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = 'violet';
      });
  

    //Reestablece el color original del texto al quitar el mouse de encima  
      link.addEventListener('mouseleave', () => {
        link.style.color = '';
      });
    
    //Controla la accioón a realizar al hacer click  
      link.addEventListener('click', (event) => {
        event.preventDefault();
    
    //Obtiene la id de la sección a la que apunrta el enlace y obtiene el elemento seleccionado    
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        
    //Realiza el desplazamiento suabe hacia la sección seleccionada    
        if (section) {
          window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop - 50 //(Desplazamiento vertical ajustado a 50px)
          });
        }
      });
    });
  });

// Obtenemos todas las imágenes del carrusel y las guardamos en una variable
const carouselImages = document.querySelectorAll('.carousel-image');

let currentImageIndex = 0; // Índice de la imagen actual
let isPaused = false; // Variable para controlar la pausa/play

// Función para mostrar la siguiente imagen
function showNextImage() {
    // Ocultamos la imagen actual
    carouselImages[currentImageIndex].style.display = 'none';
    
    // Incrementamos el índice para mostrar la siguiente imagen
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

    // Mostramos la siguiente imagen
    carouselImages[currentImageIndex].style.display = 'block';
}

// Función para controlar la pausa/play al hacer clic en el carrusel
function toggleCarouselPause() {
    if (!isPaused) {
        clearInterval(interval); // Pausamos el carrusel
    } else {
        interval = setInterval(showNextImage, 3000); // Reanudamos el carrusel después de 3 segundos
    }
    isPaused = !isPaused; // Cambiamos el estado de pausa/play
}

// Mostramos la primera imagen e iniciamos el carrusel
carouselImages[currentImageIndex].style.display = 'block';
let interval = setInterval(showNextImage, 3000); // Cambia de imagen cada 3 segundos

// Event listener para pausar/play al hacer clic en el carrusel
document.querySelector('.carousel-container').addEventListener('click', toggleCarouselPause);

  
