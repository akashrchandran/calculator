const acBut = document.getElementById('ac');
const delBut = document.getElementById('del');
const equalBut = document.getElementById('equalBut');
const dotBut = document.getElementById('dot');
const screen = document.getElementById('display');
const topScreen = document.getElementById('topDisplay');
const numBut = document.querySelectorAll('.numberButton');
const operationBut = document.querySelectorAll('.operator');
const bracketBut = document.querySelectorAll('.bracketButton');


window.addEventListener('load', acFunc);

let calculation = [], showOnScreen = [];

function updateScreen() {
    topScreen.innerText = showOnScreen.join('');
}
function acFunc() {
    calculation = [];
    showOnScreen = [];
    screen.value = 0;
    updateScreen();
}
acBut.addEventListener('click', acFunc);
delBut.addEventListener('click', () => {
    calculation.pop();
    showOnScreen.pop();
    updateScreen();
})
numBut.forEach(element => {
    element.addEventListener('click', numButFunction);
})

function numButFunction(event) {
    calculation.push(event.target.innerText);
    showOnScreen.push(event.target.innerText);
    updateScreen();
}
operationBut.forEach(element => {
    element.addEventListener('click', operationButFunction);
})

function operationButFunction(event) {
    calculation.push(event.target.dataset.buttonSymbol);
    showOnScreen.push(event.target.innerText);
    updateScreen();
}

equalBut.addEventListener('click', equalFunc);

function equalFunc() {
    try {
        screen.value = math.evaluate(calculation.join(''));
    } catch(e) {
        screen.value = 'Syntax Error!';
    }
}