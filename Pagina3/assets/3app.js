document.addEventListener('DOMContentLoaded', function() {
    const digit1 = document.getElementById('digit1');
    const digit2 = document.getElementById('digit2');
    const digit3 = document.getElementById('digit3');

    const ingresarButton = document.getElementById('ingresar');
    const resultado = document.getElementById('resultado');

    ingresarButton.addEventListener('click', function() {
        const password = `${digit1.value}${digit2.value}${digit3.value}`;

        if (password === '911') {
            resultado.textContent = 'Password 1 correcto';
            resultado.classList.remove('incorrecto');
            resultado.classList.add('correcto');
        } else if (password === '714') {
            resultado.textContent = 'Password 2 correcto';
            resultado.classList.remove('incorrecto');
            resultado.classList.add('correcto');
        } else {
            resultado.textContent = 'Password incorrecto';
            resultado.classList.remove('correcto');
            resultado.classList.add('incorrecto');
        }
    });
});