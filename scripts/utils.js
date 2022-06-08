export const popupZoomed = document.querySelector('.popup_img-zoomed'); // POPUP полноразмерной картинки
export const popupZoomedCaption = popupZoomed.querySelector('.popup__caption'); // подпись при открытом POPUP ZOOMED
export const popupZoomedImage = popupZoomed.querySelector('.popup__image'); // полноразмерная картинка POPUP ZOOMED
export const buttonCloseZoomedImagePopup = document.querySelector('.popup__close-button_place_img-zoomed'); // кнопка закрыть POPUP полноразмерной картинки
export const ESC_BUTTON = 'Escape'; // кнопка ESC для закрытия попапов кнопкой ESC
export const overlayPlaceProfileEdit = document.querySelector('.popup__overlay_place_profile-edit'); // оверлей редактирования профиля
export const overlayPlaceAdd = document.querySelector('.popup__overlay_place_add'); // оверлей для добавления нового места
export const overlayPlaceImgZoomed = document.querySelector('.popup__overlay_place_img-zoomed'); // оверлей для 
export const popupGlobal = document.querySelector('.popup'); // Блок POPUP (ГЛОБАЛЬНЫЙ)
export const popupProfileEdit = document.querySelector('.popup_profile-edit'); // POPUP редактирования профиля
export const submitFormProfileEditPopup = document.querySelector('.popup__form_place_edit'); // форма SUBMIT для POPUP редактирования профиля
export const inputNameProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_author'); // input форма SUBMIT для POPUP редактирования профиля (имя)
export const inputAboutProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_description'); // input форма SUBMIT для POPUP редактирования профиля (о себе)
export const popupAddNewPlace = document.querySelector('.popup_img-add'); // POPUP добавления нового места
export const submitFormAddNewPlacePopup = document.querySelector('.popup__form_place_add'); // форма SUBMIT для POPUP добавления нового места 
export const inputPlaceNameAddNewPlace = document.querySelector('.popup__input_type_place-name'); // input форма SUBMIT для POPUP добавления нового места (наименование места)
export const inputLinkAddNewPlace = document.querySelector('.popup__input_type_img-src'); // input форма SUBMIT для POPUP добавления нового места (ссылка на картинку)  */
export const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
export const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места
export const buttonCloseProfileEditPopup = popupProfileEdit.querySelector('.popup__close-button_place_edit'); // кнопка закрыть POPUP редактирования профиля
export const buttonCloseAddNewPlacePopup = popupAddNewPlace.querySelector('.popup__close-button_place_add'); // кнопка закрыть POPUP добавления нового места
export const currentProfileName = document.querySelector('.profile__author'); // находим отображение на странице имя профиля
export const currentProfileAbout = document.querySelector('.profile__description'); // находим отображение на странице описания имени профиля
export const submitButtonPlaceAdd = document.querySelector('.popup__submit_place_add'); // находим кнопку сабмита добавления нового места

export const closePopupGlobalByEsc = e => { // функция закрытия все попапов нажатием кнопки ESC
    if (e.key == ESC_BUTTON) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopupGlobal(popupOpened);
    }
};

export const openPopupGlobal = (popupGlobal) => { // глобальная функция открытия всех POPUP
    popupGlobal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupGlobalByEsc); // добавляем слушатель на кнопку ESC когда попап открыт
};

export const closePopupGlobal = (popupGlobal) => { // глобальная функция закрытия всех POPUP
    popupGlobal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupGlobalByEsc); // снимаем слушатель на кнопку ESC когда попап закрываем
};