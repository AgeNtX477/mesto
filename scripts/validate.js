const validateObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup___error', // для чего это нужно?
    errorClass: 'popup__error_visible'
};

const showInputError = (formSelector, inputSelector, errorClass) => {
    const inputName = inputSelector.getAttribute('name')
    const errorPlace = formSelector.getElementById(`${inputName}-error`)
    errorPlace.textContent = input.validationMessage
    errorPlace.classList.add(errorClass)
};

const hideInputError = (formSelector, inputSelector, errorClass) => {
    const inputName = inputSelector.getAttribute('name')
    const errorPlace = formSelector.getElementById(`${inputName}-error`)
    errorPlace.textContent = input.validationMessage
    errorPlace.classList.remove(errorClass)
};

const checkInputValidity = (formSelector, inputSelector) => {
    if (input.validity.valid) {
        hideInputError(formSelector, inputSelector)
    } else {
        showInputError(formSelector, inputSelector)
    }
};

const setEventListeners = (formSelector) => {
    const inputList = form.querySelectorAll(inputSelector);
    const buttonElement = formSelector.querySelectorAll(submitButtonSelector);
    toggleButtonState(inputSelector, submitButtonSelector);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', function() {
            checkInputValidity(formSelector, inputSelector);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation(formSelector) {
    const formList = document.querySelectorAll(formSelector)
    formList.forEach(form => {
        form.addEventListener('submit', e => e.preventDefault())
    })
};

const fieldsetList = document.querySelectorAll('.form__form-set');

fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
});

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
    }
};


enableValidation();