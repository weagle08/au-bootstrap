define(["require", "exports", "aurelia-framework", "./components/modal/modal", "./components/modal/modal-body/modal-body", "./components/modal/modal-footer/modal-footer"], function (require, exports, aurelia_framework_1, modal_1, modal_body_1, modal_footer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = modal_1.Modal;
    exports.ModalBody = modal_body_1.ModalBody;
    exports.ModalFooter = modal_footer_1.ModalFooter;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-header/modal-header.html'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-body/modal-body'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-footer/modal-footer')
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
