var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-framework", "../../utils/EventUtils", "../ComponentBase"], function (require, exports, aurelia_dependency_injection_1, aurelia_framework_1, EventUtils_1, ComponentBase_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalEvents = {
        SHOW: 'show',
        SHOWN: 'shown',
        HIDE: 'hide',
        HIDDEN: 'hidden'
    };
    let Modal = class Modal extends ComponentBase_1.ComponentBase {
        constructor(element) {
            super(element);
        }
        attached() {
            if (this.options != null) {
                this.jElement.modal(this.options);
            }
            this.jElement.on('show.bs.modal', () => {
                EventUtils_1.EventUtils.fireEvent(exports.ModalEvents.SHOW, this._domElement);
            });
            this.jElement.on('shown.bs.modal', () => {
                EventUtils_1.EventUtils.fireEvent(exports.ModalEvents.SHOWN, this._domElement);
            });
            this.jElement.on('hide.bs.modal', () => {
                EventUtils_1.EventUtils.fireEvent(exports.ModalEvents.HIDE, this._domElement);
            });
            this.jElement.on('hidden.bs.modal', () => {
                EventUtils_1.EventUtils.fireEvent(exports.ModalEvents.HIDDEN, this._domElement);
            });
        }
        show() {
            this.jElement.modal('show');
        }
        hide() {
            this.jElement.modal('hide');
        }
        toggle() {
            this.jElement.modal('toggle');
        }
        handleUpdate() {
            this.jElement.modal('handleUpdate');
        }
        dispose() {
            this.jElement.modal('dispose');
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], Modal.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Modal.prototype, "options", void 0);
    Modal = __decorate([
        aurelia_dependency_injection_1.autoinject,
        __metadata("design:paramtypes", [Element])
    ], Modal);
    exports.Modal = Modal;
});

//# sourceMappingURL=modal.js.map
