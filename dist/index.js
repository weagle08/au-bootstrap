define(["require", "exports", "aurelia-framework", "./components/modal/modal", "./components/modal/modal-body/modal-body", "./components/modal/modal-footer/modal-footer", "./components/modal/modal-header/modal-header"], function (require, exports, aurelia_framework_1, modal_1, modal_body_1, modal_footer_1, modal_header_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = modal_1.Modal;
    exports.ModalBody = modal_body_1.ModalBody;
    exports.ModalFooter = modal_footer_1.ModalFooter;
    exports.ModalHeader = modal_header_1.ModalHeader;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-header/modal-header'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-body/modal-body'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-footer/modal-footer')
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
