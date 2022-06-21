export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this); // устраняем потерю контекста
        this._closeButton = this._popup.querySelector('.popup__close-button'); // ищем кнопку закрытия
        this._overlay = this._popup.querySelector('.popup__overlay'); // ищем оверлэй для закрытия клика вне попапа
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose); // добавляем слушатель на кнопку ESC когда попап открыт
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose); // снимаем слушатель на кнопку ESC когда попап закрываем
    }

    _handleEscClose(e) {
        if (e.key == 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => this.close()); // слушаем закрытие по кнопке
        this._overlay.addEventListener('click', () => this.close()); // слушаем закрытие по оверлею
    }
}