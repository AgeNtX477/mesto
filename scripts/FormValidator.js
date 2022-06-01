export class FormValidator {
    constructor(validateObj, formSelector) {
        this._validateObj = validateObj;
        this._formSelector = formSelector;
    }

    _getErrorElement(inputElement) {
        const input = inputElement.getAttribute('name');
        return document.getElementById(`${input}-error`);
    }

    _showInputError(formElement, inputElement, errorMessage, validateObj) {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(validateObj.inputErrorClass);
        errorElement.classList.add(validateObj.errorClass);
    }

    _hideInputError(formElement, inputElement, validateObj) {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.textContent = '';
        errorElement.classList.remove(validateObj.errorClass);
        inputElement.classList.remove(validateObj.inputErrorClass);
    }

    _checkValidity(formElement, inputElement, validateObj) {
        const isInputNotValid = !inputElement.validity.valid;
        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(formElement, inputElement, errorMessage, validateObj);
        } else {
            this._hideInputError(formElement, inputElement, validateObj);
        }
    }

    _makeButtonInaсtive(inputList, submitButtonElement, validateObj) {
        submitButtonElement.classList.add(validateObj.inactiveButtonClass);
        submitButtonElement.setAttribute('disabled', true);
    }

    _makeButtonActive(inputList, submitButtonElement, validateObj) {
        submitButtonElement.classList.remove(validateObj.inactiveButtonClass);
        submitButtonElement.removeAttribute('disabled');
    }

    _toggleButtonState(inputList, submitButtonElement, validateObj) {
        const inputElements = Array.from(inputList) // создаем массив для дальнейшей проверки
        const hasInvalidInput = inputElements.some((inputElement) => { // методом some проверяем, есть ли невалидные инпуты
            return !inputElement.validity.valid;
        });
        if (hasInvalidInput) {
            this._makeButtonInaсtive(inputList, submitButtonElement, validateObj); // если есть не валидные инпуты то блокируем кнопку инпута и передаем ей "неактивный" класс
        } else {
            this._makeButtonActive(inputList, submitButtonElement, validateObj); // если все инпуты валидны, то и кнопка активна
        }
    }

    _setInputListeners(formElement, validateObj) {
        const inputList = Array.from(formElement.querySelectorAll(validateObj.inputSelector)); // находим все инпуты в проекте и превращаем их в массив
        const submitButtonElement = formElement.querySelector(validateObj.submitButtonSelector); // находим кнопку сабмита
        const inputListIterator = (inputElement => {
            const handleInput = () => {
                this._checkValidity(formElement, inputElement, validateObj);
                this._toggleButtonState(inputList, submitButtonElement, validateObj);
            };
            inputElement.addEventListener('input', handleInput)
        });
        this._toggleButtonState(inputList, submitButtonElement, validateObj);
        inputList.forEach(inputListIterator);
    }

    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._formSelector)); // находим все формы в проекте и превращаем их в массив
        const formListIterator = (formElement => {
            const handleFormSubmit = (e => e.preventDefault());
            formElement.addEventListener('submit', handleFormSubmit);
            this._setInputListeners(formElement, this._validateObj);
        });
        formList.forEach(formListIterator);
    }
}