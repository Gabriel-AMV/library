import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/test-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibService {
    constructor() { }
}
TestLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestLibService.ctorParameters = () => [];
/** @nocollapse */ TestLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestLibService_Factory() { return new TestLibService(); }, token: TestLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/test-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-testLib',
                template: `
    <p>
      test-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
TestLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/test-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestLibModule {
}
TestLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestLibComponent],
                imports: [],
                exports: [TestLibComponent]
            },] }
];

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
