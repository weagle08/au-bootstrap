import { autoinject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { EventUtils } from '../../utils/EventUtils';
import { ComponentBase } from '../ComponentBase';

@autoinject
export class Modal extends ComponentBase {
    @bindable public size: 'modal-sm' | 'modal-lg' | 'modal-xl' | undefined;

    constructor(element: Element) {
        super(element);
    }

    public attached() {
        this.jElement.on('shown.bs.modal', () => {
            EventUtils.fireEvent('shown', this._domElement);
        });
    }

    public show(): void {

    }

    public hide(): void {

    }
}