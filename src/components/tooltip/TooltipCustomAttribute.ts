import { autoinject, bindable, containerless } from 'aurelia-framework';
import { ComponentBase } from '../ComponentBase';

@containerless
@autoinject
export class TooltipCustomAttribute extends ComponentBase {
    @bindable public value: string;

    public constructor(element: Element) {
        super(element);
    }

    private attached() {
        this.jElement.tooltip({
            title: this.value
        });
    }
}