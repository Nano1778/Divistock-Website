// Create UI
const chooseCrypto = document.querySelector('.chooseCrypto');
const writeContact = document.querySelector('.writeContact');
const ethAddress = document.querySelector('.ethAddress');

// Event listeners
document.addEventListener('DOMContentLoaded', hideCards);

document.getElementById('invest-option-btn2').addEventListener('click', stepTwo);

const scriptURL = 'https://script.google.com/macros/s/AKfycbwvInEibscvS2ktocEb9mJ6t5aNPiTgMRUdORtFxA/exec';
const form = document.forms['submit-to-google-sheet'];
const nameInput = document.getElementById('nameInput').value;
const emailInput = document.getElementById('nameInput').value;
const addressInput = document.getElementById('nameInput').value;

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

});

// Hide cards
function hideCards () {
    writeContact.style.display = 'none';
    ethAddress.style.display = 'none';
}

function stepTwo() {
    $('.chooseCrypto').fadeOut();
    $(".writeContact").delay(700).fadeIn();
    // if(nameInput === ''){
    //     console.log('fuck');
    // }else if(nameInput !== '') {
        document.getElementById('submitBtn').addEventListener('click', stepThree);
    // }

}

function stepThree() {

        $('.writeContact').fadeOut();
        $(".ethAddress").delay(700).fadeIn();
        chooseCrypto.style.display = 'none';
}
