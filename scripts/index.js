const ESC_BUTTON = 'Escape'; // кнопка ESC для закрытия попапов кнопкой ESC
const overlayPlaceProfileEdit = document.querySelector('.popup__overlay_place_profile-edit'); // оверлей редактирования профиля
const overlayPlaceAdd = document.querySelector('.popup__overlay_place_add'); // оверлей для добавления нового места
const overlayPlaceImgZoomed = document.querySelector('.popup__overlay_place_img-zoomed'); // оверлей для 
const popupGlobal = document.querySelector('.popup'); // Блок POPUP (ГЛОБАЛЬНЫЙ)
const popupProfileEdit = document.querySelector('.popup_profile-edit'); // POPUP редактирования профиля
const submitFormProfileEditPopup = document.querySelector('.popup__form_place_edit'); // форма SUBMIT для POPUP редактирования профиля
const inputNameProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_author'); // input форма SUBMIT для POPUP редактирования профиля (имя)
const inputAboutProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_description'); // input форма SUBMIT для POPUP редактирования профиля (о себе)
const popupAddNewPlace = document.querySelector('.popup_img-add'); // POPUP добавления нового места
const submitFormAddNewPlacePopup = document.querySelector('.popup__form_place_add'); // форма SUBMIT для POPUP добавления нового места 
const inputPlaceNameAddNewPlace = document.querySelector('.popup__input_type_place-name'); // input форма SUBMIT для POPUP добавления нового места (наименование места)
const inputLinkAddNewPlace = document.querySelector('.popup__input_type_img-src'); // input форма SUBMIT для POPUP добавления нового места (ссылка на картинку)  */
const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места
const buttonGlobalClosePopup = document.querySelector('.popup__close-button'); // кнопка закрыть POPUP глобальная
const buttonCloseProfileEditPopup = popupProfileEdit.querySelector('.popup__close-button_place_edit'); // кнопка закрыть POPUP редактирования профиля
const buttonCloseAddNewPlacePopup = popupAddNewPlace.querySelector('.popup__close-button_place_add'); // кнопка закрыть POPUP добавления нового места
const currentProfileName = document.querySelector('.profile__author'); // находим отображение на странице имя профиля
const currentProfileAbout = document.querySelector('.profile__description'); // находим отображение на странице описания имени профиля
const templateElement = document.getElementById('elements-Box-Content').content; // находим весь тег template
const card = document.querySelector('.element__box'); // находим одну карточку в теге template
const submitButtonEdit = document.querySelector('.popup__submit_place_edit') // кнопка сабмит редактирования профиля
const submitButtonAdd = document.querySelector('.popup__submit_place_add'); // кнопка сабмит добавления нового места
const errorElement = document.querySelectorAll('.popup__error'); // находим спаны с ошибкой.
const inputElement = document.querySelectorAll('.popup__input_type_error'); // находим все инпуты с ошибкой.

const closePopupGlobalByEsc = e => { // функция закрытия все попапов нажатием кнопки ESC
    if (e.key == ESC_BUTTON) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopupGlobal(popupOpened);
    }
};

const openPopupGlobal = (popupGlobal) => { // глобальная функция открытия всех POPUP
    popupGlobal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupGlobalByEsc); // добавляем слушатель на кнопку ESC когда попап открыт
};

const closePopupGlobal = (popupGlobal) => { // глобальная функция закрытия всех POPUP
    popupGlobal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupGlobalByEsc); // снимаем слушатель на кнопку ESC когда попап закрываем
};

const sendCurrentValue = () => { // функция передачи текущего значения данных профиля в инпут POPUP редактирования профиля
    inputNameProfileEdit.value = currentProfileName.textContent;
    inputAboutProfileEdit.value = currentProfileAbout.textContent;
};

const handleSubmitformPlaceEdit = e => { // функция SUMBIT для POPUP редактирования профиля
    e.preventDefault();
    currentProfileName.textContent = inputNameProfileEdit.value;
    currentProfileAbout.textContent = inputAboutProfileEdit.value;
    closePopupGlobal(popupProfileEdit);
};

function createCard(cardName, cardLink) {
    const listItem = new Card(cardName, cardLink, '#elements-Box-Content');
    const newCard = listItem.generateCard();
    return newCard;
}

const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    const cardName = inputPlaceNameAddNewPlace.value;
    const cardLink = inputLinkAddNewPlace.value;
    e.preventDefault();
    cardsContainer.prepend(createCard(cardName, cardLink));
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT */
    closePopupGlobal(popupAddNewPlace);
};

buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    openPopupGlobal(popupProfileEdit);
    sendCurrentValue(); // передаем текущее значение данных профиля в инпут POPUP редактирования профиля
    makeButtonInaсtive(null, submitButtonEdit, validateObj);
});

buttonCloseProfileEditPopup.addEventListener('click', () => closePopupGlobal(popupProfileEdit)); // слушатель кнопки закрытия POPUP редактирования профиля

buttonAddNewPlace.addEventListener('click', () => { // слушатель кнопки открытия POPUP добавления нового места
    openPopupGlobal(popupAddNewPlace);
    makeButtonInaсtive(null, submitButtonAdd, validateObj);
});

buttonCloseAddNewPlacePopup.addEventListener('click', () => closePopupGlobal(popupAddNewPlace)); // слушатель кнопки закрытия POPUP добавления нового места
/* buttonCloseZoomedImagePopup.addEventListener('click', () => closePopupGlobal(popupZoomed)); // слушатель закрытия POPUP полноразмерной картинки */

submitFormProfileEditPopup.addEventListener('submit', handleSubmitformPlaceEdit); // слушаем SUBMIT для POPUP редактирования профиля
submitFormAddNewPlacePopup.addEventListener('submit', handleSumbitFormPlaceAdd); // слушаем SUBMIT для POPUP добавления нового места  */

overlayPlaceProfileEdit.addEventListener('click', () => closePopupGlobal(popupProfileEdit)); // слушаем закрытие попапа профиля кликом на overlay
overlayPlaceAdd.addEventListener('click', () => closePopupGlobal(popupAddNewPlace)); // слушаем закрытие попапа добавления нового места кликом на overlay
overlayPlaceImgZoomed.addEventListener('click', () => closePopupGlobal(popupZoomed)); // слушаем закрытие попапа с картинкой кликом на overlay



/* const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    e.preventDefault();
   createCard({
        name: inputPlaceNameAddNewPlace.value,
        link: inputLinkAddNewPlace.value
    }, cardsContainer); 
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    closePopupGlobal(popupAddNewPlace);
}; 

function createCard(name, link) {
    const listItem = new Card(name, link, '.template__card');
    const newCard = listItem.generateCard();
    return newCard;
}*/



/* const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    const name = inputPlaceNameAddNewPlace.value;
    const link = inputLinkAddNewPlace.value;
    e.preventDefault();

    const temp = new Card(name, link, '.template__card')
    cardsContainer.prepend(temp.element);

    closePopupGlobal(popupAddNewPlace);
}; */

/* const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    e.preventDefault();
    cardsContainer.prepend(createCard(cardName, cardlink));
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    closePopupGlobal(popupAddNewPlace);
};
 */


/* const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    const cardName = inputPlaceNameAddNewPlace.value;
    const cardLink = inputLinkAddNewPlace.value;
    e.preventDefault();
    cardsContainer.prepend(createCard(cardName, cardLink));
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT 
    closePopupGlobal(popupAddNewPlace);
}; */