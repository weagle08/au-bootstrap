define(["require", "exports", "aurelia-framework", "./components/modal/modal"], function (require, exports, aurelia_framework_1, modal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Modal = modal_1.Modal;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName('./components/modal/modal')
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=index.js.map
