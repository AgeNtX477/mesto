import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import * as data from './utils.js';

const initialCards = [{ // объект наполнения карточек для template элемента
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

function createCard(cardName, cardLink) { // добавление карточки в верску через создание экземпляра карточки
    const listItem = new Card(cardName, cardLink, '.template__card', () => {
        imagePopup.open(cardName, cardLink);
    });
    const newCard = listItem.generateCard();
    return newCard;
}

const validateObj = ({ // параметры для работы функции enableValidation
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

const validateProfileEdit = new FormValidator(validateObj, data.submitFormProfileEditPopup); // создаем дубликат FormValidator редактирования профиля
const validateCardAdd = new FormValidator(validateObj, data.submitFormAddNewPlacePopup); // создаем дубликат FormValidator добавления новой карточки

validateProfileEdit.enableValidation(); // запускаем валидацию для формы редактирования профиля
validateCardAdd.enableValidation(); // запускаем валидацию для добавления новой карточки

const handleSubmitProfileEdit = (e) => { // функция SUMBIT для POPUP редактирования профиля
    e.preventDefault();
    userInfo.setUserInfo(data.inputNameProfileEdit.value, data.inputAboutProfileEdit.value); // значения из интпутов сохраняем при помощи метода setUserInfo класса UserInfo
    profilePopup.close();
};

const handleSumbitPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    e.preventDefault();
    const cardName = data.inputPlaceNameAddNewPlace.value;
    const cardLink = data.inputLinkAddNewPlace.value;
    const card = createCard(cardName, cardLink) // 
    section.addItem(card); // добавляем карточку методом addItem класса Section
    cardAddPopup.close();
    validateCardAdd.deactivateValidation(); // выключаем кнопку после сабмита
};

data.buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    profilePopup.open();
    const { name, about } = userInfo.getUserInfo(); // используем класс UserInfo что бы передавать текучие значения тайтлов в инпуты
    data.inputNameProfileEdit.value = name;
    data.inputAboutProfileEdit.value = about;
    validateProfileEdit.deactivateValidation(); // чистим ошибки валидации
});

data.buttonAddNewPlace.addEventListener('click', () => { // слушатель кнопки открытия POPUP добавления нового места 
    cardAddPopup.open()
    validateCardAdd.deactivateValidation();
});

const section = new Section({ // создаем экземпляр класса Section для отрисовки всех карточек на странице и добавления новой
    items: initialCards,
    renderer: (item) => {
        const cardItem = createCard(item.cardName, item.cardLink, '.element')
        section.addItem(cardItem);
    }
}, '.element');

const imagePopup = new PopupWithImage('.popup_img-zoomed');
const profilePopup = new PopupWithForm('.popup_profile-edit', handleSubmitProfileEdit);
const cardAddPopup = new PopupWithForm('.popup_img-add', handleSumbitPlaceAdd);
imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardAddPopup.setEventListeners();

section.renderItems();

const userInfo = new UserInfo({ profileNameSelector: '.profile__author', profileAbouttSelector: '.profile__description' });