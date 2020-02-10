(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['test-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/test-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibService = /** @class */ (function () {
        function TestLibService() {
        }
        TestLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TestLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ TestLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TestLibService_Factory() { return new TestLibService(); }, token: TestLibService, providedIn: "root" });
        return TestLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/test-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibComponent = /** @class */ (function () {
        function TestLibComponent() {
        }
        /**
         * @return {?}
         */
        TestLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        TestLibComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-testLib',
                        template: "\n    <p>\n      test-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        TestLibComponent.ctorParameters = function () { return []; };
        return TestLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/test-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestLibModule = /** @class */ (function () {
        function TestLibModule() {
        }
        TestLibModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TestLibComponent],
                        imports: [],
                        exports: [TestLibComponent]
                    },] }
        ];
        return TestLibModule;
    }());

    exports.TestLibComponent = TestLibComponent;
    exports.TestLibModule = TestLibModule;
    exports.TestLibService = TestLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-lib.umd.js.map
