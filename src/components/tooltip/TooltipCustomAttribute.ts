import { autoinject, bindable, containerless } from 'aurelia-framework';
import { ComponentBase } from '../ComponentBase';

@autoinject
export class TooltipCustomAttribute extends ComponentBase {
    public value: string;

    public constructor(element: Element) {
        super(element);
    }

    public show() {
        this.jElement.tooltip('show');
    }

    public hide() {
        this.jElement.tooltip('hide');
    }

    public toggle() {
        this.jElement.tooltip('toggle');
    }

    public dispose() {
        this.jElement.tooltip('dispose');
    }

    public enable() {
        this.jElement.tooltip('enable');
    }

    public disable() {
        this.jElement.tooltip('disable');
    }

    private bind() {
        console.log('tooltip');
        console.log(this.value);
        this.jElement.tooltip({
            title: 'hello world'
        });
    }

    private attached() {
        console.log('tooltip');
        console.log(this.value);
        this.jElement.tooltip({
            title: 'hello world'
        });
    }

    private valueChanged(newValue: string) {
        console.log(newValue);
        this.jElement.tooltip({
            title: this.value
        });
    }
}