
const userInput = document.getElementById('userInput');
var expression = '';

const press = (input) => {
    expression += input;
    userInput.value = expression;
}

const equal = () => {
    userInput.value = eval(expression);
    expression = '';
}

const erase = () => {
    expression = '';
    userInput.value = expression;
}