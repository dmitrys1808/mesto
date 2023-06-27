const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const avatarEdit = document.querySelector('.profile__avatar-cover');

const imagePopup = '.popup_type_fullscreen';
const containerSeletor = '.grid';
const editPopup = '.popup_type_edit';
const addPopup = '.popup_type_card';
const editAvatar = '.popup_type_update';
const surenessWithPopup = '.popup_type_sureness'

const profileConfig = {
  profileName: '.profile__name',
  profileDescription: '.profile__description',
  profileAvatar: '.profile__avatar',
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
const formElementAvatar = document.querySelector('.edit-form_avatar_submit')
let userId = {};
export{
  buttonEdit,
  buttonAdd,
  avatarEdit,
  imagePopup,
  containerSeletor,
  editPopup,
  addPopup,
  editAvatar,
  surenessWithPopup,
  profileConfig,
  validationConfig,
  formElementEditing,
  formElementAdding,
  formElementAvatar,
  userId
}