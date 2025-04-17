document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to the Static Web App!';

    const button = document.getElementById('clickMe');
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
});