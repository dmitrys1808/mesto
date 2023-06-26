import Popup from './Popup.js';
export default class PopupWithSurenessForm extends Popup {
    constructor(popupSelector, handleFunction) {
        super(popupSelector);
        this._handleFunction = handleFunction;
        this._form = this._popup.querySelector('.edit-form');
        this._submitBtn = this._form.querySelector('.popup__button');
        this._submitBtnDef = this._submitBtn.textContent;
    }
    open = ({ card, cardId }) => {
        super.open();
        this._element = card;
        this._cardId = cardId;
    }
    defText() {
        this._submitBtn.textContent = this._submitBtnDef;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitBtn.textContent = `${this._submitBtn.textContent}...`
            this._handleFunction({ card: this._element, cardId: this._cardId });
            this.close();
        })
    }
}