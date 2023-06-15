const initialCards = [
  {
    title: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const imagePopup = '.popup_type_fullscreen';
const containerSeletor = '.grid';
const editPopup = '.popup_type_edit';
const addPopup = '.popup_type_card';

const profileConfig = {
  profileName: '.profile__name',
  profileDescription: '.profile__description',
}

const validationConfig = {
  formSelector: '.edit-form',
  inputSelector: '.edit-form__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'edit-form__item_type_error',
  errorClass: 'edit-form__item-error_visible',
};

const formElementEditing = document.querySelector('.edit-form_profile_submit');
const formElementAdding = document.querySelector('.edit-form_card_submit');

export{
  initialCards,
  buttonEdit,
  buttonAdd,
  imagePopup,
  containerSeletor,
  editPopup,
  addPopup,
  profileConfig,
  validationConfig,
  formElementEditing,
  formElementAdding,
}