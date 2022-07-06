import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
    }

    changeSubmitHandler(newSubmitHandler) {
        this._handleSubmit = newSubmitHandler;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })
    }

    close() {
        super.close();
        this._form.reset();
    }
}