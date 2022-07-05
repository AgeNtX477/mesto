export class Card { // создаем класс Card
    constructor(cardName, cardlink, cardLikes, cardId, userId, ownerId, cardSelector, handleImageClick, handleDeleteClick, handleLikeClick) { // определяем параметры класса Card
        this._cardName = cardName;
        this._cardLink = cardlink;
        this._cardLikes = cardLikes;
        this._cardId = cardId;
        this._userId = userId;
        this._ownerId = ownerId;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
    }

    _handlePutLike() { // метод поставить лайк
        this._likeButton.classList.add('element__like-button_type_active');
    }

    _handleDeleteLike() { // метода удалить лайк
        this._likeButton.classList.remove('element__like-button_type_active');
    }

    isLiked() {
        const userHasLikedCard = this._cardLikes.find(user => user._id === this._userId);
        return userHasLikedCard;
    }

    handleDelete() { // метод удалить карточку 
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
            this._handleDeleteClick(this._cardId);
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick(this._cardId);
        });
    }

    setLikes(newLikes) { // показываем кол-во лайков всех пользователей и проверяем стоит ли лайк от user
        this._cardLikes = newLikes;
        const likeCounterElement = this._element.querySelector('.element__like-counter');
        likeCounterElement.textContent = this._cardLikes.length;

        if (this.isLiked()) {
            this._handlePutLike();
        } else {
            this._handleDeleteLike();
        }
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
        this.setLikes(this._cardLikes);
        if (this._userId !== this._ownerId) { // в карточке скрываем "мусорку" если карточка была создана не нами.
            this._cardDeleteButton.style.display = 'none'
        }
        return this._element;
    }
}