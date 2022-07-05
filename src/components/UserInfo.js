export class UserInfo {
    constructor({ profileNameSelector, profileAbouttSelector, profileAvatarSelector }) {
        this._name = document.querySelector(profileNameSelector);
        this._about = document.querySelector(profileAbouttSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo() { // возвращаем данные 
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        }
    }

    setUserInfo(name, about, avatar) { // сохраняем текущие значения в секции в инпуты при открытии попапа
        this._name.textContent = name;
        this._about.textContent = about;
        this._avatar.src = avatar;
    }

    setUserAvatar(newAvatar) { // сохраняем новый аватар пользователя
        this._avatar.src = newAvatar.avatar;
    }
}