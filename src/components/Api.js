export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }
    getInfo() {
        return fetch(`${this._url}/users/me`,
            {
                headers: {
                    authorization: this._authorization
                }
            })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.about,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.image,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    addLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    deleteLike(cardId) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
    setAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject)
    }
}


