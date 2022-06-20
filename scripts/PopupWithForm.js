import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() { // получаем значения инпутов
        const inputs = [...this._form.querySelectorAll('.popup__input')]
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
        })
        return values;
    }

    setEventListeners() { // слушаем сабмиты форм
        super.setEventListeners();
        this._form.addEventListener('submit', this._handleSubmit);
    }

    close() { // немно8го перезапишем метод закрытия, будем сбрасывать форму при закрытия модалок
        super.close();
        this._form.reset();
    }
}