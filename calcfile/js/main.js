let input = document.getElementById('myInput');
let buttons = document.querySelectorAll('button');

function calculate(expression) {
    console.log(expression);
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}
function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } 
    // else if (buttonValue === 'DEL') {
    //     input.value = input.value.slice(0, -1);
    // } 
    else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } 
    
     else {
        input.value += buttonValue;
    }
}
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});
function del(){
    input.value = input.value.slice(0, -1);
}
 

function glow(){
    let inputBox=document.getElementById('myInput');
    let color1 = "rgb(107, 144, 107)";
    let color2 = "rgb(205, 247, 55)";
        let clr = document.getElementById("myInput").style.backgroundColor;
    if(clr===color1){
        inputBox.style.backgroundColor=(color2);
    }
    else{
        inputBox.style.backgroundColor=(color1);
    }
    
}


