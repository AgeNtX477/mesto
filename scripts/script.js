function closePopupGlobalByEsc(e) {
    if (e.key == ESC_BUTTON) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopupGlobal(popupOpened);
    }
};

function openPopupGlobal(popupGlobal) { // глобальная функция открытия всех POPUP
    popupGlobal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupGlobalByEsc);
};

function closePopupGlobal(popupGlobal) { // глобальная функция закрытия всех POPUP
    popupGlobal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupGlobalByEsc);
};

function sendCurrentValue() { // функция передачи текущего значения данных профиля в инпут POPUP редактирования профиля
    inputNameProfileEdit.value = currentProfileName.textContent;
    inputAboutProfileEdit.value = currentProfileAbout.textContent;
}

function handleSubmitformPlaceEdit(e) { // функция SUMBIT для POPUP редактирования профиля
    e.preventDefault();
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

function handleSumbitFormPlaceAdd(e) { // функция SUMBIT для POPUP добавления нового места
    e.preventDefault();
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

/*  улучшаем код:
1. сделать общую функцию закрытия.
2. сделать массив с начала до конца.
3. сделать закрытие попапов по нажатию вне области попапа + кнопка ESC. 
*/