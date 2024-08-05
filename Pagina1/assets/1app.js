document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.getElementById('miImagen');

    imagen.addEventListener('click', function() {
        if (imagen.style.border === '4px solid red') {
            imagen.style.border = 'none';
        } else {
            imagen.style.border = '4px solid red';
        }
    });
});
