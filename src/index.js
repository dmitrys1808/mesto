import './pages/index.css'
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import Api from './components/Api';
import PopupWithSurenessForm from './components/PopupWithSurenessForm';
import {
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
  userId,
} from './utils/constants.js'
// API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: 'c53a2da1-c78d-4eed-8f7f-ef4ba1a09f1f',
    'Content-Type': 'application/json'
  }
});



// sureness popup 

const surenessPopup = new PopupWithSurenessForm(surenessWithPopup, ({ card, cardId }) => {
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      surenessPopup.close();
    })
    .catch((error => console.error(`Ошибка при удалении ${error}`)))
    .finally(() => surenessPopup.defText())
})


// userinfo and image

const userInfo = new UserInfo(profileConfig);
const popupWithImage = new PopupWithImage(imagePopup);
function createCard(item) {
  const card = new Card(item, '#card-template', popupWithImage.open, surenessPopup.open, (likeElement, cardId) => {
    if (likeElement.classList.contains('card__button_active')) {
      api.deleteLike(cardId)
        .then(res => {
          card.likeSwitch(res.likes);
        })
        .catch((error => console.error(`Ошибка при лайке ${error}`)))
    } else {
      api.addLike(cardId)
        .then(res => {
          card.likeSwitch(res.likes);
        })
        .catch((error => console.error(`Ошибка при лайке ${error}`)))
    }
  });
  const newCard = card.generateCard();
  return newCard
}

//section

const section = new Section(
  (cardData) => {
    section.addItem(createCard(cardData));
  }, containerSeletor);

// edit profile popup 
const popupEdit = new PopupWithForm(editPopup, (data) => {
  api.setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({ username: res.name, about: res.about, avatar: res.avatar })
      popupEdit.close();
    })
    .catch((error => console.error(`Ошибка при редактировании ${error}`)))
    .finally(() => popupEdit.defText())
});

buttonEdit.addEventListener('click', () => {
  popupEdit.open();
  popupEdit.setInputValues(userInfo.getUserInfo());
  newProfileFormValidation.clearInputErrors();
});

// edit avatar popup
const popupAvatar = new PopupWithForm(editAvatar, (data) => {
  api.setAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ username: res.name, about: res.about, avatar: res.avatar })
      popupAvatar.close();
    })
    .catch((error => console.error(`Ошибка при обновлении аватара ${error}`)))
    .finally(() => popupAvatar.defText())
});

avatarEdit.addEventListener('click', () => {
  popupAvatar.open();
  newProfileAvatarFormValidation.clearInputErrors();
});

//  add card popup

const popupAdd = new PopupWithForm(addPopup, (data) => {
  api.addCard(data)
    .then((cardData) => {
      cardData.myid = userId.id;
      section.addItem(createCard(cardData));
      popupAdd.close();
    })
    .catch((error => console.error(`Ошибка при добавлении карточки ${error}`)))
    .finally(() => popupAdd.defText())
});


buttonAdd.addEventListener('click', () => {
  popupAdd.open();
  newAddCardFormValidation.clearInputErrors();
});

// seteventlisteners
popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupAvatar.setEventListeners();
surenessPopup.setEventListeners();


// validation
const newProfileFormValidation = new FormValidator(validationConfig, formElementEditing);
const newAddCardFormValidation = new FormValidator(validationConfig, formElementAdding);
const newProfileAvatarFormValidation = new FormValidator(validationConfig, formElementAvatar)

newProfileFormValidation.enableValidation();
newAddCardFormValidation.enableValidation();
newProfileAvatarFormValidation.enableValidation();

//initial cards

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    cardData.forEach(element => element.myid = userData._id);
    userInfo.setUserInfo({ username: userData.name, about: userData.about, avatar: userData.avatar });
    section.addCards(cardData.reverse());
    userId.id = userData._id;
  })
  .catch((error => console.error(`Ошибка при начальной загрузке ${error}`)))