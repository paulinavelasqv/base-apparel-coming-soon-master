const iconError = document.getElementById('exclamation');
const btn = document.getElementById('btn');
const msgValidation = document.querySelector('.msg-validation');
const input = document.querySelector('input');

btn.addEventListener('click', function(){
    validarEmail();
})

function validarEmail(){
    var inputEmail = document.getElementById("emailInput");
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexEmail.test(inputEmail.value)) {
        iconError.style.display = "inline";
        msgValidation.classList.remove("hidden");
        input.style.border = "2px solid hsl(0, 93%, 68%)";
    } else {
        alert("Email OK");
    }
}