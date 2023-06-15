class Card {
    constructor(title, image, templateSelector, handleCardClick) {
        this._name = title;
        this._link = image;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.cloneNode(true);
        return newCard;
    }
    _likeCard() {
        this._heartBtn.classList.toggle('card__button_active');
    }
    _deleteCard() {
        this._closestCard.remove();
    }
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        this._cardDeleteBtn.addEventListener('click', () => this._deleteCard());
        this._heartBtn.addEventListener('click', () => this._likeCard());
    }
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__img');
        this._cardText = this._element.querySelector('.card__text');
        this._heartBtn = this._element.querySelector('.card__heart');
        this._cardDeleteBtn = this._element.querySelector('.card-trash');
        this._closestCard = this._cardDeleteBtn.closest('.card');
        this._element.querySelector('.card__img').style.backgroundImage = `url(${this._link})`;
        this._element.querySelector('.card__text').textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardText.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
};
export {Card};