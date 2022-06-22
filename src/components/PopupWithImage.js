import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._image = this._popup.querySelector('.popup__image');
        this._caption = this._popup.querySelector('.popup__caption');
    }

    open(cardName, cardLink, cardAlt) { // перезапишем родительский класс открытия попапа для просмотра картинок
        super.open();
        this._caption.textContent = cardName;
        this._image.src = cardLink;
        this._image.alt = cardAlt;
    }
}