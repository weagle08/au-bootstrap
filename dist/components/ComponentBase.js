define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ComponentBase {
        constructor(element) {
            this._domElement = element;
        }
        get jElement() {
            return $(this._domElement.firstElementChild);
        }
    }
    exports.ComponentBase = ComponentBase;
});

//# sourceMappingURL=ComponentBase.js.map
