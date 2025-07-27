// Calculator functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        // Replace × with * for proper evaluation
        expression = expression.replace(/×/g, '*');
        const result = eval(expression);
        
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid operation');
        }
        document.getElementById('display').value = result;
    } catch(error) {
        document.getElementById('display').value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

// Theme switching
const THEMES = [
    { name: 'light', position: '0' },
    { name: 'dark', position: '1' },
    { name: 'blue', position: '2' }
];

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedPosition = localStorage.getItem('themePosition') || '0';
    
    document.body.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-slider').setAttribute('data-position', savedPosition);
}

function toggleTheme() {
    const currentPosition = document.getElementById('theme-slider').getAttribute('data-position');
    const currentIndex = THEMES.findIndex(t => t.position === currentPosition);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    const nextTheme = THEMES[nextIndex];
    
    document.body.setAttribute('data-theme', nextTheme.name);
    document.getElementById('theme-slider').setAttribute('data-position', nextTheme.position);
    
    localStorage.setItem('theme', nextTheme.name);
    localStorage.setItem('themePosition', nextTheme.position);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    document.getElementById('theme-slider').addEventListener('click', toggleTheme);
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (/[0-9+\-*/.]/.test(e.key)) {
            appendToDisplay(e.key);
        } else if (e.key === 'Enter') {
            calculateResult();
        } else if (e.key === 'Escape') {
            clearDisplay();
        } else if (e.key === 'Backspace') {
            deleteLastChar();
        } else if (e.key === '*') {
            appendToDisplay('×');
        }
    });
});