export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    addCards() {
        this._items.forEach(element => {
           this._renderer(element);
        });
    }
    addItem(elementDom){
        this._container.prepend(elementDom);
    }
}