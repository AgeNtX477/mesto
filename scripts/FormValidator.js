export class FormValidator {
    constructor(settings, form) {
        this._settings = settings;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._submitButtonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }

    _getErrorElement(inputElement) {
        const input = inputElement.getAttribute('name');
        return document.getElementById(`${input}-error`);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.classList.add(this._settings.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._getErrorElement(inputElement);
        errorElement.textContent = '';
        errorElement.classList.remove(this._settings.errorClass);
        inputElement.classList.remove(this._settings.inputErrorClass);
    }

    _checkValidity(inputElement) {
        const isInputNotValid = !inputElement.validity.valid;
        if (isInputNotValid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _makeButtonInaсtive() {
        this._submitButtonElement.classList.add(this._settings.inactiveButtonClass);
        this._submitButtonElement.setAttribute('disabled', true);
    }

    _makeButtonActive() {
        this._submitButtonElement.classList.remove(this._settings.inactiveButtonClass);
        this._submitButtonElement.removeAttribute('disabled');
    }

    _toggleButtonState() {
        const inputElements = Array.from(this._inputList) // создаем массив для дальнейшей проверки
        const hasInvalidInput = inputElements.some((inputElement) => { // методом some проверяем, есть ли невалидные инпуты
            return !inputElement.validity.valid;
        });
        if (hasInvalidInput) {
            this._makeButtonInaсtive(); // если есть не валидные инпуты то блокируем кнопку инпута и передаем ей "неактивный" класс
        } else {
            this._makeButtonActive(); // если все инпуты валидны, то и кнопка активна
        }
    }

    deactivateValidation() { // публичная функция которая делает кнопку не активной и чистит все сообщения об ошибке когда пользователь нажал кнопку закрыть
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    _setInputListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(inputElement);
                this._toggleButtonState();
            });
            this._toggleButtonState();
        });
    }

    enableValidation() {
        this._form.addEventListener('submmit', (e) => {
            e.preventDefault();
        });
        this._setInputListeners();
    }
}