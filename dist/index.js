define(["require", "exports", "aurelia-framework", "./components/modal/modal"], function (require, exports, aurelia_framework_1, modal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = modal_1.Modal;
    exports.ModalEvents = modal_1.ModalEvents;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-header/modal-header.html'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-body/modal-body.html'),
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal-footer/modal-footer.html')
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
