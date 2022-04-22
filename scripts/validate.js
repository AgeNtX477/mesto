const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__error_visible');
};

const checkValidity = (formElement, inputElement) => {

    const isInputNotValid = !inputElement.validity.valid;
    console.log(inputElement.name, isInputNotValid, inputElement.validity);
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setInputListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', e => console.log(e.target.name, e.target.value));
        checkValidity(formElement, inputElement);
    })
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(formElement => {
        formElement.addEventListener('submit', e => e.preventDefault())
        setInputListeners(formElement);
    });
};

enableValidation();






































/* const validateObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup___error',
    errorClass: 'popup__error_visible'
};

enableValidation(validateObj);

function enableValidation({ formSelector, inputSelector, errorClass }) {
    const formList = document.querySelectorAll(formSelector)
    formList.forEach(form => {
        form.addEventListener('submit', e => e.preventDefault())
        const inputList = form.querySelectorAll(inputSelector)
        inputList.forEach(input => {
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
};

const toggleButtonState = (inputList, submitButtonSelector) => {
    const hasInvalidInput = true;
    if (hasInvalidInput) {
        submitButtonSelector.classList.add('popup__submit_disabled');
        submitButtonSelector.setAttribute('disabled', true);
    } else {
        submitButtonSelector.classList.remove('popup__submit_disabled');
        submitButtonSelector.removeAttribute('disabled');
    }
} */