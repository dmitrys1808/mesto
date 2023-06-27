class Card {
    constructor(cardData, templateSelector, handleCardClick, openDeletePopup, likeShift) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._myId = cardData.myid;
        this._ownerId = cardData.owner._id;
        this._likes = cardData.likes;
        this._likesLength = cardData.likes.length;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._likeShift = likeShift;
        this._cardId = cardData._id;
        this._openDeletePopup =  openDeletePopup;
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__img');
        this._cardText = this._element.querySelector('.card__text');
        this._heartBtn = this._element.querySelector('.card__heart');
        this._cardDeleteBtn = this._element.querySelector('.card-trash');
        this._closestCard = this._cardDeleteBtn.closest('.card');
        this._counter = this._element.querySelector('.card__counter');
    }
    _getTemplate() {
        const newCard = document.querySelector(this._templateSelector).content.cloneNode(true);
        return newCard;
    }
    _handleDelete() {
        this._openDeletePopup({card: this, cardId: this._cardId})
    }
    _likeCard() {
        this._likeShift(this._heartBtn, this._cardId)
    }
    likeSwitch(likes) {
        this._heartBtn.classList.toggle('card__button_active');
        this._counter.textContent = likes.length
    }
    deleteCard() {
        this._closestCard.remove();
    }
    _setEventListeners() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        this._cardDeleteBtn.addEventListener('click', () => this._handleDelete());
        this._heartBtn.addEventListener('click', () => this._likeCard());
    }
    _checkTrash() {
        if (this._myId !== this._ownerId){
         this._cardDeleteBtn.remove()}
    }
    _checkLikes() {
        this._likes.forEach(element => {
            if (element._id === this._myId) {
                this._heartBtn.classList.add('card__button_active')
                return
            }
        })
        this._counter.textContent = this._likesLength
    }
    generateCard() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardText.textContent = this._name;
        this._checkTrash();
        this._checkLikes();
        this._setEventListeners();
        return this._element;

    }
};
export { Card };