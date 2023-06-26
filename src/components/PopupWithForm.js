import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.edit-form');
        this._inputList = this._form.querySelectorAll('.edit-form__item');
        this._submitBtn = this._form.querySelector('.popup__button');
        this._submitBtnDef = this._submitBtn.textContent;
    }
    getInputValues() {
        this._values = {};
        this._inputList.forEach(input => {
            this._values[input.name] = input.value;
        })
        return this._values;
    }
    setInputValues(userData) {
        this._inputList.forEach(input => {
            input.value = userData[input.name];
        })
    }
    close() {
        super.close();
        this._form.reset();
    }
    defText() {
        this._submitBtn.textContent = this._submitBtnDef;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            this._submitBtn.textContent = `${this._submitBtn.textContent}...`
            evt.preventDefault();
            this._handleSubmit(this.getInputValues());
        });
    }
}