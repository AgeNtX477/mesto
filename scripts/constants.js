const validateObj = ({ // параметры для работы функции enableValidation
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
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
const inputPlaceNameAddNewPlace = submitFormAddNewPlacePopup.querySelector('.popup__input_type_place-name'); // input форма SUBMIT для POPUP добавления нового места (наименование места)
const inputLinkAddNewPlace = submitFormAddNewPlacePopup.querySelector('.popup__input_type_img-src'); // input форма SUBMIT для POPUP добавления нового места (ссылка на картинку)
const popupZoomed = document.querySelector('.popup_img-zoomed'); // POPUP полноразмерной картинки
const popupZoomedCaption = popupZoomed.querySelector('.popup__caption'); // подпись при открытом POPUP ZOOMED
const popupZoomedImage = popupZoomed.querySelector('.popup__image'); // полноразмерная картинка POPUP ZOOMED
const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места
const buttonLike = document.querySelector('.element__like-button'); // кнопка лайка карточки
const buttonDelete = document.querySelector('.element__del-button'); // кнопка удаления карточки
const buttonGlobalClosePopup = document.querySelector('.popup__close-button'); // кнопка закрыть POPUP глобальная
const buttonCloseProfileEditPopup = popupProfileEdit.querySelector('.popup__close-button_place_edit'); // кнопка закрыть POPUP редактирования профиля
const buttonCloseAddNewPlacePopup = popupAddNewPlace.querySelector('.popup__close-button_place_add'); // кнопка закрыть POPUP добавления нового места
const buttonCloseZoomedImagePopup = document.querySelector('.popup__close-button_place_img-zoomed'); // кнопка закрыть POPUP полноразмерной картинки
const currentProfileName = document.querySelector('.profile__author'); // находим отображение на странице имя профиля
const currentProfileAbout = document.querySelector('.profile__description'); // находим отображение на странице описания имени профиля
const cardsContainer = document.querySelector('.element'); // родитель всех карточек в верстке
const templateElement = document.getElementById('elements-Box-Content').content; // находим весь тег template
const card = document.querySelector('.element__box'); // находим одну карточку в теге template
const submitButtonEdit = document.querySelector('.popup__submit_place_edit') // кнопка сабмит редактирования профиля
const submitButtonAdd = document.querySelector('.popup__submit_place_add'); // кнопка сабмит добавления нового места