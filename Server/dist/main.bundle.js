webpackJsonp([2,6],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONSTANTS; });
var CONSTANTS = (function () {
    function CONSTANTS() {
        this.SERVER_URL = 'http://35.230.159.160:8080';
    }
    return CONSTANTS;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(http, router, cons) {
        this.http = http;
        this.router = router;
        this.cons = cons;
        this.login_result = false;
        this.login = true;
        this.register_result = false;
        this.register_result_data = "";
        this.register_result_data_show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnChanges = function () {
    };
    HomeComponent.prototype.register = function () {
        this.login = false;
        this.login_result = false;
    };
    HomeComponent.prototype.loginFunction = function () {
        this.login = true;
        this.login_result = false;
    };
    HomeComponent.prototype.submitUser = function (user, pass) {
        var _this = this;
        this.register_result = false;
        return this.http.post(this.cons.SERVER_URL + '/user_management/login/', { 'username': user, 'password': pass }).subscribe(function (res) {
            if (!res.success) {
                _this.login_result = true;
            }
            else {
                localStorage.setItem('login_data', JSON.stringify(res));
                _this.router.navigate(['all-tasks/']);
                _this.login_result = false;
            }
        });
    };
    HomeComponent.prototype.registerUser = function (user, pass, email, dept, desig) {
        var _this = this;
        return this.http.post(this.cons.SERVER_URL + '/user_management/create-user/', { 'username': user, 'password': pass, 'email': email, 'department': dept, 'designation': desig }).subscribe(function (res) {
            if (res.success) {
                _this.register_result = true;
                _this.login = true;
            }
            else {
                _this.register_result_data_show = true;
                _this.register_result_data = res['message'];
                _this.login = false;
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(312),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* CONSTANTS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* CONSTANTS */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all-tasks/all-tasks.module": [
		599,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 232;


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(250);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(310),
        styles: [__webpack_require__(303)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__constants__["a" /* CONSTANTS */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'all-tasks',
        loadChildren: './all-tasks/all-tasks.module#AllTasksModule'
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(311),
        styles: [__webpack_require__(304)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(http, router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem("login_data") == null) {
            this.router.navigate(['/']);
        }
        else {
            this.login_data = JSON.parse(localStorage.getItem("login_data"));
            this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Token ' + this.login_data.token });
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(313),
        styles: [__webpack_require__(306)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".login-form-parent .form-control {\n  min-height: 41px;\n  background: #fff;\n  box-shadow: none !important;\n  border-color: #e3e3e3; }\n\n.login-form-parent .form-control:focus {\n  border-color: #70c5c0; }\n\n.login-form-parent .form-control, .login-form-parent .btn {\n  border-radius: 2px; }\n\n.login-form-parent .login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 100px 0 30px; }\n\n.login-form-parent .login-form form {\n  color: #7a7a7a;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  font-size: 13px;\n  background: #ececec;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n  position: relative; }\n\n.login-form-parent .login-form h2 {\n  font-size: 22px;\n  margin: 35px 0 25px; }\n\n.login-form-parent .login-form .avatar {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -50px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #70c5c0;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); }\n\n.login-form-parent .login-form .avatar img {\n  width: 100%; }\n\n.login-form-parent .login-form input[type=\"checkbox\"] {\n  margin-top: 2px; }\n\n.login-form-parent .login-form .btn {\n  font-size: 16px;\n  font-weight: bold;\n  background: #70c5c0;\n  border: none;\n  margin-bottom: 20px; }\n\n.login-form-parent .login-form .btn:hover, .login-form-parent .login-form .btn:focus {\n  background: #50b8b3;\n  outline: none !important; }\n\n.login-form-parent .login-form a {\n  color: #535353;\n  text-decoration: underline; }\n\n.login-form-parent .login-form a:hover {\n  text-decoration: none; }\n\n.login-form-parent .login-form form a {\n  color: #7a7a7a;\n  text-decoration: none; }\n\n.login-form-parent .login-form form a:hover {\n  text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <span>Copyright &copy; 2018 @saba wasim</span>\n</div>"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form-parent\">\n  <div class=\"alert alert-danger\" *ngIf=\"login_result\">\n    <strong>Login Failed! </strong> Invalid Username or Password\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"register_result\">\n    <strong>Registered! </strong> Now you can login\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"register_result_data_show\">\n    <strong>Error! </strong>{{register_result_data}}\n  </div>\n<div class=\"login-form\" *ngIf=\"login\">\n  <form>\n  <div class=\"avatar\">\n    <img src=\"/assets/favicon.png\" alt=\"todo app\">\n  </div>\n  \n      <h2 class=\"text-center\">User Login</h2>   \n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" #username required=\"required\">\n      </div>\n  <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" name=\"password\" #password placeholder=\"Password\" required=\"required\">\n      </div>        \n      <div class=\"form-group\">\n          <button type=\"submit\"  (click)=\"submitUser(username.value,password.value)\"class=\"btn btn-primary btn-lg btn-block\">Sign in</button>\n      </div>\n \n  </form>\n  <p style= \"margin-left:0%\" class=\"text-center small\"> <a (click)=\"register()\">Don't have an account? </a></p>\n</div>\n\n<div class=\"login-form\" *ngIf=\"!login\">\n  <form>\n  <div class=\"avatar\">\n    <img src=\"/assets/favicon.png\" alt=\"todo app\">\n  </div>\n  \n      <h2 class=\"text-center\">Register</h2>   \n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" #username required=\"required\">\n      </div>\n  <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" name=\"password\" #password placeholder=\"Password\" required=\"required\">\n      </div>    \n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" name=\"email\" #email placeholder=\"Email\" required=\"required\">\n    </div>  \n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"department\" #department placeholder=\"Department\" required=\"required\">\n  </div>   \n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" name=\"designation\" #designation placeholder=\"Designation\" required=\"required\">\n</div>        \n      <div class=\"form-group\">\n          <button type=\"submit\"  (click)=\"registerUser(username.value,password.value,email.value,department.value,designation.value)\"class=\"btn btn-primary btn-lg btn-block\">Register</button>\n      </div>\n \n  </form>\n  <p style= \"margin-left:0%\" class=\"text-center small\"> <a (click)=\"loginFunction()\">Already Registered </a></p>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button \n    class=\"navbar-toggler navbar-toggler-right\" \n    type=\"button\" \n    data-toggle=\"collapse\" \n    data-target=\"#navbar-main\" \n    aria-controls=\"navbar-main\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a \n    class=\"navbar-brand\" \n    routerLink=\"/\"\n  >\n    <img src=\"favicon.ico\" style=\"height:50px\"/> ToDo App\n  </a>\n  <div\n    class=\"collapse navbar-collapse\"\n    id=\"navbar-main\"\n  >\n    <ul class=\"navbar-nav mr-auto\">\n      \n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/all-tasks\"\n        >\n          All Tasks\n        </a>\n      </li>\n      \n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(233);


/***/ })

},[595]);
//# sourceMappingURL=main.bundle.js.map