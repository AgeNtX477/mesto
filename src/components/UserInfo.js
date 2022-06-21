export class UserInfo {
    constructor({ profileNameSelector, profileAbouttSelector }) {
        this._nameSelector = document.querySelector(profileNameSelector);
        this._aboutSelector = document.querySelector(profileAbouttSelector);
    }

    getUserInfo() { // возвращаем данные при сабмите 
        return {
            name: this._nameSelector.textContent,
            about: this._aboutSelector.textContent
        }
    }

    setUserInfo(name, about) { // сохраняем текущие значения в секции в инпуты при открытии попапа
        this._nameSelector.textContent = name;
        this._aboutSelector.textContent = about;
    }
}