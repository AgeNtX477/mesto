import './index.css';
import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import {
    submitFormProfileEditPopup,
    inputNameProfileEdit,
    inputAboutProfileEdit,
    submitFormAddNewPlacePopup,
    buttonProfileEdit,
    buttonAddNewPlace,
    buttonProfileAvatar,
    initialCards,
    validateObj,
    submitFormUserAvatarPopup
} from '../utils/constants.js';

let userId; // создадим пустую переменную userId

Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cardList]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData.name, userData.about, userData.avatar);
        cardList.reverse();
        cardList.forEach(data => {
            const card = createCard(data.name, data.link, data.likes, data._id, userId, data.owner._id)
            section.addItem(card)
        })
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });

function createCard(cardName, cardLink, cardLikes, cardId, userId, ownerId) {
    const card = new Card(cardName, cardLink, cardLikes, cardId, userId, ownerId, '.template__card', () => {
            imagePopup.open(cardName, cardLink); // открываем просмотр изображения
        },
        (cardId) => { // при нажатии на "мусорку" октрываем попап подверждения и удаляем карточку по id
            confirmPopup.open()
            confirmPopup.changeSubmitHandler(() => {
                api.deleteCard(cardId)
                    .then(res => {
                        card.handleDelete();
                        confirmPopup.close()
                    })
                    .catch((err) => {
                        console.log(err); // выведем ошибку в консоль
                    });
            })
        },
        (cardId) => { // проверяем кнопку лайк

            if (card.isLiked()) {
                api.deleteLike(cardId)
                    .then(res => {
                        card.setLikes(res.likes)
                    })
                    .catch((err) => {
                        console.log(err); // выведем ошибку в консоль
                    });
            } else {
                api.putLike(cardId)
                    .then(res => {
                        card.setLikes(res.likes)
                    })
                    .catch((err) => {
                        console.log(err); // выведем ошибку в консоль
                    });
            }
        }
    );
    const newCard = card.generateCard();
    return newCard;
}

// создание экземпляров классов

const section = new Section({ // создаем экземпляр класса Section для отрисовки всех карточек на странице и добавления новой
    items: initialCards,
    renderer: (item) => {
        const cardItem = createCard(item.cardName, item.cardLink, item.cardLikes, item.cardId, userId, item.ownerId, '.element')
        section.addItem(cardItem);
    }
}, '.element');

const imagePopup = new PopupWithImage('.popup_img-zoomed');

const profilePopup = new PopupWithForm('.popup_profile-edit', {
    handleSubmit: (data) => {
        const { name, about } = data;
        profilePopup.renderLoading(true);
        api.editProfile(name, about) // сохраняем данные пользователя на сервере
            .then((res) => {
                userInfo.setUserInfo(res.name, res.about, res.avatar); // значения из интпутов и аватар сохраняем при помощи метода setUserInfo класса UserInfo
                profilePopup.close();
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
            .finally(() => profilePopup.renderLoading(false));

    }
});

const cardAddPopup = new PopupWithForm('.popup_img-add', {
    handleSubmit: (data) => {
        cardAddPopup.renderLoading(true);
        api.addCard(data['place'], data['url']) // сохраняем карточку на сервере
            .then((res) => {
                const card = createCard(res.name, res.link, res.likes, res._id, userId, res.owner._id);
                section.addItem(card); // добавляем карточку методом addItem класса Section
                cardAddPopup.close()
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
            .finally(() => cardAddPopup.renderLoading(false));
    }
});

const userAvatarPopup = new PopupWithForm('.popup_avatar', {
    handleSubmit: (data) => {
        userAvatarPopup.renderLoading(true);
        api.changeAvatar(data.avatar)
            .then((res) => {
                userInfo.setUserAvatar({
                    avatar: res.avatar
                });
                userAvatarPopup.close();
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            })
            .finally(() => userAvatarPopup.renderLoading(false));
    }
});

const confirmPopup = new PopupWithConfirmation('.popup_del-confirm');

// подписки для закрытия модальных окно

imagePopup.setEventListeners();

profilePopup.setEventListeners();

cardAddPopup.setEventListeners();

confirmPopup.setEventListeners();

userAvatarPopup.setEventListeners();

section.renderItems();

// информация пользователя

const userInfo = new UserInfo({ profileNameSelector: '.profile__author', profileAbouttSelector: '.profile__description', profileAvatarSelector: '.profile__avatar' });

// cлушатели кнопок открытия попапов с формами

buttonProfileEdit.addEventListener('click', () => { // слушатель кнопки открытия POPUP редактирования профиля
    profilePopup.open();
    const { name, about } = userInfo.getUserInfo(); // используем класс UserInfo что бы передавать текучие значения тайтлов в инпуты
    validateProfileEdit.deactivateValidation(); // чистим ошибки валидации и выключаем кнопку
    inputNameProfileEdit.value = name;
    inputAboutProfileEdit.value = about;
});

buttonAddNewPlace.addEventListener('click', () => { // слушатель кнопки открытия POPUP добавления нового места 
    cardAddPopup.open();
    validateCardAdd.deactivateValidation(); // чистим ошибки валидации и выключаем кнопку
});

buttonProfileAvatar.addEventListener('click', () => {
    userAvatarPopup.open();
    validateUserAvatar.deactivateValidation(); // чистим ошибки валидации и выключаем кнопку
});

const validateProfileEdit = new FormValidator(validateObj, submitFormProfileEditPopup); // создаем дубликат FormValidator редактирования профиля
validateProfileEdit.enableValidation(); // запускаем валидацию для формы редактирования профиля

const validateCardAdd = new FormValidator(validateObj, submitFormAddNewPlacePopup); // создаем дубликат FormValidator добавления новой карточки
validateCardAdd.enableValidation(); // запускаем валидацию для добавления новой карточки

const validateUserAvatar = new FormValidator(validateObj, submitFormUserAvatarPopup); // создаем дубликат FormValidator аватара пользователя
validateUserAvatar.enableValidation(); // запускаем валидацию для аватара