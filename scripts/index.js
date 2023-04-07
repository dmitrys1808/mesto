let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon');
let formElement = document.querySelector('.edit-form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
function closePopup(){
    popup.classList.remove('popup_opened')
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
function handleFormSubmit (evt) {
    evt.preventDefault();
profileName.textContent = nameInput.value;
profileDescription.textContent = jobInput.value;
closePopup()
}
formElement.addEventListener('submit', handleFormSubmit);