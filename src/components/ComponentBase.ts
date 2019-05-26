export abstract class ComponentBase {
    protected _domElement: Element;

    constructor(element: Element) {
        this._domElement = element;
    }

    protected get jElement(): JQuery<Element> {
        return $(this._domElement.firstElementChild);
    }
}