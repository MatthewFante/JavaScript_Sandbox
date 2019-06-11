const factorialButton =  document.getElementById('factorialButton');
const factorialSolution = document.getElementById('factorialSolution');
const factorialInput = document.getElementById('factorialInput');


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


$('.functionBody').hide();

$('.functionHead').click(function() {
    if ($(this).siblings('.functionBody').css("display") == "none"){
        $(this).siblings('.functionBody').slideDown();
        }
    else {
        $(this).siblings('.functionBody').slideUp();
    }
});
