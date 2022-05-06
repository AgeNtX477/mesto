const getErrorElement = (inputElement) => { // функция находит инпут с которым происходит взаимодействие(событие инпут)
    const input = inputElement.getAttribute('name');
    return document.getElementById(`${input}-error`);
};

const showInputError = (formElement, inputElement, errorMessage, obj) => { // функция которая показывает сообщения об ошибках и подчеркивает красным соответствующий инпут
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.classList.add(obj.errorClass);
};

const hideInputError = (formElement, inputElement, obj) => { // функция которая прячет сообщения об ошибках и удаляет красное подчеркивание соответвующего инпута
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = '';
    errorElement.classList.remove(obj.errorClass);
    inputElement.classList.remove(obj.inputErrorClass);
};

const checkValidity = (formElement, inputElement, obj) => { // функция проверки инпутов и добавления соответсвующих классов при невалидности
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, obj);
    } else {
        hideInputError(formElement, inputElement, obj);
    }
};

const makeButtonIncative = (inputList, submitButtonElement, obj) => { // функция делает кнопку неактивной
    submitButtonElement.classList.add(obj.inactiveButtonClass);
    submitButtonElement.setAttribute('disabled', true);
};

const makeButtonActive = (inputList, submitButtonElement, obj) => { // функция делает кнопку активной
    submitButtonElement.classList.remove(obj.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
};

const toggleButtonState = (inputList, submitButtonElement, obj) => { // функция переключения кнопки submit в зависимости от валидности инпутов
    const inputElements = Array.from(inputList) // создаем массив для дальнейшей проверки
    const hasInvalidInput = inputElements.some((inputElement) => { // методом some проверяем, есть ли невалидные инпуты
        return !inputElement.validity.valid;
    });
    if (hasInvalidInput) {
        makeButtonIncative(inputList, submitButtonElement, obj); // если есть не валидные инпуты то блокируем кнопку инпута и передаем ей "неактивный" класс
    } else {
        makeButtonActive(inputList, submitButtonElement, obj); // если все инпуты валидны, то и кнопка активна
    }
};

const setInputListeners = (formElement, obj) => { // функция слушателей инпутов
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

const enableValidation = (obj) => { // функция запуска валидации
    const formList = Array.from(document.querySelectorAll(obj.formSelector)); // находим все формы в проекте и превращаем их в массив
    const formListIterator = (formElement => {
        const handleFormSubmit = (e => e.preventDefault());
        formElement.addEventListener('submit', handleFormSubmit);
        setInputListeners(formElement, obj);
    });
    formList.forEach(formListIterator);
};

enableValidation(validateObj);














/* const validateObj = { // все необходимые селекторы для работы функции ebableValidation
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const getErrorElement = (inputElement) => { // функция находит инпут с которым происходит взаимодействие(событие инпут)
    const input = inputElement.getAttribute('name');
    return document.getElementById(`${input}-error`);
};

const showInputError = (formElement, inputElement, errorMessage) => { // функция которая показывает сообщения об ошибках
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    inputElement.classList.add('popup__input_type_error');
    errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formElement, inputElement) => { // функция которая прячет сообщения об ошибках
    const errorElement = getErrorElement(inputElement);
    errorElement.textContent = '';
    errorElement.classList.remove('popup__error_visible');
    inputElement.classList.remove('popup__input_type_error');
};

const checkValidity = (formElement, inputElement) => { // функция проверки инпутов и добавления соответсвующих классов при невалидности
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const toggleButtonState = (inputList, submitButtonElement) => { // функция переключения кнопки submit в зависимости от валидности инпутов
    const inputElements = Array.from(inputList) // создаем массив для дальнейшей проверки
    const hasInvalidInput = inputElements.some((inputElement) => { // методом some проверяем, есть ли невалидные инпуты
        return !inputElement.validity.valid;
    });
    if (hasInvalidInput) { // если есть не валидные инпуты то блокируем кнопку инпута и передаем ей "неактивный" класс
        submitButtonElement.classList.add('popup__submit_disabled');
        submitButtonElement.setAttribute('disabled', true);
    } else {
        submitButtonElement.classList.remove('popup__submit_disabled'); // если все инпуты валидны, то и кнопка активна
        submitButtonElement.removeAttribute('disabled');
    }
};

const setInputListeners = (formElement) => { // функция слушателей инпутов
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); // находим все инпуты в проекте и превращаем их в массив
    const submitButtonElement = formElement.querySelector('.popup__submit'); // находим кнопку сабмита
    const inputListIterator = (inputElement => {
        const handleInput = () => {
            checkValidity(formElement, inputElement);
            toggleButtonState(inputList, submitButtonElement);
        };
        inputElement.addEventListener('input', handleInput)
    });
    toggleButtonState(inputList, submitButtonElement);
    inputList.forEach(inputListIterator);
};

const enableValidation = () => { // функция запуска валидации
    const formList = Array.from(document.querySelectorAll('.popup__form')); // находим все формы в проекте и превращаем их в массив
    const formListIterator = (formElement => {
        const handleFormSubmit = (e => e.preventDefault());
        formElement.addEventListener('submit', handleFormSubmit);
        setInputListeners(formElement);
    });
    formList.forEach(formListIterator);
};

enableValidation(); */