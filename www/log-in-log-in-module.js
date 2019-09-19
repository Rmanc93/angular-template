(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-in-log-in-module"],{

/***/ "./src/app/log-in/log-in.module.ts":
/*!*****************************************!*\
  !*** ./src/app/log-in/log-in.module.ts ***!
  \*****************************************/
/*! exports provided: LogInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInModule", function() { return LogInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/log-in/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/log-in/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LogInModule = /** @class */ (function () {
    function LogInModule() {
    }
    LogInModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["InvalidLoginErrorDialog"]],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["InvalidLoginErrorDialog"]]
        })
    ], LogInModule);
    return LogInModule;
}());



/***/ }),

/***/ "./src/app/log-in/login-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/log-in/login-routing.module.ts ***!
  \************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/log-in/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/log-in/login/invalid-login-error-dialog.html":
/*!**************************************************************!*\
  !*** ./src/app/log-in/login/invalid-login-error-dialog.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Invalid Username/Password.</h6>\r\n<div mat-dialog-actions class=\"float-right\">\r\n  <button mdbBtn color=\"primary\" (click)=\"onOkClick()\" class=\"waves-light\" mdbWavesEffect>Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/log-in/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/log-in/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    Registra Timbrature\r\n</mat-toolbar>\r\n\r\n<div class=\"modal-dialog\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header text-center\">\r\n      <h4 class=\"modal-title w-100 font-weight-bold\">Accesso 2</h4>\r\n    </div>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"modal-body mx-3\">\r\n        <div class=\" mb-2\">\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Nome utente\"\r\n              formControlName=\"username\"\r\n              autocomplete=\"off\"\r\n            />\r\n            <mat-icon matPrefix>person</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\" mb-4\">\r\n          <mat-form-field>\r\n            <input\r\n              matInput\r\n              placeholder=\"Password\"\r\n              type=\"password\"\r\n              formControlName=\"password\"\r\n              autocomplete=\"off\"\r\n            />\r\n            <mat-icon matPrefix>lock</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <mat-progress-bar mode=\"indeterminate\" *ngIf=\"logbtnclick\"></mat-progress-bar>\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n        <button mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>\r\n            Accesso\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/log-in/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/log-in/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 60px;\n  z-index: 99; }\n\n.mat-form-field {\n  width: 100%; }\n\n.modal-dialog {\n  margin-top: 5% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluL2xvZ2luL0Y6XFxBbGxpYW56LVByb2plY3RzXFxHSVRcXGFuZ3VsYXItdGVtcGxhdGUvc3JjXFxhcHBcXGxvZy1pblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNBLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9nLWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2d7XHJcbm1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/log-in/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/log-in/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent, InvalidLoginErrorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidLoginErrorDialog", function() { return InvalidLoginErrorDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, loginService, cookieService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.subscriptions = [];
        this.logbtnclick = false;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // document.addEventListener("deviceready", function() {
        //   alert(device.platform);
        //   }, false);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        var subscription1 = this.loginService
            .getToken(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (res) {
            // console.log(res);
            _this.cookieService.set('at', res.access_token, null, '/', null, false);
            return _this.loginService.getUserByUname();
        }))
            .subscribe(function (res) {
            if (res != null) {
                _this.cookieService.set('UName', res.username, null, '/', null, false);
                _this.cookieService.set('type', res.role.name, null, '/', null, false);
                _this.cookieService.set('id', res.id, null, '/', null, false);
                //    this.cookieService.set('lng', 'eng', null, '/', null, false);
                if (res.role.name === 'ROLE_ADMIN') {
                    _this.router.navigate(['./adminstampingview']);
                }
                else {
                    _this.router.navigate(['./stampingview']);
                }
            }
        }, 
        // tslint:disable-next-line: no-use-before-declare
        function () { _this.dialog.open(InvalidLoginErrorDialog); });
        this.subscriptions.push(subscription1);
    };
    // tslint:disable-next-line: use-life-cycle-interface
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (element) {
            element.unsubscribe();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/log-in/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/log-in/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());

var InvalidLoginErrorDialog = /** @class */ (function () {
    function InvalidLoginErrorDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InvalidLoginErrorDialog.prototype.onOkClick = function () {
        this.dialogRef.close();
    };
    InvalidLoginErrorDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'invalid-login-error-dialog',
            template: __webpack_require__(/*! ./invalid-login-error-dialog.html */ "./src/app/log-in/login/invalid-login-error-dialog.html")
        })
        // tslint:disable-next-line: component-class-suffix
        ,
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]])
    ], InvalidLoginErrorDialog);
    return InvalidLoginErrorDialog;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    // isUser(user: any, token: string): Observable<any> {
    //   const body = new HttpParams()
    //     .set('username', user.username)
    //     .set('password', user.password)
    //     .set('access_token', token);
    //   return this.http.post('api/formSubmit', body.toString(),
    //     {
    //       headers: new HttpHeaders()
    //         .set('Content-Type', 'application/x-www-form-urlencoded')
    //     });
    // }
    LoginService.prototype.getToken = function (user) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('grant_type', 'password')
            .set('username', user.username)
            .set('password', user.password);
        // const body = new HttpParams()
        // .set('grant_type', 'client_credentials');
        return this.http.post('oauth/token', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', 'Basic aXN0Q2xpZW50OmlzdFNlY3JldA==')
        });
    };
    LoginService.prototype.getUserByUname = function () {
        return this.http.get('api/owndetails', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'Bearer ' + this.cookieService.get('at'))
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=log-in-log-in-module.js.map