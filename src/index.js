import './pages/index.css'
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import {
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
} from './utils/constants.js'

const userInfo = new UserInfo(profileConfig);
const popupWithImage = new PopupWithImage(imagePopup);
function createCard(item) {
  const card = new Card(item.title, item.image, '#card-template', popupWithImage.open);
  const newCard = card.generateCard();
  return newCard
}

const section = new Section({
  items: initialCards,
  renderer: (cardData) => {
    section.addItem(createCard(cardData));
  }
}, containerSeletor);
section.addCards();

// edit profile popup 
const popupEdit = new PopupWithForm(editPopup, (data) => {
  userInfo.setUserInfo(data);
  popupEdit.close();
});

buttonEdit.addEventListener('click', () => {
  popupEdit.open();
  popupEdit.setInputValues(userInfo.getUserInfo());
  newProfileFormValidation.clearInputErrors();
});


//  add card popup
const popupAdd = new PopupWithForm(addPopup, (data) => {
  section.addItem(createCard(data));
  popupAdd.close();
});


buttonAdd.addEventListener('click', () => {
  popupAdd.open();
  newAddCardFormValidation.clearInputErrors();
});

// seteventlisteners
popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();

// validation
const newProfileFormValidation = new FormValidator(validationConfig, formElementEditing);
const newAddCardFormValidation = new FormValidator(validationConfig, formElementAdding);

newProfileFormValidation.enableValidation();
newAddCardFormValidation.enableValidation();
