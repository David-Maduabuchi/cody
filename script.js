const form = document.getElementById('form');
const email = document.getElementById('email');
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
const paraText = () => {
    var popupText = document.getElementById("popupParagraph");
    popupText.innerHTML = "A confirmation email has been sent to <strong>" + email.value + "</strong>. Please open it and click the button inside it to confirm your subscription."
}

// Popup function
const openPopup = () => {
    popup.classList.add("open-popup");
    paraText();
}
const closePopup = () => {
    popup.classList.remove("open-popup");
    email.value = '';
}
// for the popup text


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    // The window.location.href helps you redirect you to another page
    openPopup();
}
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Valid Email Required');
    } else {
        setSuccess(email);
    }
}