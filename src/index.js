import './pages/index.css'
import { Card } from './scripts/components/Card.js';
import { FormValidator } from './scripts/components/FormValidator.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';
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
} from './scripts/utils/constants.js'

const userInfo = new UserInfo(profileConfig);
const popupWithImage = new PopupWithImage(imagePopup);


const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.title, item.image, '#card-template', popupWithImage.open);
    return card.generateCard();
  }
}, containerSeletor);
section.addCard();

// edit profile popup 
const popupEdit = new PopupWithForm(editPopup, (evt) => {
  userInfo.setUserInfo(evt);
  popupEdit.close();
});

buttonEdit.addEventListener('click', () => {
  popupEdit.open();
  popupEdit.setInputValues(userInfo.getUserInfo());
  newProfileFormValidation.clearInputErrors();
});


//  add card popup
const popupAdd = new PopupWithForm(addPopup, (data) => {
  section.addItem(section._renderer(data));
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
