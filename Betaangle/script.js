// script.js
function showCalculator() {
    const choice = document.getElementById('calculatorChoice').value;
    const calculators = document.querySelectorAll('.calculator');

    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    if (choice >= 1 && choice <= 4) {
        document.getElementById(`calculator${choice}`).style.display = 'block';
        loadCalculatorContent(choice);
    } else {
        alert('Please enter a valid number (1, 2, 3 or 4).');

    }
}

function loadCalculatorContent(choice) {
    // Clear previous content
    document.getElementById(`calc${choice}-content`).innerHTML = '';

    // Load the HTML content
    fetch(`calculator${choice}/calculator${choice}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById(`calc${choice}-content`).innerHTML = html;

            // Load the corresponding CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `calculator${choice}/calculator${choice}.css`;
            document.head.appendChild(link);

            // Load the corresponding JavaScript
            const script = document.createElement('script');
            script.src = `calculator${choice}/calculator${choice}.js`;
            document.body.appendChild(script);
        })
        .catch(err => console.error('Error loading calculator content:', err));
}