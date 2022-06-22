export class Card { // создаем класс Card
    constructor(cardName, cardlink, cardSelector, handleImageClick) { // определяем параметры класса Card
        this._cardName = cardName;
        this._cardLink = cardlink;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    _handleLike() { // метод поставить лайк
        this._likeButton.classList.toggle('element__like-button_type_active');
    }

    _handleDelete() { // метод удалить карточку 
        this._element.remove();
    }

    _getTemplate() { // указываем откуда брать template в разметке
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element__box').cloneNode(true);
        return cardElement;
    }

    _setEventListeners() { // метод слушателей карточки
        this._cardImage.addEventListener('click', () => {
            this._handleImageClick();
        });
        this._cardDeleteButton.addEventListener('click', () => {
            this._handleDelete();
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLike();
        });
    }

    generateCard() { // генеририруем карточку
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-button');
        this._cardImage = this._element.querySelector('.element__image');
        this._cardTitle = this._element.querySelector('.element__title');
        this._cardDeleteButton = this._element.querySelector('.element__del-button');
        this._cardImage.src = this._cardLink;
        this._cardImage.alt = this._cardName;
        this._cardTitle.textContent = this._cardName;
        this._setEventListeners();
        return this._element;
    }
}