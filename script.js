let editPopupButton = document.querySelector('.profile__edit-button');
let editPopup = document.querySelector('.popup_opened');
let closeEditPopup = document.querySelector('.popup__edit-close');
let formELement = document.querySelector('.popup__input'); // объявляем форму popup
let author = formELement.querySelector('.popup__input_author');
let description = formELement.querySelector('.popup__input_description');


function OpenEditProfileButton() { // открываем popup
    author.value = "Энакин Скайуокер"; // передаем исходное значение в input
    description.value = "Лучший пилот галактики"; // передаем исходное значение в input
    editPopup.setAttribute('style', 'display: flex');
}

function closeEditProfileButton() { // закрываем popup без сохранения
    editPopup.setAttribute('style', 'display: none');
}

function formSubmitHandler(evt) { // сохраняем Submit
    evt.preventDefault();

    author = formELement.querySelector('.popup__input_author').value;
    description = formELement.querySelector('.popup__input_description').value;

    document.querySelector('.profile__author').textContent = author;
    document.querySelector('.profile__description').textContent = description;

    closeEditProfileButton(); // после сохранения Submit закрываем popup
}


editPopupButton.addEventListener('click', OpenEditProfileButton);
closeEditPopup.addEventListener('click', closeEditProfileButton);
formELement.addEventListener('submit', formSubmitHandler);