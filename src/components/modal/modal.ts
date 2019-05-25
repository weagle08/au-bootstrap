import { ComponentBase } from '../ComponentBase';
import { autoinject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';

@autoinject
export class Modal extends ComponentBase {
    @bindable public size: 'modal-sm' | 'modal-lg' | 'modal-xl' | undefined;

    constructor(element: Element) {
        super(element);
    }

    public attached() {

    }

    public show(): void {

    }

    public hide(): void {

    }
}