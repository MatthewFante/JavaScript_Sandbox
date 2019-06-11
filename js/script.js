// Defines the hide/display behavior of each function
$('.functionBody').hide();
$('.functionHead').click(function() {
    if ($(this).siblings('.functionBody').css("display") == "none"){
        $(this).siblings('.functionBody').slideDown();
        }
    else {
        $(this).siblings('.functionBody').slideUp();
    }
});

// Expand or Collapse all functions
$('#expandAll').click(function() {
    $('.functionBody').slideDown();
});

$('#collapseAll').click(function() {
    $('.functionBody').slideUp();
});

//Sets initial values for solution spans
function initialValues(){
    factorialSolution.textContent = '  x! = ____';
    multiplyDivideSolution.textContent = '[x * y = ___ ] or [x / y = ___]';
    removeLettersSolution.textContent = '[Resulting string]';
}

// Clear form inputs and solutions
$('#reset').click(function() {
    $('input').val('');
    initialValues();
});

// Function 1: Factorial
const factorialInput = document.getElementById('factorialInput');
const factorialButton =  document.getElementById('factorialButton');
const factorialSolution = document.getElementById('factorialSolution');

function factorial(x){
    let total = 1;
    for(let i = 0; i < x; i += 1){
        total = total * (x-i);
    }
    return total;
}
factorialButton.addEventListener('click', ()=> {
    factorialSolution.textContent = ' ' + factorialInput.value + '! = ' + factorial(factorialInput.value);
});


// Function 2: Multiply or Divide
const multiplyDivideInput1 = document.getElementById('multiplyDivideInput1');
const multiplyDivideInput2 = document.getElementById('multiplyDivideInput2');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const multiplyDivideSolution = document.getElementById('multiplyDivideSolution');

function multiply(x, y){
    let total;
    total = x * y;
    return total;
}

function divide(x, y){
    let total;
    total = x / y;
    return total;
}

multiplyButton.addEventListener('click', ()=> {
    multiplyDivideSolution.textContent = multiplyDivideInput1.value + ' * ' + multiplyDivideInput2.value + ' = ' + multiply(multiplyDivideInput1.value, multiplyDivideInput2.value);
});
divideButton.addEventListener('click', ()=> {
    multiplyDivideSolution.textContent = multiplyDivideInput1.value + ' / ' + multiplyDivideInput2.value + ' = ' + divide(multiplyDivideInput1.value, multiplyDivideInput2.value);
});

// Function 3: Remove vowels or consonants from string
const removeLettersInput = document.getElementById('removeLettersInput');
const removeVowelsButton = document.getElementById('removeVowelsButton');
const removeConsonantsButton = document.getElementById('removeConsonantsButton');
const removeLettersSolution = document.getElementById('removeLettersSolution');

function removeVowels(string){
    return string.replace(/[aeiou]/ig, '');
}

function removeConsonants(string){
    return string.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '');
}

removeVowelsButton.addEventListener('click', ()=> {
    removeLettersSolution.textContent = removeVowels(removeLettersInput.value);
});

removeConsonantsButton.addEventListener('click', ()=> {
    removeLettersSolution.textContent = removeConsonants(removeLettersInput.value);
});

//Runs when page loads to set initial values for solution fields
initialValues();