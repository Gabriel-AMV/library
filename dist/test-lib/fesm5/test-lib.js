import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/test-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestLibService = /** @class */ (function () {
    function TestLibService() {
    }
    TestLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestLibService_Factory() { return new TestLibService(); }, token: TestLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [TestLibComponent],
                    imports: [],
                    exports: [TestLibComponent]
                },] }
    ];
    return TestLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: test-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TestLibComponent, TestLibModule, TestLibService };
//# sourceMappingURL=test-lib.js.map
