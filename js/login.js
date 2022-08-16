const input = document.querySelector('.login__input');
const button = document.querySelector('.login.button');
const form = document.querySelector('.login__form')

const validateInput = ({target}) => {
    if (target.value.lenght > 2) {
        button.removeAttribute('disabled');
        return;
    }

     button.setAttribute('disabled', '');
}
const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('player', input.value);
    window.location = '/pages/game.html' ;
}
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);