export class UserInfo {
    constructor({ profileNameSelector, profileAbouttSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._about = document.querySelector(profileAbouttSelector);
    }

    getUserInfo() { // возвращаем данные при сабмите 
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo(name, about) { // сохраняем текущие значения в секции в инпуты при открытии попапа
        this._name.textContent = name;
        this._about.textContent = about;
    }
}