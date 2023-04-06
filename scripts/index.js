let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let saveButton = document.querySelector('.popup__button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon');
let formElement = document.querySelector('.edit-form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
function openPopup() {
    popup.classList.add('popup_opened')
}
function closePopup(){
    popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
function handleFormSubmit (evt) {
    evt.preventDefault();
let name = nameInput.value;
let description = jobInput.value;
profileName.textContent = name;
profileDescription.textContent = description;
closePopup()
}
formElement.addEventListener('submit', handleFormSubmit);