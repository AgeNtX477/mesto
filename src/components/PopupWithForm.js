import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        this._submitButton = this._form.querySelector('.popup__submit');
        this._submitButtonIsntLoading = this._submitButton.textContent;
    }

    _getInputValues() { // получаем значения инпутов
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value;
        })
        return values;
    }

    /* changeSubmitHandler(newSubmitHandler) {
        this._handleSubmit = newSubmitHandler;
    } */

    setEventListeners() { // слушаем сабмиты форм
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    }

    close() { // перезапишем метод закрытия, будем сбрасывать форму при закрытия модалок
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) { // показываем пользователю что происходит загрузка
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonIsntLoading
        }
    }
}