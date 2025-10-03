document.addEventListener('DOMContentLoaded', function() {
    // Get the current year using JavaScript
    const currentYear = new Date().getFullYear();

    // Set the current year in the HTML element with id "current-year"
    document.getElementById("current-year").textContent = currentYear;
    
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to the Static Web App!';

    const button = document.getElementById('clickMe');
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
});
