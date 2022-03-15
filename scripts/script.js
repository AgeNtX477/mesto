const items = [{ // базовый массив 
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
const popupZoomedCaption = popupZoomed.querySelector('.popup__caption');
const popupZoomedImage = popupZoomed.querySelector('.popup__image');
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
const inputs = document.querySelector('.popup__input'); // глобальная константа для всех INPUT

function openPopupGlobal(popupGlobal) { // глобальная функция открытия всех POPUP
    popupGlobal.classList.add('popup_opened');
};

function closePopupGlobal(popupGlobal) { // глобальная функция закрытия всех POPUP
    popupGlobal.classList.remove('popup_opened');
};

function sendCurrentValue() { // функция передачи текущего значения данных профиля в инпут POPUP редактирования профиля
    inputNameProfileEdit.value = currentProfileName.textContent;
    inputAboutProfileEdit.value = currentProfileAbout.textContent;
}

function handleSubmitformPlaceEdit(evt) { // функция SUMBIT для POPUP редактирования профиля
    evt.preventDefault();
    currentProfileName.textContent = inputNameProfileEdit.value;
    currentProfileAbout.textContent = inputAboutProfileEdit.value;
    closePopupGlobal(popupProfileEdit);
};

function setEventListeners(cardELement) { // функция обработчик событий на клики и соответствующие функции :
    cardELement.querySelector('.element__del-button').addEventListener('click', handleDelete); // клик по "мусорке" (удаление)
    cardELement.querySelector('.element__like-button').addEventListener('click', handleLike); // клик по "лайку" (лайк)
    cardELement.querySelector('.element__image').addEventListener('click', handleView); // клик по картинке (полноценный просмотр)
};

const createCard = (data) => { // функцию создания карточки на основе шаблона template
    const cardELement = templateElement.querySelector('.element__box').cloneNode(true);
    cardELement.querySelector('.element__image').src = data.link;
    cardELement.querySelector('.element__image').alt = data.name;
    cardELement.querySelector('.element__title').textContent = data.name;
    setEventListeners(cardELement);
    return cardELement;
};

const renderCard = (data) => { // помещаем новую карточку в верстку
    const cardELement = createCard(data);
    cardsContainer.prepend(cardELement);
};

items.forEach(card => { // добавляем начальные карточки в верстку
    renderCard(card);
});

function handleDelete(event) { // функция удалить карточку 
    const cardELement = event.target.closest('.element__box');
    cardELement.remove();
};

function handleLike(event) { // функция поставить лайк
    event.target.classList.toggle('element__like-button_type_active');
};

function handleView(event) { // функция открытия POPUP полноразмерной картинки
    openPopupGlobal(popupZoomed)
    const zoomed = event.target;
    popupZoomedCaption.textContent = zoomed.alt;
    popupZoomedImage.src = zoomed.src;
    popupZoomedImage.alt = zoomed.alt;
};

function handleSumbitFormPlaceAdd(evt) { // функция SUMBIT для POPUP добавления нового места
    evt.preventDefault();
    renderCard({
        name: inputPlaceNameAddNewPlace.value,
        link: inputLinkAddNewPlace.value
    }, cardsContainer);
    closePopupGlobal(popupAddNewPlace);
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
};

buttonProfileEdit.addEventListener('click', function() { // слушатель кнопки открытия POPUP редактирования профиля
    openPopupGlobal(popupProfileEdit);
});

buttonProfileEdit.addEventListener('click', sendCurrentValue); // слушатель передачи текущего значения данных профиля в инпут POPUP редактирования профиля

buttonCloseProfileEditPopup.addEventListener('click', function() { // слушатель кнопки закрытия POPUP редактирования профиля
    closePopupGlobal(popupProfileEdit);
});

buttonAddNewPlace.addEventListener('click', function() { // слушатель кнопки открытия POPUP добавления нового места
    openPopupGlobal(popupAddNewPlace);
});

buttonCloseAddNewPlacePopup.addEventListener('click', function() { // слушатель кнопки закрытия POPUP добавления нового места
    closePopupGlobal(popupAddNewPlace);
});

buttonCloseZoomedImagePopup.addEventListener('click', function() { // слушатель закрытия POPUP полноразмерной картинки
    closePopupGlobal(popupZoomed);
});

submitFormProfileEditPopup.addEventListener('submit', handleSubmitformPlaceEdit); // слушаем SUBMIT для POPUP редактирования профиля

submitFormAddNewPlacePopup.addEventListener('submit', handleSumbitFormPlaceAdd); // слушаем SUBMIT для POPUP добавления нового места