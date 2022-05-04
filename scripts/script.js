const closePopupGlobalByEsc = e => { // функция закрытия все попапов нажатием кнопки ESC
    if (e.key == ESC_BUTTON) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopupGlobal(popupOpened);
    }
};

const openPopupGlobal = popupGlobal => { // глобальная функция открытия всех POPUP
    popupGlobal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupGlobalByEsc); // добавляем слушатель на кнопку ESC когда попап открыт
};

const closePopupGlobal = popupGlobal => { // глобальная функция закрытия всех POPUP
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

const setEventListeners = cardELement => { // функция обработчик событий на клики и соответствующие функции :
    cardELement.querySelector('.element__del-button').addEventListener('click', handleDelete); // клик по "мусорке" (удаление)
    cardELement.querySelector('.element__like-button').addEventListener('click', handleLike); // клик по "лайку" (лайк)
    cardELement.querySelector('.element__image').addEventListener('click', handleView); // клик по картинке (полноценный просмотр)
};

const createCard = d => { // функцию создания карточки на основе шаблона template
    const cardELement = templateElement.querySelector('.element__box').cloneNode(true);
    const elementImage = cardELement.querySelector('.element__image');
    const elementTitle = cardELement.querySelector('.element__title');
    elementImage.src = d.link;
    elementImage.alt = d.name;
    elementTitle.textContent = d.name;
    setEventListeners(cardELement);
    return cardELement;
};

const renderCard = d => { // помещаем новую карточку в верстку
    const cardELement = createCard(d);
    cardsContainer.prepend(cardELement);
};

items.forEach(card => renderCard(card)); // добавляем начальные карточки в версткуrenderCard(card);

function handleDelete(e) { // функция удалить карточку 
    const cardELement = e.target.closest('.element__box');
    cardELement.remove();
};

function handleLike(e) { // функция поставить лайк
    e.target.classList.toggle('element__like-button_type_active');
};

function handleView(e) { // функция открытия POPUP полноразмерной картинки
    openPopupGlobal(popupZoomed)
    const zoomed = e.target;
    popupZoomedCaption.textContent = zoomed.alt;
    popupZoomedImage.src = zoomed.src;
    popupZoomedImage.alt = zoomed.alt;
};

const handleSumbitFormPlaceAdd = (e) => { // функция SUMBIT для POPUP добавления нового места
    e.preventDefault();
    renderCard({
        name: inputPlaceNameAddNewPlace.value,
        link: inputLinkAddNewPlace.value
    }, cardsContainer);
    closePopupGlobal(popupAddNewPlace);
    inputPlaceNameAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    inputLinkAddNewPlace.value = ''; // очистка инпута после удачной отправки SUBMIT
    enableValidation(validateObj); // после успешного сабмита недаем кнопке быть активной (не даем создать пустую карточку)
};

buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    openPopupGlobal(popupProfileEdit);
    sendCurrentValue(); // передаем текущее значение данных профиля в инпут POPUP редактирования профиля
});
buttonCloseProfileEditPopup.addEventListener('click', () => closePopupGlobal(popupProfileEdit)); // слушатель кнопки закрытия POPUP редактирования профиля
buttonAddNewPlace.addEventListener('click', () => openPopupGlobal(popupAddNewPlace)); // слушатель кнопки открытия POPUP добавления нового места
buttonCloseAddNewPlacePopup.addEventListener('click', () => closePopupGlobal(popupAddNewPlace)); // слушатель кнопки закрытия POPUP добавления нового места
buttonCloseZoomedImagePopup.addEventListener('click', () => closePopupGlobal(popupZoomed)); // слушатель закрытия POPUP полноразмерной картинки

submitFormProfileEditPopup.addEventListener('submit', handleSubmitformPlaceEdit); // слушаем SUBMIT для POPUP редактирования профиля
submitFormAddNewPlacePopup.addEventListener('submit', handleSumbitFormPlaceAdd); // слушаем SUBMIT для POPUP добавления нового места

overlayPlaceProfileEdit.addEventListener('click', () => closePopupGlobal(popupProfileEdit)); // слушаем закрытие попапа профиля кликом на overlay
overlayPlaceAdd.addEventListener('click', () => closePopupGlobal(popupAddNewPlace)); // слушаем закрытие попапа добавления нового места кликом на overlay
overlayPlaceImgZoomed.addEventListener('click', () => closePopupGlobal(popupZoomed)); // слушаем закрытие попапа с картинкой кликом на overlay