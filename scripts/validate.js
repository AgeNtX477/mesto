const validateObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup___error',
    errorClass: 'popup__error_visible'
};

enableValidation(validateObj);

function enableValidation({ formSelector, inputSelector, errorClass }) {
    const forms = document.querySelectorAll(formSelector)
    forms.forEach(form => {
        form.addEventListener('submit', e => e.preventDefault())
        const inputs = form.querySelectorAll(inputSelector)
        inputs.forEach(input => {
            input.addEventListener('input', e => {
                if (!input.validity.valid) {
                    const inputName = input.getAttribute('name')
                    const errorPlace = document.getElementById(`${inputName}-error`)
                    errorPlace.textContent = input.validationMessage
                    errorPlace.classList.add(errorClass)
                } else {
                    const inputName = input.getAttribute('name')
                    const errorPlace = document.getElementById(`${inputName}-error`)
                    errorPlace.classList.remove(errorClass)
                    errorPlace.textContent = '';
                }
            })
        })
    })
}