export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupButtonClose = this._popup.querySelector('.popup__img')
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.addEventListener('keydown', this._handleEscClose)
    }
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleCloseButton = () => {
        this.close();
    }
    _closeWithOverlay = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupButtonClose.addEventListener('click', this._handleCloseButton);
        this._popup.addEventListener('mousedown', this._closeWithOverlay);
    }
}