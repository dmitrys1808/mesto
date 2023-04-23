let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let addPopup = document.querySelector('.add-popup');
let closeButton = document.querySelector('.popup__icon');
let closeAddButton = document.querySelector('.add-popup__icon');
let formElement = document.querySelector('.edit-form');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let grid = document.querySelector('.grid');
let cardNameInput = document.querySelector('#image-name');
let cardLinkInput = document.querySelector('#image-link');
let cardTemplate = document.querySelector('#card-template');
let cardText = document.querySelector('.card__text');
let addCardForm = document.querySelector('.add-form');
let cardBtn = document.querySelector('.card__button');
let cardImage = document.querySelector('.card__img');
let imagePopup = document.querySelector('.image-popup');
let wideImage = document.querySelector('.image-popup__image');
let imagePopupText = document.querySelector('.image-popup__text');
let imagePopupButton = document.querySelector('.image-popup__icon');
let heart = document.querySelector('.card__heart')
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

function openAddPopup() {
    addPopup.classList.add('add-popup_opened');
}
addButton.addEventListener('click', openAddPopup);
function closeAddPopup(){
    addPopup.classList.remove('add-popup_opened')
}
closeAddButton.addEventListener('click', closeAddPopup);
function cardCreate (item) {
    const newCard = cardTemplate.content.cloneNode(true);
    newCard.querySelector('.card__text').textContent = item.name;
    newCard.querySelector('.card__img').src = item.link;
    newCard.querySelector('.card__img').alt = item.name;
    return newCard;
}
initialCards.forEach(function (item) {
    grid.append(cardCreate (item))
});

function addCardSubmit (evt) {
    evt.preventDefault();
let createObjCard = {
  name: cardNameInput.value,
  link: cardLinkInput.value
};
grid.prepend(cardCreate(createObjCard));
closeAddPopup();
}
addCardForm.addEventListener('submit', addCardSubmit);

grid.addEventListener('click', function (evt) {
  if (evt.target.classList != 'card-trash') return;
  let closestCard = evt.target.closest('.card');
  closestCard.remove();
})
function openImagePopup() {
  imagePopup.classList.add('image-popup_opened');
};
function closeImagePopup () {
  imagePopup.classList.remove('image-popup_opened')
}
grid.addEventListener('click', function (evt) {
  if (evt.target.classList == 'card__img') {
    wideImage.src = evt.target.src;
    wideImage.alt = evt.target.alt;
    imagePopupText.textContent = evt.target.closest('.card').querySelector('.card__text').textContent;
    openImagePopup();
  }
})
imagePopupButton.addEventListener('click', closeImagePopup);

grid.addEventListener('click', function (event) {
  if (event.target.classList == 'card__heart') {
    if (event.target.src.includes('Union')) {
    event.target.src = "./images/Vector(3).svg";
  } else if (event.target.src.includes('Vector(3)')) {
    event.target.src = "./images/Union.svg";
  }}
})