export const submitFormProfileEditPopup = document.querySelector('.popup__form_place_edit'); // форма SUBMIT для POPUP редактирования профиля
export const inputNameProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_author'); // input форма SUBMIT для POPUP редактирования профиля (имя)
export const inputAboutProfileEdit = submitFormProfileEditPopup.querySelector('.popup__input_type_description'); // input форма SUBMIT для POPUP редактирования профиля (о себе)
export const submitFormAddNewPlacePopup = document.querySelector('.popup__form_place_add'); // форма SUBMIT для POPUP добавления нового места 
export const buttonProfileEdit = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
export const buttonAddNewPlace = document.querySelector('.profile__add-button'); // кнопка добавления нового места

const alderaanImage = new URL('../images/alderaan-hope.jpg',
    import.meta.url);
const jakkuImage = new URL('../images/jakku.jpg',
    import.meta.url);
const nabunImage = new URL('../images/nabu.jpg',
    import.meta.url);
const korusantImage = new URL('../images/korusant.jpg',
    import.meta.url);
const skarifImage = new URL('../images/skarif.jpg',
    import.meta.url);

export const initialCards = [{ // объект наполнения карточек для template элемента
        cardName: 'Альдеран',
        cardLink: alderaanImage
    },
    {
        cardName: 'Джакку',
        cardLink: jakkuImage
    },
    {
        cardName: 'Набу',
        cardLink: nabunImage
    },
    {
        cardName: 'Корусант',
        cardLink: korusantImage
    },
    {
        cardName: 'Скариф',
        cardLink: skarifImage
    },
    {
        cardName: 'Звезда смерти',
        cardLink: 'https://avatars.mds.yandex.net/get-zen_doc/3445317/pub_60000a8496f6d30d4cf5774a_600013c23112ec025ead4191/scale_2400'
    }
];