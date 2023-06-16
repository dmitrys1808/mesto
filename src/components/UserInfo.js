export default class UserInfo {
    constructor(profileConfig) {
        this._profileName = document.querySelector(profileConfig.profileName);
        this._profileDescription = document.querySelector(profileConfig.profileDescription);
    }
    getUserInfo() {
        return {
            username: this._profileName.textContent,
            about: this._profileDescription.textContent,
        }
    }
    setUserInfo(userData) {
        this._profileName.textContent= userData.username;
        this._profileDescription.textContent = userData.about;
    }
}