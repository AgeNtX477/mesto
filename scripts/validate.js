const validateObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup___error', // нужно по чек листу, но не используется по коду.
    errorClass: 'popup__error_visible'
};

const showInputError = (formSelector, inputSelector, errorClass) => { // функция показывающая текст валидатора, если validity false.
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    errorElement.textContent = errorClass;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formSelector, inputSelector, errorClass) => { // функция скрывающая текст валидатора, если validity true.
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formSelector, inputSelector) => { // функция которая в зависимости от значения свойства validity применяет одну из функций (showInputError) (hideInputError).
    if (!input.validity.valid) {
        showInputError(formSelector, inputSelector.validationMessage)
    } else {
        hideInputError(formSelector, inputSelector)
    }
};

const setEventListeners = (formSelector) => { // обработчик всех инпутов в проекте. После каждого инпута проверяет валидность каждого инпута во всех формах.
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

const enableValidation = () => { // функция запуска процесса наложения валидаций.
    const formList = document.querySelectorAll(formSelector)
    formList.forEach(form => {
        form.addEventListener('submit', e => e.preventDefault())
    })
    const fieldsetList = document.querySelectorAll('.form__form-set');
    fieldsetList.forEach((fieldSet) => { // функция валидации каждых отдельных филд-сетов.
        setEventListeners(fieldSet);
    })
};

const hasInvalidInput = (inputList) => { // функция обхода массива инпутов, возвращает true если в массиве есть хоть 1 не валидный инпут.
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement) => { // функция делает кнопку submit не активной, если хотя бы одно поле не прошло валидацию.
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
    }
};

enableValidation(validateObj);