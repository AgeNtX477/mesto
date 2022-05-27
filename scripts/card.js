const items = [{ // базовый массив 
        cardName: 'Альдеран',
        cardLink: './images/alderaan-hope.jpg'
    },
    {
        cardName: 'Джакку',
        cardLink: './images/jakku.jpg'
    },
    {
        cardName: 'Набу',
        cardLink: './images/nabu.jpg'
    },
    {
        cardName: 'Корусант',
        cardLink: './images/korusant.jpg'
    },
    {
        cardName: 'Скариф',
        cardLink: './images/skarif.jpg'
    },
    {
        cardName: 'Звезда смерти',
        cardLink: 'https://avatars.mds.yandex.net/get-zen_doc/3445317/pub_60000a8496f6d30d4cf5774a_600013c23112ec025ead4191/scale_2400'
    }
];

const cardsContainer = document.querySelector('.element'); // родитель всех карточек в верстке
const elementImage = document.querySelector('.element__image'); // картинка при закрытом попапе
const popupZoomed = document.querySelector('.popup_img-zoomed'); // POPUP полноразмерной картинки
const popupZoomedCaption = popupZoomed.querySelector('.popup__caption'); // подпись при открытом POPUP ZOOMED
const popupZoomedImage = popupZoomed.querySelector('.popup__image'); // полноразмерная картинка POPUP ZOOMED
const buttonCloseZoomedImagePopup = document.querySelector('.popup__close-button_place_img-zoomed'); // кнопка закрыть POPUP полноразмерной картинки

class Card {
    constructor(data, cardSelector) {
        this._cardName = data.cardName;
        this._cardLink = data.cardLink;
        this._cardSelector = cardSelector;
    }

    _handleView() {
        popupZoomed.classList.add('popup_opened');
        popupZoomedImage.src = this._cardLink;
        popupZoomedImage.alt = this._cardName;
        popupZoomedCaption.textContent = this._cardName;
    }

    _handleViewClose() {
        popupZoomed.classList.remove('popup_opened');
    }

    _handleLike() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_type_active');
    }

    _handleDelete() {
        this._element.closest('.element__box');
        this._element.remove();
    }

    _getTemplate() {
        const cardElement = document.getElementById('elements-Box-Content').content.querySelector('.element__box').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._cardLink;
        this._element.querySelector('.element__image').alt = this._cardName;
        this._element.querySelector('.element__title').textContent = this._cardName;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
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

}

items.forEach((item) => {
    const card = new Card(item, '.template__card');
    const cardELement = card.generateCard();
    cardsContainer.append(cardELement);
});



/* class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _handleView() {
        popupZoomed.classList.add('popup_opened');
        popupZoomedImage.src = this._link;
        popupZoomedImage.alt = this._name;
        popupZoomedCaption.textContent = this._name;
    }

    _handleViewClose() {
        popupZoomed.classList.remove('popup_opened');
    }

    _handleLike() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_type_active');
    }

    _handleDelete() {
        this._element.closest('.element__box');
        this._element.remove();
    }

    _getTemplate() {
        const cardElement = document.getElementById('elements-Box-Content').content.querySelector('.element__box').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
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

}

items.forEach((item) => {
    const card = new Card(item, '.template__card');
    const cardELement = card.generateCard();
    cardsContainer.append(cardELement);
});

 */