const editPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const closeEditPopup = document.querySelector('.popup__edit-close');
const formELement = document.querySelector('.popup__form');
const profileAuthor = document.querySelector('.profile__author');
const profileDescription = document.querySelector('.profile__description');
const author = formELement.querySelector('.popup__input_type_author');
const description = formELement.querySelector('.popup__input_type_description');
const popupOpened = 'popup_opened'; // задаем константу модификатора открытия popup.

function openProfilePopup() { // открываем popup
    author.value = profileAuthor.textContent; // передаем исходное значение в input.
    description.value = profileDescription.textContent; // передаем исходное значение в input.
    editPopup.classList.add(popupOpened);
}

function closeProfilePopup() { // закрываем popup без сохранения.
    editPopup.classList.remove(popupOpened);
}

function formSubmitHandler(evt) { // сохраняем Submit.
    evt.preventDefault();
    profileAuthor.textContent = author.value;
    profileDescription.textContent = description.value;

    closeProfilePopup(); // после сохранения Submit закрываем popup.
}

editPopupButton.addEventListener('click', openProfilePopup);
closeEditPopup.addEventListener('click', closeProfilePopup);
formELement.addEventListener('submit', formSubmitHandler);