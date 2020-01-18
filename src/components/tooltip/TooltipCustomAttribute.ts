import { autoinject, bindable, containerless } from 'aurelia-framework';
import { TooltipOption } from 'bootstrap';
import { ComponentBase } from '../ComponentBase';

@autoinject
export class TooltipCustomAttribute extends ComponentBase {
    @bindable({ primaryProperty: true }) public title: string;
    @bindable public trigger: 'hover' | 'click' | 'focus' | string = 'hover focus';
    @bindable public animation: boolean = true;
    @bindable public container: string | Element | false = false;
    @bindable public delay: number = 0;
    @bindable public html: boolean = false;
    @bindable public placement: 'auto' | 'top' | 'bottom' | 'left' | 'right' = 'top';
    @bindable public selector: string | false = false;
    @bindable public template: string;
    @bindable public offset: number | string = 0;

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

    private attached() {
        console.log(this.title);
        this.jElement.tooltip({
            title: this.title,
            trigger: this.trigger,
            animation: this.animation,
            container: this.container,
            delay: this.delay,
            html: this.html,
            placement: this.placement,
            selector: this.selector,
            template: this.template != null ? this.template : undefined,
            offset: this.offset
        } as TooltipOption);
    }

    private titleChanged(newValue: string) {
        this.jElement.tooltip({
            title: this.title,
            trigger: this.trigger,
            animation: this.animation,
            container: this.container,
            delay: this.delay,
            html: this.html,
            placement: this.placement,
            selector: this.selector,
            template: this.template != null ? this.template : undefined,
            offset: this.offset
        } as TooltipOption);
    }
}