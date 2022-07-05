class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProfile() { // получаем данные пользователя с сервера
        return fetch(`${this._baseUrl}/users/me`, {
                headers: this._headers
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Ошибка'))
    }

    getInitialCards() { // получаем карточки с сервера
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Ошибка получаения карточек пользователя'))
    }

    editProfile(name, about) { // отправляем на сервер данные пользователя
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Ошибка отправки данных пользователя'))
    }

    addCard(name, link) { // отправляем на сервер новую карточку
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Карточка не загрузилась'))
    }

    deleteCard(id) { // удаляем карточку с сервера
        return fetch(`${this._baseUrl}/cards/${id}`, {
                method: "DELETE",
                headers: this._headers,
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Карточка не удалилась'))
    }

    deleteLike(id) { // удаляем свой лукас
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "DELETE",
                headers: this._headers,
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Не убрали лайк'))
    }

    putLike(id) { // ставим лукас
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "PUT",
                headers: this._headers,
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Не поставили лайк'))
    }

    changeAvatar(avatar) { // отправляем на сервер данные пользователя
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar
                })
            }).then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch(console.log('Ошибка отправки данных пользователя'))
    }


}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
        authorization: 'ed24a158-2646-4ac3-a112-ed7a389062f2',
        'Content-Type': 'application/json'
    }
});