const items = [{
        name: 'Альдеран',
        link: './images/alderaan-hope.jpg'
    },
    {
        name: 'Джакку',
        link: './images/jakku.jpg'
    },
    {
        name: 'Набу',
        link: './images/nabu.jpg'
    },
    {
        name: 'Корусант',
        link: './images/korusant.jpg'
    },
    {
        name: 'Скариф',
        link: './images/skarif.jpg'
    },
    {
        name: 'Мустафар',
        link: './images/mustafar.png'
    }
];
const templateElement = document.getElementById('elements-Box-Content').content;
const elementList = document.querySelector('.element'); // секция элемент
const deleteButton = document.querySelector('.element__del-button'); // кнопка удаления element__box
const popupCloseButton = document.querySelector('.popup__close-button');
const editPopup = document.querySelector('.popup_profile-edit'); // сам edit popup
const closeEditPopup = editPopup.querySelector('.popup__close-button_place_edit'); // кнопка закрыть edit popup
const editPopupButton = document.querySelector('.profile__edit-button'); // кнопка открыть edit popup
const formELementPlaceEdit = document.querySelector('.popup__form_place_edit'); // форма отправки submit popup для edit.
const profileAuthor = document.querySelector('.profile__author'); // значение автора на сайте при закрытом popup.
const profileDescription = document.querySelector('.profile__description'); // значение описания на сайте при закрытом popup.
const author = formELementPlaceEdit.querySelector('.popup__input_type_author'); // инпут попапа кнопка edit, автор.
const description = formELementPlaceEdit.querySelector('.popup__input_type_description'); // инпут попапа кнопка edit, описание.
const popupOpened = 'popup_opened'; // задаем константу модификатора открытия popup. КОНЕЦ 4-ИЙ СПРИНТ.
const addPopup = document.querySelector('.popup_img-add'); // сам add popup.
const closeAddPopupButton = addPopup.querySelector('.popup__close-button_place_add'); // кнопка закрыть add popup.
const addPopupButton = document.querySelector('.profile__add-button'); // кнопка открыть add popup.
const formELementPlaceAdd = document.querySelector('.popup__form_place_edit'); // форма отправки submit popup для add.

function setEventListeners(itemElement) { //функция слушателя событый.
    itemElement.querySelector('.element__del-button').addEventListener('click', handleDelete); // удаление элемента.
    itemElement.querySelector('.element__like-button').addEventListener('click', handleLike); // кнопка лайк.
    // itemElement.querySelector('.element__image').addEventListener('click', handleView); // полноразмерный просмотр фото.
}

function renderItem(title, image) { // функция рендеринга карточек по умолчанию.
    const itemElement = templateElement.querySelector('.element__box').cloneNode(true);
    const elementTitle = itemElement.querySelector('.element__title');
    const elementImage = itemElement.querySelector('.element__image');
    elementTitle.textContent = title;
    elementImage.src = image;
    setEventListeners(itemElement);
    return itemElement;
};

items.forEach(function(item) { // распределение массива.
    const itemElement = renderItem(item.name, item.link);
    elementList.appendChild(itemElement);
});

function handleDelete(event) { // функция удаления карточки.
    const itemElement = event.target.closest('.element__box');
    itemElement.remove();
}

function handleLike(event) { // функция поставить лайк.
    event.target.classList.toggle('element__like-button_type_active');
}

// function handleView(event)

function openProfilePopup() { // открываем popup edit.
    author.value = profileAuthor.textContent; // передаем исходное значение в input.
    description.value = profileDescription.textContent; // передаем исходное значение в input.
    editPopup.classList.add(popupOpened);
}

function closeProfilePopup() { // закрываем popup без сохранения.
    editPopup.classList.remove(popupOpened);
}

function formSubmitEdit(evt) { // сохраняем Submit edit.
    evt.preventDefault();
    profileAuthor.textContent = author.value;
    profileDescription.textContent = description.value;

    closeProfilePopup(); // после сохранения Submit Edit закрываем popup.
}

function openAddPopup() { // открываем popup add.
    addPopup.classList.add(popupOpened);
}

function closeAddPopup() { // закрываем opup add.
    addPopup.classList.remove(popupOpened);
}

function formSubmitAdd(evt) { // сохраняем Submit add.
    evt.preventDefault();

    closeAddPopupButton(); // после сохранения Submit Add закрываем popup.
}

/*
const popup = document.querySelector('.popup');
const closePopupByClickOnOverlay = function(event) { // функция закрытия popup при клике вне зоны popup. // драфт 
    if (event.target !== event.currentTarget) {
        return;
    } else {
        closePopup();
    }
    popup.addEventListener('click', closePopupByClickOnOverlay);
} */


editPopupButton.addEventListener('click', openProfilePopup);
closeEditPopup.addEventListener('click', closeProfilePopup);
formELementPlaceEdit.addEventListener('submit', formSubmitEdit);
addPopupButton.addEventListener('click', openAddPopup);
closeAddPopupButton.addEventListener('click', closeAddPopup);
formELementPlaceAdd.addEventListener('submit', formSubmitAdd);





















/* 
const likeButton = document.querySelector('.element__like-button'); // кнопка лайк.
const likeButtonActive = 'element__like-button_type_active'; // задаем константу добавления модификатора для активной кнопки лайк.

function getImageLike() {
    likeButton.classList.add(likeButtonActive);
}

likeButton.addEventListener('click', getImageLike); */