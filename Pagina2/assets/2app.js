document.addEventListener('DOMContentLoaded', function() {
    const calcularButton = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');

    calcularButton.addEventListener('click', function() {
        const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
        const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
        const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

        const total = sticker1 + sticker2 + sticker3;

        if (total <= 10) {
            resultado.textContent = `Llevas ${total} stickers`;
            resultado.classList.remove('resultado-rojo');
            resultado.classList.add('resultado-azul');
        } else {
            resultado.textContent = "Llevas demasiados stickers";
            resultado.classList.remove('resultado-azul');
            resultado.classList.add('resultado-rojo');
        }
    });
});
