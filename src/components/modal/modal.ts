import { autoinject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { EventUtils } from '../../utils/EventUtils';
import { ComponentBase } from '../ComponentBase';

export interface IModalOptions {
    backdrop: boolean | 'static';
    keyboard: boolean;
    focus: boolean;
    show: boolean;
}

export const ModalEvents = {
    SHOW: 'show',
    SHOWN: 'shown',
    HIDE: 'hide',
    HIDDEN: 'hidden'
};

@autoinject
export class Modal extends ComponentBase {
    @bindable public size: 'modal-sm' | 'modal-lg' | 'modal-xl' | undefined;
    @bindable public options: IModalOptions;

    constructor(element: Element) {
        super(element);
    }

    public attached() {
        if (this.options != null) {
            if (this.options.show == null) {
                this.options.show = false;
            }

            this.jElement.modal(this.options);
        }

        this.jElement.on('show.bs.modal', () => {
            EventUtils.fireEvent(ModalEvents.SHOW, this._domElement);
        });

        this.jElement.on('shown.bs.modal', () => {
            EventUtils.fireEvent(ModalEvents.SHOWN, this._domElement);
        });

        this.jElement.on('hide.bs.modal', () => {
            EventUtils.fireEvent(ModalEvents.HIDE, this._domElement);
        });

        this.jElement.on('hidden.bs.modal', () => {
            EventUtils.fireEvent(ModalEvents.HIDDEN, this._domElement);
        });

    }

    public show(): void {
        this.jElement.modal('show');
    }

    public hide(): void {
        this.jElement.modal('hide');
    }

    public toggle(): void {
        this.jElement.modal('toggle');
    }

    public handleUpdate(): void {
        this.jElement.modal('handleUpdate');
    }

    public dispose(): void {
        this.jElement.modal('dispose');
    }

    private optionsChanged(options: IModalOptions) {
        if (options != null) {
            if (this.options.show == null) {
                this.options.show = false;
            }

            this.jElement.modal(options);
        }
    }
}