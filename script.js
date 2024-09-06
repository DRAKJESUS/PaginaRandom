document.getElementById('changeTextButton').addEventListener('click', function() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement.textContent === '¡Hola, bienvenido a mi página web!') {
        greetingElement.textContent = '¡Gracias por visitar!';
    } else {
        greetingElement.textContent = '¡Hola, bienvenido a mi página web!';
    }
});
