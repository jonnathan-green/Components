let password = document.getElementById('password');
let toggleButton = document.getElementById('toggle_button');

let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let specialChar = document.getElementById('special');
let digit = document.getElementById('number');
let minLength = document.getElementById('length');

function chekPassword(data){

    //Expresion regular paterna de JS
    
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@%\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // Validacion de la expresion minuscula 

    if(lower.test(data)){
        lowerCase.classList.add('valid');
    } else{
        lowerCase.classList.remove('valid');
    }

    // Validacion de la expresion Mayuscula
    if(upper.test(data)){
        upperCase.classList.add('valid');
    } else{
        upperCase.classList.remove('valid');
    }

    // Validacion de la expresion de numero
    if(number.test(data)){
        digit.classList.add('valid');
    } else{
        digit.classList.remove('valid');
    }

    if(special.test(data)){
        specialChar.classList.add('valid');
    } else{
        specialChar.classList.remove('valid');
    }

    if(length.test(data)){
        minLength.classList.add('valid');
    } else{
        minLength.classList.remove('valid');
    }
}

toggleButton.onclick = function(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text')
        toggleButton.classList.add('hide')
    } else {
        password.setAttribute('type', 'password')
        toggleButton.classList.remove('hide')
    }
}