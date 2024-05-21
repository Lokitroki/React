import imagesGame from '../assets/imagesGame.jsx'
/*Variables array que contienen las imagenes */
var images = [
    <img src={imagesGame.a0}/>,
    <img src={imagesGame.a1}/>,
    <img src={imagesGame.a2}/>,
    <img src={imagesGame.a3}/>,
    <img src={imagesGame.a4}/>
];

/* Inicializamos la variable a 0*/
var currentIndex = 0;

/* Funcion para mostar imagen */
function showImage(imageSrc) {
    /* Selecionamos la imagen que queremos */
    document.getElementById('popup-img').src = imageSrc;
}

/* Funcion que abre la imagen selecionada */
function openPopup(imageSrc) {
    /* Encontramos el indice de la imagen que queremos en la array*/
    currentIndex = images.indexOf(imageSrc);
    /* Llamamos a la funcion showImage para mostrarla en el popup */
    showImage(imageSrc);
    /* Le damos estilo */
    document.getElementById('popup').style.display = 'flex';
    document.body.style.overflow = "hidden";
    /* Actualizamos los puntos del carrusel */
    updateDots();
}
/* Funcion que cierra la imagen selecionada */
function closePopup(event) {
    /*Comprobamos si hacemos clic en la imagen usando tarjet para ver si estamos dando dentro del div popup que es el que tiene las iamgenes */
    if (event.target.classList.contains('popup')) {
        /* Oculta el popup estableciendo el estilo en 'none' */
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = "auto";
    }
}
/* Funcion que muestra la imagen anterior */
function previousImage() {
    /* Calculamos el indice anterior para ir a el  */
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    /* Llamamos a la funcion showImage para mostrarla en el popup */
    showImage(images[currentIndex]);
    /* Actualizamos los puntos del carrusel */
    updateDots();
}
/* Funcion que muestra la imagen siguiente */
function nextImage() {
    /* Calculamos el indice siguiente para ir a el  */
    currentIndex = (currentIndex + 1) % images.length;
    /* Llamamos a la funcion showImage para mostrarla en el popup */
    showImage(images[currentIndex]);
    /* Actualizamos los puntos del carrusel */
    updateDots();
}

/* Función para actualizar los puntos del carrusel */
function updateDots() {
    /* Seleccionamos todos los elementos img dentro de los puntos del carrusel*/
    var dots = document.querySelectorAll('.dots-container .dot img');
    /*Iteramos sobre cada punto del carrusel*/
    dots.forEach(function(dot, index) {
        /*Si coincide el indice del punto con el de la imagen pintamos el punto relleno*/
        if (index === currentIndex) {
            dot.src = 'recursos/InterfazGame/PuntoCarruselFilled.png';
            /*Si no pintamos punto vacio*/
        } else {
            dot.src = 'recursos/InterfazGame/PuntoCarruselEmpty.png';
        }
    });
}

function changeImage(index) {
    // Actualizar el índice actual al hacer clic en un punto
    currentIndex = index;
    // Mostrar la imagen correspondiente al punto seleccionado
    showImage(images[currentIndex]);
    // Actualizar los puntos del carrusel
    updateDots();
}