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
        console.log('tooltip');
        console.log(this.value);
        this.jElement.tooltip({
            title: this.value
        });
    }

    private valueChanged(newValue: string) {
        console.log(newValue);
        this.jElement.tooltip({
            title: this.value
        });
    }
}