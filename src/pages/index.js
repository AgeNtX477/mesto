import './index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {
    submitFormProfileEditPopup,
    inputNameProfileEdit,
    inputAboutProfileEdit,
    submitFormAddNewPlacePopup,
    buttonProfileEdit,
    buttonAddNewPlace,
    initialCards,
    validateObj
} from '../utils/constants.js';

function createCard(cardName, cardLink) { // добавление карточки в верску через создание экземпляра карточки
    const listItem = new Card(cardName, cardLink, '.template__card', () => {
        imagePopup.open(cardName, cardLink);
    });
    const newCard = listItem.generateCard();
    return newCard;
}

// создание экземпляров классов

const validateProfileEdit = new FormValidator(validateObj, submitFormProfileEditPopup); // создаем дубликат FormValidator редактирования профиля
const validateCardAdd = new FormValidator(validateObj, submitFormAddNewPlacePopup); // создаем дубликат FormValidator добавления новой карточки

validateProfileEdit.enableValidation(); // запускаем валидацию для формы редактирования профиля
validateCardAdd.enableValidation(); // запускаем валидацию для добавления новой карточки

const section = new Section({ // создаем экземпляр класса Section для отрисовки всех карточек на странице и добавления новой
    items: initialCards,
    renderer: (item) => {
        const cardItem = createCard(item.cardName, item.cardLink, '.element')
        section.addItem(cardItem);
    }
}, '.element');

const imagePopup = new PopupWithImage('.popup_img-zoomed');

const profilePopup = new PopupWithForm('.popup_profile-edit', {
    handleSubmit: (data) => {
        const { name, about } = data;
        userInfo.setUserInfo(name, about); // значения из интпутов сохраняем при помощи метода setUserInfo класса UserInfo
        profilePopup.close();
    }
});

const cardAddPopup = new PopupWithForm('.popup_img-add', {
    handleSubmit: (data) => {
        const cardName = data['place'];
        const cardLink = data['url'];
        const card = createCard(cardName, cardLink); // 
        section.addItem(card); // добавляем карточку методом addItem класса Section
        cardAddPopup.close();
    }
});

imagePopup.setEventListeners();

profilePopup.setEventListeners();

cardAddPopup.setEventListeners();

section.renderItems();

const userInfo = new UserInfo({ profileNameSelector: '.profile__author', profileAbouttSelector: '.profile__description' });

// cлушатели кнопок открытия попапов с формами

buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    profilePopup.open();
    const { name, about } = userInfo.getUserInfo(); // используем класс UserInfo что бы передавать текучие значения тайтлов в инпуты
    validateProfileEdit.deactivateValidation(); // чистим ошибки валидации и выключаем кнопку
    inputNameProfileEdit.value = name;
    inputAboutProfileEdit.value = about;
});

buttonAddNewPlace.addEventListener('click', () => { // слушатель кнопки открытия POPUP добавления нового места 
    cardAddPopup.open();
    validateCardAdd.deactivateValidation(); // чистим ошибки валидации и выключаем кнопку
});