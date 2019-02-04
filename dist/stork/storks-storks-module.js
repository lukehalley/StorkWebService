(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storks-storks-module"],{

/***/ "./src/app/storks/stork-create/stork-create.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/storks/stork-create/stork-create.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"tile is-ancestor\">\n    <div class=\"tile is-parent\">\n      <div class=\"tile is-child box\">\n        <p class=\"title\">\n          {{ editMode == true ? 'Edit Your Stork.' : 'Register Your Stork.' }}\n        </p>\n        <form (submit)=\"onSaveStork(formAddStork)\" #formAddStork=\"ngForm\">\n          <div class=\"field\">\n            <label class=\"label\">Unique Stork Code</label>\n            <p class=\"control has-icons-left\">\n              <input\n                class=\"input\"\n                (keydown.space)=\"$event.preventDefault()\"\n                type=\"text\"\n                name=\"inputStorkID\"\n                [ngModel]=\"stork?.stork_code\"\n                required\n                minlength=\"7\"\n                maxlength=\"7\"\n                pattern=\"[A-Z0-9]*\"\n                placeholder=\"STR1234...\"\n              />\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-id-badge\"></i>\n              </span>\n            </p>\n            <p class=\"help\">\n              Must be exactly 7 characters long and only consist of\n              <u>capital</u> letters and numbers.\n              <strong>Example: STR1234</strong>\n            </p>\n          </div>\n          <div class=\"field\">\n            <label class=\"label\">Nickname</label>\n            <p class=\"control has-icons-left has-icons-right\">\n              <input\n                class=\"input\"\n                (keydown.space)=\"$event.preventDefault()\"\n                type=\"text\"\n                name=\"inputStorkNickname\"\n                [ngModel]=\"stork?.nickname\"\n                required\n                minlength=\"4\"\n                maxlength=\"20\"\n                pattern=\"[a-zA-Z0-9 ]*\"\n                placeholder=\"Mona Lisa...\"\n              />\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-tag\"></i>\n              </span>\n            </p>\n            <p class=\"help\">\n              Must be 4 - 20 characters long and only consist of letters and\n              numbers with no spaces.\n              <strong>Example: YourNickname1234</strong>\n            </p>\n          </div>\n          <div class=\"field\">\n            <p class=\"control\">\n              <button\n                class=\"button is-primary\"\n                [disabled]=\"formAddStork.invalid\"\n                type=\"submit\"\n              >\n                {{ editMode == true ? 'Save' : 'Add' }}\n              </button>\n            </p>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"tile is-4 is-vertical is-parent\">\n      <div class=\"tile is-child box\">\n        <p class=\"title\">Your Stork Devices.</p>\n        <app-stork-list></app-stork-list>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/storks/stork-create/stork-create.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/storks/stork-create/stork-create.component.ts ***!
  \***************************************************************/
/*! exports provided: StorkCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkCreateComponent", function() { return StorkCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../storks.service */ "./src/app/storks/storks.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var StorkCreateComponent = /** @class */ (function () {
    function StorkCreateComponent(storksService, route, router) {
        this.storksService = storksService;
        this.route = route;
        this.router = router;
        // Edit Feature
        this.editMode = false;
        this.isLoading = false;
    }
    StorkCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('storkId')) {
                _this.editMode = true;
                _this.storkId = paramMap.get('storkId');
                _this.isLoading = true;
                _this.storksService.getStork(_this.storkId).subscribe(function (storkData) {
                    _this.isLoading = false;
                    _this.stork = {
                        id: storkData._id,
                        stork_code: storkData.stork_code,
                        nickname: storkData.nickname
                    };
                    console.log('GETTING STORK: ' + JSON.stringify(_this.stork));
                });
            }
            else {
                _this.editMode = false;
                _this.storkId = null;
            }
        });
    };
    // Create the button press listener
    StorkCreateComponent.prototype.onSaveStork = function (form) {
        if (form.valid) {
            if (this.editMode) {
                this.storksService.updateStork(this.storkId, form.value.inputStorkID, form.value.inputStorkNickname);
                console.log(this.storkId + form.value.inputStorkID + form.value.inputStorkNickname);
            }
            else {
                this.storksService.addStork(form.value.inputStorkID, form.value.inputStorkNickname);
            }
            form.resetForm();
            this.router.navigate(['/storks/your-storks']);
        }
    };
    StorkCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-stork-create',
            template: __webpack_require__(/*! ./stork-create.component.html */ "./src/app/storks/stork-create/stork-create.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storks_service__WEBPACK_IMPORTED_MODULE_2__["StorksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StorkCreateComponent);
    return StorkCreateComponent;
}());



