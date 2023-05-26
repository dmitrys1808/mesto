import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_type_edit');
const addPopup = document.querySelector('.popup_type_card');
const imagePopup = document.querySelector('.popup_type_fullscreen');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInEdit = document.querySelector('#name');
const descriptionInEdit = document.querySelector('#description');
const buttonCloseEditPopup = document.querySelector('.popup__close-edit');
const buttonCloseAddPopup = document.querySelector('.popup__close-card');
const buttonCloseImagePopup = document.querySelector('.popup__close-image');
const newPlaceName = document.querySelector('#image-name');
const newPlaceLink = document.querySelector('#image-link');
const grid = document.querySelector('.grid');
const formElementEditing = document.querySelector('.edit-form_profile_submit');
const formElementAdding = document.querySelector('.edit-form_card_submit');
const wideImage = document.querySelector('.popup__image');
const imagePopupText = document.querySelector('.popup__text');
const validationConfig = {
  formSelector: '.edit-form',
  inputSelector: '.edit-form__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'edit-form__item_type_error',
  errorClass: 'edit-form__item-error_visible',
};
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
// function for opening
const openPopup = function (element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscape);
};
// function for closing
const closePopup = function (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscape);
}
// open edit profile popup 
buttonEdit.addEventListener('click', ()=> {
  openPopup(editPopup);
  nameInEdit.value = profileName.textContent;
  descriptionInEdit.value = profileDescription.textContent;
  clearInputErrors(editPopup);
  disableBtn(editPopup);
});
// open add card popup
buttonAdd.addEventListener('click', () => {
  openPopup(addPopup);
  formElementAdding.reset();
  clearInputErrors(addPopup);
  disableBtn(addPopup);
})
//Closing popups
buttonCloseEditPopup.addEventListener('click', () => closePopup(editPopup));
buttonCloseAddPopup.addEventListener('click', () => closePopup(addPopup));
buttonCloseImagePopup.addEventListener('click', () => closePopup(imagePopup));
// submitting of edit form
function editFormSubmit (evt) { 
  evt.preventDefault(); 
profileName.textContent = nameInEdit.value; 
profileDescription.textContent = descriptionInEdit.value; 
closePopup(editPopup) 
} 
formElementEditing.addEventListener('submit', editFormSubmit);
// submitting of add form
function addFormSubmit (evt) { 
  evt.preventDefault(); 
  const cardData = { 
    name: newPlaceName.value, 
    link: newPlaceLink.value,
  };
  grid.prepend(createCard(cardData)); 
closePopup(addPopup)
} 
formElementAdding.addEventListener('submit', addFormSubmit);
// closing pop with escape
function closeEscape (evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_opened');
    popupActive.classList.remove('popup_opened');
  }
};
// closing pop with overlay
function closeWithOverlay (evt) {
  if (evt.target.classList.contains('popup_opened')){
    closePopup(evt.target);
  }
}
addPopup.addEventListener('mousedown', closeWithOverlay);
imagePopup.addEventListener('mousedown', closeWithOverlay);
editPopup.addEventListener('mousedown', closeWithOverlay);
// function for disabling the button
function disableBtn(popupElement) {
  const buttonElement = popupElement.querySelector('.popup__button');
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.disabled = true;
}
// function for clearing 
function clearInputErrors(popupElement){
  const inputErrorList = popupElement.querySelectorAll('.edit-form__item-error');
  const inputList = Array.from(popupElement.querySelectorAll('.edit-form__item'));
  inputList.forEach(function(inputElement){
    inputElement.classList.remove('edit-form__item_type-error');
  })
  inputErrorList.forEach(error => {
    error.classList.remove('edit-form__item-error_visible');
  });
}
// initial cards
function initiateCards(el) {
  el.forEach((item) => {
    grid.append(createCard(item));
  })
}
function createCard(item) {
  const card = new Card(item.name, item.link, '#card-template', fullScreenImage);
  const newCard = card.generateCard();
  return newCard;
}
initiateCards(initialCards);

function fullScreenImage(name, link) {
  wideImage.src = link;
  imagePopupText.alt = name;
  imagePopupText.textContent = name;
  openPopup(imagePopup);
  }
// validation
const newProfileForm = new FormValidator(validationConfig, formElementEditing);
const newAddCardForm = new FormValidator(validationConfig, formElementAdding);

newProfileForm.enableValidation();
newAddCardForm.enableValidation();
  