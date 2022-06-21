import './pages/index.css';
import { Card } from './components/card.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';

const submitFormProfileEditPopup = document.querySelector('.popup__form_place_edit'); // форма SUBMIT для POPUP редактирования профиля
const inputNameProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_author'); // input форма SUBMIT для POPUP редактирования профиля (имя)
const inputAboutProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_description'); // input форма SUBMIT для POPUP редактирования профиля (о себе)
const submitFormAddNewPlacePopup = document.querySelector('.popup__form_place_add'); // форма SUBMIT для POPUP добавления нового места 
const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места

const alderaanImage = new URL('./images/alderaan-hope.jpg',
    import.meta.url);
const jakkuImage = new URL('./images/jakku.jpg',
    import.meta.url);
const nabunImage = new URL('./images/nabu.jpg',
    import.meta.url);
const korusantImage = new URL('./images/korusant.jpg',
    import.meta.url);
const skarifImage = new URL('./images/skarif.jpg',
    import.meta.url);

const initialCards = [{ // объект наполнения карточек для template элемента
        cardName: 'Альдеран',
        cardLink: alderaanImage
    },
    {
        cardName: 'Джакку',
        cardLink: jakkuImage
    },
    {
        cardName: 'Набу',
        cardLink: nabunImage
    },
    {
        cardName: 'Корусант',
        cardLink: korusantImage
    },
    {
        cardName: 'Скариф',
        cardLink: skarifImage
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
        validateCardAdd.deactivateValidation();
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