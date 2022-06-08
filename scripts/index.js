import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';
import * as data from './utils.js';

const items = [{ // объект наполнения карточек для template элемента
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

items.forEach((item) => { // функция-итератор карточек
    cardsContainer.append(createCard(item.cardName, item.cardLink)); // что-бы не дублировать код используем функцию createCard
});

const sendCurrentValue = () => { // функция передачи текущего значения данных профиля в инпут POPUP редактирования профиля
    data.inputNameProfileEdit.value = data.currentProfileName.textContent;
    data.inputAboutProfileEdit.value = data.currentProfileAbout.textContent;
};

function createCard(cardName, cardLink) { // добавление карточки в верску через создание экземпляра карточки
    const listItem = new Card(cardName, cardLink, ".template__card");
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
const validateCardAdd = new FormValidator(validateObj, data.popupAddNewPlace); // создаем дубликат FormValidator добавления новой карточки

validateProfileEdit.enableValidation(); // запускаем валидацию для формы редактирования профиля
validateCardAdd.enableValidation(); // запускаем валидацию для добавления новой карточки

const handleSubmitformPlaceEdit = e => { // функция SUMBIT для POPUP редактирования профиля
    e.preventDefault();
    data.currentProfileName.textContent = data.inputNameProfileEdit.value;
    data.currentProfileAbout.textContent = data.inputAboutProfileEdit.value;
    data.closePopupGlobal(data.popupProfileEdit);
    validateProfileEdit.deactivateValidation(); // выключаем кнопку после сабмита
};

const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    const cardName = data.inputPlaceNameAddNewPlace.value;
    const cardLink = data.inputLinkAddNewPlace.value;
    e.preventDefault();
    cardsContainer.prepend(createCard(cardName, cardLink, ".template__card"));
    data.inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    data.inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT */
    data.closePopupGlobal(data.popupAddNewPlace);
    validateCardAdd.deactivateValidation(); // выключаем кнопку после сабмита
};

data.buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    data.openPopupGlobal(data.popupProfileEdit);
    sendCurrentValue(); // передаем текущее значение данных профиля в инпут POPUP редактирования профиля
});

data.buttonCloseProfileEditPopup.addEventListener('click', () => { // слушатель кнопки закрытия POPUP редактирования профиля
    data.closePopupGlobal(data.popupProfileEdit)
    validateProfileEdit.deactivateValidation(); // чистим ошибки валидации
});

data.buttonAddNewPlace.addEventListener('click', () => data.openPopupGlobal(data.popupAddNewPlace)); // слушатель кнопки открытия POPUP добавления нового места
data.buttonCloseAddNewPlacePopup.addEventListener('click', () => data.closePopupGlobal(data.popupAddNewPlace)); // слушатель кнопки закрытия POPUP добавления нового места
data.buttonCloseZoomedImagePopup.addEventListener('click', () => data.closePopupGlobal(data.popupZoomed)); // слушатель кнопки закрытия POPUP полноценного просмотра карточки

data.submitFormProfileEditPopup.addEventListener('submit', handleSubmitformPlaceEdit); // слушаем SUBMIT для POPUP редактирования профиля
data.submitFormAddNewPlacePopup.addEventListener('submit', handleSumbitFormPlaceAdd); // слушаем SUBMIT для POPUP добавления нового места

data.overlayPlaceProfileEdit.addEventListener('click', () => data.closePopupGlobal(data.popupProfileEdit)); // слушаем закрытие попапа профиля кликом на overlay
data.overlayPlaceAdd.addEventListener('click', () => data.closePopupGlobal(data.popupAddNewPlace)); // слушаем закрытие попапа добавления нового места кликом на overlay
data.overlayPlaceImgZoomed.addEventListener('click', () => data.closePopupGlobal(data.popupZoomed)); // слушаем закрытие попапа с картинкой кликом на overlay