/***/ }),

/***/ "./src/app/storks/stork-list/stork-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/storks/stork-list/stork-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"panel\">\n  <div *ngIf=\"userIsAuthenticated; else loggedOut\">\n    <div class=\"card\" *ngFor=\"let stork of storks\">\n      <div class=\"card-content\">\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <figure class=\"image is-48x48\">\n              <img\n                src=\"https://bulma.io/images/placeholders/96x96.png\"\n                alt=\"Placeholder image\"\n              />\n            </figure>\n          </div>\n          <div class=\"media-content\">\n            <p class=\"title is-4\">{{ stork.nickname }}</p>\n            <p class=\"subtitle is-6\">{{ stork.stork_code }}</p>\n          </div>\n        </div>\n        <div class=\"content\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />\n          <time datetime=\"2016-1-1\">11:09 PM - 1 Jan 2016</time>\n        </div>\n      </div>\n      <footer class=\"card-footer\">\n        <a class=\"card-footer-item\" [routerLink]=\"['/storks/edit', stork.id]\"\n          >Edit</a\n        >\n        <a class=\"card-footer-item\" (click)=\"onDelete(stork.id)\">Delete</a>\n      </footer>\n    </div>\n  </div>\n  <ng-template #loggedOut>\n    Please <strong>Login</strong> To See Your Storks\n  </ng-template>\n</nav>\n"

/***/ }),

/***/ "./src/app/storks/stork-list/stork-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/storks/stork-list/stork-list.component.ts ***!
  \***********************************************************/
/*! exports provided: StorkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkListComponent", function() { return StorkListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storks.service */ "./src/app/storks/storks.service.ts");




var StorkListComponent = /** @class */ (function () {
    // Using Angular dependency injection
    function StorkListComponent(storksService, authService) {
        this.storksService = storksService;
        this.authService = authService;
        this.storks = [];
    }
    StorkListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storksSub = this.storksService
            .getStorksUpdateListener()
            .subscribe(function (storks) {
            _this.storks = storks;
        });
        this.userId = this.authService.getUserId();
        this.storksService.getStorks(this.userId);
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
            _this.userId = _this.authService.getUserId();
            if (isAuthenticated) {
                _this.storksService.getStorks(_this.userId);
            }
            else {
            }
        });
    };
    StorkListComponent.prototype.ngOnDestroy = function () {
        this.storksSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    StorkListComponent.prototype.onDelete = function (storkId) {
        this.storksService.deleteStork(storkId);
    };
    StorkListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-stork-list',
            template: __webpack_require__(/*! ./stork-list.component.html */ "./src/app/storks/stork-list/stork-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storks_service__WEBPACK_IMPORTED_MODULE_3__["StorksService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], StorkListComponent);
    return StorkListComponent;
}());



/***/ }),

/***/ "./src/app/storks/stork-routing-module.ts":
/*!************************************************!*\
  !*** ./src/app/storks/stork-routing-module.ts ***!
  \************************************************/
/*! exports provided: StorkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkRoutingModule", function() { return StorkRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stork_list_stork_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stork-list/stork-list.component */ "./src/app/storks/stork-list/stork-list.component.ts");
/* harmony import */ var _stork_create_stork_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stork-create/stork-create.component */ "./src/app/storks/stork-create/stork-create.component.ts");






