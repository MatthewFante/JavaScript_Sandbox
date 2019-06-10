const factorialButton =  document.getElementById('factorialButton');
const factorialSolution = document.getElementById('factorialSolution');
const numberPicker = document.getElementById('number');

const functionHead = document.querySelector('.functionHead');

// const dot = document.querySelector('.dot');
// const factorialDiv = document.getElementById('factorial');

function factorial(x){
    let total = 1;
    for(let i = 0; i < x; i += 1){
        total = total * (x-i);
    }
    return total;
}

factorialButton.addEventListener('click', ()=> {
    factorialSolution.textContent = numberPicker.value + '! = ' + factorial(numberPicker.value);
});


$('.functionBody').hide();



$('.functionHead').click(function() {
    // functionHead.nextElementSibling.style.display = 'block';
    $(this).siblings('.functionBody').slideDown();
});
