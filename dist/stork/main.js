(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./storks/storks.module": [
		"./src/app/storks/storks.module.ts",
		"storks-storks-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_stork_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/stork-login.component */ "./src/app/auth/login/stork-login.component.ts");
/* harmony import */ var _auth_signup_stork_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/stork-sign-up.component */ "./src/app/auth/signup/stork-sign-up.component.ts");






var routes = [
    { path: '', component: _auth_login_stork_login_component__WEBPACK_IMPORTED_MODULE_4__["StorkLoginComponent"] },
    { path: 'login', component: _auth_login_stork_login_component__WEBPACK_IMPORTED_MODULE_4__["StorkLoginComponent"] },
    { path: 'sign-up', component: _auth_signup_stork_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["StorkSignUpComponent"] },
    {
        path: 'storks',
        loadChildren: './storks/storks.module#StorksModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  margin-top: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    // When the app is first loaded this is ran.
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toolbar/header.component */ "./src/app/toolbar/header.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _toolbar_header_component__WEBPACK_IMPORTED_MODULE_9__["StorkHeaderComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_stork_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/stork-login.component */ "./src/app/auth/login/stork-login.component.ts");
/* harmony import */ var _signup_stork_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/stork-sign-up.component */ "./src/app/auth/signup/stork-sign-up.component.ts");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_login_stork_login_component__WEBPACK_IMPORTED_MODULE_5__["StorkLoginComponent"], _signup_stork_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["StorkSignUpComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/users';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Get the token
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    // Get the CURRENT auth status of the user no matter what page they are on.
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.createUser = function (fname, sname, address, phoneNumber, username, email, password, plan) {
        var _this = this;
        var user = {
            fname: fname,
            sname: sname,
            address: address,
            phoneNumber: phoneNumber,
            username: username,
            email: email,
            password: password,
            plan: plan
        };
        this.http.post(BACKEND_URL + '/signup', user).subscribe(function () {
            _this.authStatusListener.next(true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http
            // Getting the toke, expiry time and userId from the response:
            .post(BACKEND_URL + '/login', authData)
            .subscribe(function (response) {
            // Getting the token from the response data
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiredInDuration = response.expiresIn;
                _this.setAuthTimer(expiredInDuration);
                // Informing the Stork app that the user is logged in
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                var currentDate = new Date();
                var experationDate = new Date(currentDate.getTime() + expiredInDuration * 1000);
                _this.saveAuthData(token, experationDate, _this.userId);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        // Send the user back to the login screen after logging out:
        this.router.navigate(['/login']);
        // Clear the local storage of the user token and experation date of that token:
        this.clearAuthData();
        // Clear userId on logout
        this.userId = null;
        // Clear timeout when we logout, manually or programmatically:
        clearTimeout(this.tokenTimer);
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (authInformation != null) {
            // Verify the experationDate
            var now = new Date();
            // Getting the differnce between the experationDate and the current time:
            var expiresIn = authInformation.experationDate.getTime() - now.getTime();
            // if expiresIn is greater than 0 its in the future. If its 0 or less its right now of in the past.
            if (expiresIn > 0) {
                this.token = authInformation.token;
                this.isAuthenticated = true;
                this.userId = authInformation.userId;
                this.setAuthTimer(expiresIn / 1000);
                this.authStatusListener.next(true);
            }
        }
        else {
            return;
        }
    };
    // Setting the token timeout
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log('Setting Timer:' + duration);
        // this.logout will be called after 1 hour.
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    // Storing the token, experation date and userId to the users local storage.
    AuthService.prototype.saveAuthData = function (token, experationDate, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('experation', experationDate.toISOString());
        localStorage.setItem('userId', userId);
    };
    // Storing the token, experation date and userId to the users local storage.
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('experation');
        localStorage.removeItem('userId');
    };
    // Getting the token, experation date and userId to the users local storage.
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var experationDate = localStorage.getItem('experation');
        var userId = localStorage.getItem('userId');
        if (!token || !experationDate) {
            return;
        }
        else {
            return {
                token: token,
                experationDate: new Date(experationDate),
                userId: userId
            };
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/stork-login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/login/stork-login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container has-text-centered\">\n      <div class=\"column is-4 is-offset-4\">\n        <h3 class=\"title has-text-grey\">Login</h3>\n        <p class=\"subtitle has-text-grey\">Please Login to Proceed.</p>\n        <div class=\"box\">\n          <form (submit)=\"onLogin(formLogin)\" #formLogin=\"ngForm\">\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-large\"\n                  type=\"email\"\n                  ngModel\n                  placeholder=\"Your Email\"\n                  autofocus=\"\"\n                  name=\"inputUserLoginEmail\"\n                  required\n                />\n              </div>\n            </div>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-large\"\n                  type=\"password\"\n                  ngModel\n                  placeholder=\"Your Password\"\n                  name=\"inputUserLoginPassword\"\n                  required\n                />\n              </div>\n            </div>\n            <div class=\"field\">\n              <label class=\"checkbox\">\n                <input type=\"checkbox\" /> Remember Me\n              </label>\n            </div>\n            <button\n              type=\"submit\"\n              [disabled]=\"formLogin.invalid\"\n              class=\"button is-block is-info is-large is-fullwidth\"\n            >\n              Login\n            </button>\n          </form>\n        </div>\n      </div>\n      <p class=\"has-text-grey\">\n        <a [routerLink]=\"['/sign-up']\">Don't have an account? Sign Up</a>\n      </p>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/auth/login/stork-login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/login/stork-login.component.ts ***!
  \*****************************************************/
/*! exports provided: StorkLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkLoginComponent", function() { return StorkLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StorkLoginComponent = /** @class */ (function () {
    function StorkLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    StorkLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            // Navigate to the list of storks after login
            _this.router.navigate(['/storks/your-storks']);
        });
    };
    StorkLoginComponent.prototype.onLogin = function (form) {
        if (form.valid) {
            this.authService.login(form.value.inputUserLoginEmail, form.value.inputUserLoginPassword);
        }
        else {
            console.log('Login Failed!');
            return;
        }
    };
    StorkLoginComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    StorkLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./stork-login.component.html */ "./src/app/auth/login/stork-login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StorkLoginComponent);
    return StorkLoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/stork-sign-up.component.html":
/*!**********************************************************!*\
  !*** ./src/app/auth/signup/stork-sign-up.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container \">\n      <div class=\"column is-8 is-offset-2\">\n        <h3 class=\"title has-text-grey has-text-centered\">Sign Up.</h3>\n        <p class=\"subtitle has-text-grey has-text-centered\">\n          Create A Stork Account.\n        </p>\n        <div class=\"box\">\n          <form (submit)=\"onSignUp(formSignup)\" #formSignup=\"ngForm\">\n            <label class=\"label\">Username</label>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-medium\"\n                  ngModel\n                  type=\"text\"\n                  autofocus=\"\"\n                  placeholder=\"Username\"\n                  name=\"inputUserSignUpUsername\"\n                  required\n                />\n              </div>\n            </div>\n            <label class=\"label\">Email</label>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-medium\"\n                  ngModel\n                  type=\"email\"\n                  placeholder=\"Email\"\n                  name=\"inputUserLoginEmail\"\n                  required\n                />\n              </div>\n            </div>\n            <label class=\"label\">Password</label>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-medium\"\n                  ngModel\n                  type=\"password\"\n                  placeholder=\"Password\"\n                  name=\"inputUserLoginPassword\"\n                  required\n                />\n              </div>\n            </div>\n            <hr class=\"hr\" style=\"margin: 10;\" />\n            <label class=\"label\">Your Name</label>\n            <div class=\"field is-horizontal\">\n              <div class=\"field-body\">\n                <div class=\"field\">\n                  <div class=\"control\">\n                    <input\n                      class=\"input is-medium\"\n                      ngModel\n                      type=\"text\"\n                      placeholder=\"First Name\"\n                      name=\"inputUserSignUpFName\"\n                      required\n                    />\n                  </div>\n                </div>\n                <div class=\"field\">\n                  <div class=\"control\">\n                    <input\n                      class=\"input is-medium\"\n                      ngModel\n                      type=\"text\"\n                      placeholder=\"Second Name\"\n                      name=\"inputUserSignUpSName\"\n                      required\n                    />\n                  </div>\n                </div>\n              </div>\n            </div>\n            <label class=\"label\">Address</label>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-medium\"\n                  ngModel\n                  type=\"text\"\n                  placeholder=\"Address\"\n                  name=\"inputUserSignUpAddress\"\n                  required\n                />\n              </div>\n            </div>\n            <label class=\"label\">Phone Number</label>\n            <div class=\"field\">\n              <div class=\"control\">\n                <input\n                  class=\"input is-medium\"\n                  ngModel\n                  type=\"tel\"\n                  placeholder=\"Phone Number\"\n                  name=\"inputUserSignUpPhoneNumber\"\n                />\n              </div>\n            </div>\n            <p class=\"control\">\n              <button\n                [disabled]=\"formSignup.invalid\"\n                type=\"submit\"\n                class=\"button is-block is-info is-medium is-fullwidth\"\n              >\n                Sign Up\n              </button>\n            </p>\n          </form>\n        </div>\n        <p class=\"has-text-grey has-text-centered\">\n          <a [routerLink]=\"['/login']\">Already have an account? Login</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/auth/signup/stork-sign-up.component.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/signup/stork-sign-up.component.ts ***!
  \********************************************************/
/*! exports provided: StorkSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkSignUpComponent", function() { return StorkSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var StorkSignUpComponent = /** @class */ (function () {
    function StorkSignUpComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    StorkSignUpComponent.prototype.ngOnInit = function () {
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            // Only go to the login page if the signup is valid.
        });
    };
    StorkSignUpComponent.prototype.onSignUp = function (form) {
        if (form.invalid) {
            return;
        }
        else {
            this.authService.createUser(form.value.inputUserSignUpFName, form.value.inputUserSignUpSName, form.value.inputUserSignUpAddress, form.value.inputUserSignUpPhoneNumber, form.value.inputUserSignUpUsername, form.value.inputUserLoginEmail, form.value.inputUserLoginPassword, 'free');
        }
    };
    StorkSignUpComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    StorkSignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./stork-sign-up.component.html */ "./src/app/auth/signup/stork-sign-up.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StorkSignUpComponent);
    return StorkSignUpComponent;
}());



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);


// ES6 Modules or TypeScript

var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
            var errorMessage = 'An Unknown Error Occured!';
            var errorComment = 'Please contact support!';
            if (error.error.message) {
                // If the error response has a message set it.
                errorMessage = error.error.message;
            }
            if (error.error.comment) {
                // If the error response has a message set it.
                errorComment = error.error.comment;
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: errorMessage,
                text: errorComment,
                type: 'error',
                confirmButtonText: 'Ok'
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/toolbar/header.component.html":
/*!***********************************************!*\
  !*** ./src/app/toolbar/header.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a [routerLink]=\"['/']\" class=\"navbar-item\">\n      <img src=\"../../assets/stork-web-logo.png\" width=\"112\" height=\"28\" />\n    </a>\n\n    <a\n      role=\"button\"\n      class=\"navbar-burger burger\"\n      aria-label=\"menu\"\n      aria-expanded=\"false\"\n      data-target=\"navbarBasicExample\"\n    >\n      <span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a\n        *ngIf=\"userIsAuthenticated\"\n        [routerLink]=\"['/storks/your-storks']\"\n        class=\"navbar-item\"\n      >\n        All Storks\n      </a>\n\n      <a\n        *ngIf=\"userIsAuthenticated\"\n        [routerLink]=\"['/storks/register-stork']\"\n        class=\"navbar-item\"\n      >\n        Register A Stork\n      </a>\n    </div>\n\n    <div class=\"navbar-end\">\n      <div class=\"navbar-item\">\n        <div class=\"buttons\">\n          <a\n            *ngIf=\"!userIsAuthenticated\"\n            [routerLink]=\"['/sign-up']\"\n            class=\"button is-primary\"\n          >\n            <strong>Sign up</strong>\n          </a>\n          <a\n            *ngIf=\"!userIsAuthenticated\"\n            [routerLink]=\"['/login']\"\n            class=\"button is-primary\"\n          >\n            <strong>Log in</strong>\n          </a>\n          <a\n            *ngIf=\"userIsAuthenticated\"\n            (click)=\"onLogout()\"\n            class=\"button is-primary\"\n          >\n            <strong>Logout</strong>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/toolbar/header.component.ts":
/*!*********************************************!*\
  !*** ./src/app/toolbar/header.component.ts ***!
  \*********************************************/
/*! exports provided: StorkHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorkHeaderComponent", function() { return StorkHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var StorkHeaderComponent = /** @class */ (function () {
    function StorkHeaderComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    StorkHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    StorkHeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    StorkHeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    StorkHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/toolbar/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], StorkHeaderComponent);
    return StorkHeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://87.44.18.111:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/stork-web-service/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map