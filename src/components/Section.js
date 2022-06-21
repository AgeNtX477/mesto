export class Section { // класс отвечает за отрисовку элементов на странице
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer;

    }

    renderItems() { // публичный метод, который отвечает за отрисовку всех элементов
        this._items.forEach(data => {
            this._renderer(data)
        });
    }

    addItem(element) { // публичный метод который принимает DOM-элемент и добавляет его в контейнер.
        this._container.prepend(element);
    }

}