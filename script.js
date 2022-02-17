const editPopupButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup'); // RABOTAYU TYT
const closeEditPopup = document.querySelector('.popup__edit-close');
const formELement = document.querySelector('.popup__form'); // объявляем форму popup
let author = formELement.querySelector('.popup__input_type_author');
let description = formELement.querySelector('.popup__input_type_description');


function openProfilePopup() { // открываем popup
    author.value = document.querySelector('.profile__author').textContent; // передаем исходное значение в input
    description.value = document.querySelector('.profile__description').textContent; // передаем исходное значение в input
    editPopup.classList.add('popup_opened');
}

function closeProfilePopup() { // закрываем popup без сохранения
    editPopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) { // сохраняем Submit
    evt.preventDefault();

    author = formELement.querySelector('.popup__input_type_author').value;
    description = formELement.querySelector('.popup__input_type_description').value;
    document.querySelector('.profile__author').textContent = author;
    document.querySelector('.profile__description').textContent = description;

    closeProfilePopup(); // после сохранения Submit закрываем popup
}


editPopupButton.addEventListener('click', openProfilePopup);
closeEditPopup.addEventListener('click', closeProfilePopup);
formELement.addEventListener('submit', formSubmitHandler);