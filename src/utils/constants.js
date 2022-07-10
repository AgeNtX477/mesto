export const submitFormProfileEditPopup = document.querySelector('.popup__form_place_edit'); // форма SUBMIT для POPUP редактирования профиля
export const inputNameProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_author'); // input форма SUBMIT для POPUP редактирования профиля (имя)
export const inputAboutProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_description'); // input форма SUBMIT для POPUP редактирования профиля (о себе)
export const submitFormAddNewPlacePopup = document.querySelector('.popup__form_place_add'); // форма SUBMIT для POPUP добавления нового места 
export const submitFormUserAvatarPopup = document.querySelector('.popup__form_place_avatar'); // форма SUBMIT для POPUP аватара пользователя
export const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
export const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места
export const buttonProfileAvatar = document.querySelector('.profile__avatar-button'); // кнопка смены аватара пользователя
export const initialCards = [];
export const validateObj = ({ // параметры для работы функции enableValidation
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});