import { openPopupGlobal, closePopupGlobal, popupZoomed, popupZoomedCaption, popupZoomedImage, buttonCloseZoomedImagePopup } from './utils.js';

export class Card { // создаем класс Card
    constructor(cardName, cardlink, cardSelector) { // определяем параметры класса Card
        this._cardName = cardName;
        this._cardLink = cardlink;
        this._cardSelector = cardSelector;
    }

    _handleView() { // метод просмотра полноценного размера картинки
        openPopupGlobal(popupZoomed); // используем глобальную функцию открытия попара, аргументом указываем попап просмотра карточки
        popupZoomedImage.src = this._cardLink;
        popupZoomedImage.alt = this._cardName;
        popupZoomedCaption.textContent = this._cardName;
    }

    _handleViewClose() { // метод закрытия полноценного размера картинки
        closePopupGlobal(popupZoomed); // используем глобальную функцию закрытия попапа, аргументом указываем попап просмотра карточки
    }

    _handleLike() { // метод поставить лайк
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_type_active');
    }

    _handleDelete() { // метод удалить карточку 
        this._element.closest('.element__box');
        this._element.remove();
    }

    _getTemplate() { // указываем откуда брать template в разметке
        const cardElement = document.getElementById('elements-Box-Content').content.querySelector('.element__box').cloneNode(true);
        return cardElement;
    }

    generateCard() { // генеририруем карточку
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._cardLink;
        this._element.querySelector('.element__image').alt = this._cardName;
        this._element.querySelector('.element__title').textContent = this._cardName;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() { // метод слушателей карточки
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleView();
        });
        this._element.querySelector('.element__del-button').addEventListener('click', () => {
            this._handleDelete();
        });
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLike();
        });
        buttonCloseZoomedImagePopup.addEventListener('click', () => {
            this._handleViewClose();
        });
    }
};