var routes = [
    {
        path: 'your-storks',
        component: _stork_list_stork_list_component__WEBPACK_IMPORTED_MODULE_4__["StorkListComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'register-stork',
        component: _stork_create_stork_create_component__WEBPACK_IMPORTED_MODULE_5__["StorkCreateComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'edit/:storkId',
        component: _stork_create_stork_create_component__WEBPACK_IMPORTED_MODULE_5__["StorkCreateComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }
];
var StorkRoutingModule = /** @class */ (function () {
    function StorkRoutingModule() {
    }
    StorkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StorkRoutingModule);
    return StorkRoutingModule;
}());



/***/ }),

/***/ "./src/app/storks/storks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/storks/storks.module.ts ***!
  \*****************************************/
/*! exports provided: StorksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorksModule", function() { return StorksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stork_create_stork_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stork-create/stork-create.component */ "./src/app/storks/stork-create/stork-create.component.ts");
/* harmony import */ var _stork_list_stork_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stork-list/stork-list.component */ "./src/app/storks/stork-list/stork-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stork_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stork-routing-module */ "./src/app/storks/stork-routing-module.ts");








var StorksModule = /** @class */ (function () {
    function StorksModule() {
    }
    StorksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_stork_create_stork_create_component__WEBPACK_IMPORTED_MODULE_2__["StorkCreateComponent"], _stork_list_stork_list_component__WEBPACK_IMPORTED_MODULE_3__["StorkListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _stork_routing_module__WEBPACK_IMPORTED_MODULE_7__["StorkRoutingModule"]]
        })
    ], StorksModule);
    return StorksModule;
}());



/***/ }),

/***/ "./src/app/storks/storks.service.ts":
/*!******************************************!*\
  !*** ./src/app/storks/storks.service.ts ***!
  \******************************************/
/*! exports provided: StorksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorksService", function() { return StorksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/storks';
var StorksService = /** @class */ (function () {
    function StorksService(http, router) {
        this.http = http;
        this.router = router;
        this.storks = [];
        this.storksUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    StorksService.prototype.getStorks = function (userId) {
        var _this = this;
        this.http
            .get(BACKEND_URL + '/' + userId)
            // Coverting the Storks we get back to match the formating of them in the MongoDB
            // database - specifically the _id tag using a new map
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (storkData) {
            return storkData.storks.map(function (stork) {
                return {
                    stork_code: stork.stork_code,
                    nickname: stork.nickname,
                    id: stork._id,
                    ownerId: stork.ownerId
                };
            });
        }))
            .subscribe(function (storks) {
            _this.storks = storks;
            _this.storksUpdated.next(_this.storks.slice());
        });
    };
    // This might not be working because its using the same url as get all above
    StorksService.prototype.getStork = function (id) {
        // return { ...this.storks.find(s => s.id === id) };
        return this.http.get(BACKEND_URL + '/one/' + id);
    };
    StorksService.prototype.getStorksUpdateListener = function () {
        return this.storksUpdated.asObservable();
    };
    StorksService.prototype.addStork = function (stork_code, nickname) {
        var _this = this;
        var stork = {
            id: null,
            stork_code: stork_code,
            nickname: nickname
        };
        this.http
            .post(BACKEND_URL, stork)
            .subscribe(function (responseData) {
            var id = responseData.storkId;
            stork.id = id;
            // Only pushing if the response is sucessfull.
            _this.storks.push(stork);
            _this.storksUpdated.next(_this.storks.slice());
        });
    };
    StorksService.prototype.updateStork = function (id, stork_code, nickname) {
        var _this = this;
        var stork = {
            id: id,
            stork_code: stork_code,
            nickname: nickname
        };
        this.http.put(BACKEND_URL + '/' + id, stork).subscribe(function (response) {
            var updatedStorks = _this.storks.slice();
            var oldStorkIndex = updatedStorks.findIndex(function (s) { return s.id === stork.id; });
            updatedStorks[oldStorkIndex] = stork;
            _this.storks = updatedStorks;
            _this.storksUpdated.next(_this.storks.slice());
        });
    };
    StorksService.prototype.deleteStork = function (storkId) {
        var _this = this;
        this.http.delete(BACKEND_URL + '/' + storkId).subscribe(function () {
            // Updating the stork list after a delete occurs.
            var updatedStorks = _this.storks.filter(function (stork) { return stork.id !== storkId; });
            _this.storks = updatedStorks;
            _this.storksUpdated.next(_this.storks.slice());
        });
    };
    StorksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], StorksService);
    return StorksService;
}());



/***/ })

}]);
//# sourceMappingURL=storks-storks-module.js.map