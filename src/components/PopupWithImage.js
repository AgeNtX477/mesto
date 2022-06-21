import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(cardName, cardLink) { // перезапишем родительский класс открытия попапа для просмотра картинок
        super.open();
        const image = this._popup.querySelector('.popup__image');
        const caption = this._popup.querySelector('.popup__caption');
        image.src = cardLink;
        caption.textContent = cardName;
    }
}