// Create UI
const chooseCrypto = document.querySelector('.chooseCrypto');
const writeContact = document.querySelector('.writeContact');
const ethAddress = document.querySelector('.ethAddress');

// Event listeners
document.addEventListener('DOMContentLoaded', hideCards);



document.getElementById('invest-option-btn2').addEventListener('click', stepTwo);



// Hide cards
function hideCards () {
    writeContact.style.display = 'none';
    ethAddress.style.display = 'none';
}

function stepTwo() {

    $('.chooseCrypto').fadeOut()
    $(".writeContact").fadeIn()

    document.getElementById('submitBtn').addEventListener('click', stepThree);

}

function stepThree() {
    
    $('.writeContact').fadeOut()
    $(".ethAddress").fadeIn()
//    chooseCrypto.style.display = 'none';
//    writeContact.style.display = 'none';
//    ethAddress.style.display = 'block';
}


