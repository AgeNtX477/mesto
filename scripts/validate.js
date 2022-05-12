function getErrorElement(inputElement) { // функция находит инпут с которым происходит взаимодействие(событие инпут)
    const input = inputElement.getAttribute('name');
    return document.getElementById(`${input}-error`);
};

function showInputError(formElement, inputElement, errorMessage, obj) { // функция которая показывает сообщения об ошибках и подчеркивает красным соответствующий инпут
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.classList.add(obj.errorClass);
};

function hideInputError(formElement, inputElement, obj) { // функция которая прячет сообщения об ошибках и удаляет красное подчеркивание соответвующего инпута
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = '';
    errorElement.classList.remove(obj.errorClass);
    inputElement.classList.remove(obj.inputErrorClass);
};

function checkValidity(formElement, inputElement, obj) { // функция проверки валидности инпутов всех форм.
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, obj);
    } else {
        hideInputError(formElement, inputElement, obj);
    }
};

function makeButtonInaсtive(inputList, submitButtonElement, obj) { // функция делает кнопку неактивной inputList
    submitButtonElement.classList.add(obj.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
};

function makeButtonActive(inputList, submitButtonElement, obj) { // функция делает кнопку активной inputList
    submitButtonElement.classList.remove(obj.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
};

function toggleButtonState(inputList, submitButtonElement, obj) { // функция переключения кнопки submit в зависимости от валидности инпутов
    const inputElements = Array.from(inputList) // создаем массив для дальнейшей проверки
    const hasInvalidInput = inputElements.some((inputElement) => { // методом some проверяем, есть ли невалидные инпуты
        return !inputElement.validity.valid;
    });
    if (hasInvalidInput) {
        makeButtonInaсtive(inputList, submitButtonElement, obj); // если есть не валидные инпуты то блокируем кнопку инпута и передаем ей "неактивный" класс
    } else {
        makeButtonActive(inputList, submitButtonElement, obj); // если все инпуты валидны, то и кнопка активна
    }
};

function setInputListeners(formElement, obj) { // функция слушателей инпутов
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector)); // находим все инпуты в проекте и превращаем их в массив
    const submitButtonElement = formElement.querySelector(obj.submitButtonSelector); // находим кнопку сабмита
    const inputListIterator = (inputElement => {
        const handleInput = () => {
            checkValidity(formElement, inputElement, obj);
            toggleButtonState(inputList, submitButtonElement, obj);
        };
        inputElement.addEventListener('input', handleInput)
    });
    toggleButtonState(inputList, submitButtonElement, obj);
    inputList.forEach(inputListIterator);
};

function enableValidation(obj) { // функция запуска валидации
    const formList = Array.from(document.querySelectorAll(obj.formSelector)); // находим все формы в проекте и превращаем их в массив
    const formListIterator = (formElement => {
        const handleFormSubmit = (e => e.preventDefault());
        formElement.addEventListener('submit', handleFormSubmit);
        setInputListeners(formElement, obj);
    });
    formList.forEach(formListIterator);
};

enableValidation(validateObj);