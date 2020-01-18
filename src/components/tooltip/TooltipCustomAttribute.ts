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
            animation: this.animation || true,
            container: this.container || false,
            delay: this.delay || 0,
            html: this.html || false,
            placement: this.placement || 'top',
            selector: this.selector || false,
            offset: this.offset || 0
        } as TooltipOption);

        if (this.template != null) {
            this.jElement.tooltip({
                template: this.template
            });
        }

        this.attachTriggers();
    }

    private titleChanged(newValue: string) {
        this.jElement.tooltip({
            title: this.title,
            animation: this.animation,
            container: this.container,
            delay: this.delay,
            html: this.html,
            placement: this.placement,
            selector: this.selector,
            offset: this.offset
        } as TooltipOption);
    }

    private attachTriggers() {
        if (this.trigger == null) {
            this.trigger = 'hover focus';
        }

        let htmlElement: HTMLElement = this._domElement as HTMLElement;

        let triggers = this.trigger.split(' ');
        for (let trigger of triggers) {
            if (trigger === 'hover') {
                htmlElement.onmouseover = () => {
                    this.show();
                };
            }

            if (trigger === 'focus') {
                htmlElement.onfocus = () => {
                    this.show();
                };
            }
        }
    }
}