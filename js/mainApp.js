// Create UI
const chooseCrypto = document.querySelector('.chooseCrypto');
const writeContact = document.querySelector('.writeContact');
const ethAddress = document.querySelector('.ethAddress');

// Event listeners
document.addEventListener('DOMContentLoaded', hideCards);

document.getElementById('invest-option-btn2').addEventListener('click', stepTwo);

const scriptURL = 'https://script.google.com/macros/s/AKfycbwvInEibscvS2ktocEb9mJ6t5aNPiTgMRUdORtFxA/exec';
const form = document.forms['submit-to-google-sheet'];



document.getElementById('submitBtn').addEventListener('click',submitting);

function submitting(){
    document.getElementById('please').innerText = 'Submitting please wait ... ';

}

form.addEventListener('submit', e => {

    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(() => {
        stepThree();
        })
        .catch(error => error);


});

// Hide cards
function hideCards () {
    writeContact.style.display = 'none';
    ethAddress.style.display = 'none';
}

function stepTwo() {
    $('.chooseCrypto').fadeOut();
    $(".writeContact").delay(700).fadeIn();
}

function stepThree() {

        $('.writeContact').fadeOut();
        $(".ethAddress").delay(700).fadeIn();
        chooseCrypto.style.display = 'none';
}
