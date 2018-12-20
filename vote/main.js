(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/login/login.component */ "./src/app/module/login/login.component.ts");
/* harmony import */ var _module_setup_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/setup/setup.component */ "./src/app/module/setup/setup.component.ts");
/* harmony import */ var _module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/page-not-found/page-not-found.component */ "./src/app/module/page-not-found/page-not-found.component.ts");
/* harmony import */ var _module_voting_voting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/voting/voting.component */ "./src/app/module/voting/voting.component.ts");
/* harmony import */ var _module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/dashboard/dashboard.component */ "./src/app/module/dashboard/dashboard.component.ts");
/* harmony import */ var _module_login_login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/login/login.guard */ "./src/app/module/login/login.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _module_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'setup', component: _module_setup_setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"], canActivate: [_module_login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: 'voting', component: _module_voting_voting_component__WEBPACK_IMPORTED_MODULE_5__["VotingComponent"], canActivate: [_module_login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: 'dashboard', component: _module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_module_login_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: '**', component: _module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1016px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvUHJvamVjdHMvYnNzL2Jzcy12b3Rpbmcvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0U7SUFDRSxhQUFZLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEwMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk3MHB4O1xuICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _module_voting_voting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/voting/voting.component */ "./src/app/module/voting/voting.component.ts");
/* harmony import */ var _module_setup_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/setup/setup.component */ "./src/app/module/setup/setup.component.ts");
/* harmony import */ var _module_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module/login/login.component */ "./src/app/module/login/login.component.ts");
/* harmony import */ var _module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module/dashboard/dashboard.component */ "./src/app/module/dashboard/dashboard.component.ts");
/* harmony import */ var _module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./module/page-not-found/page-not-found.component */ "./src/app/module/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _module_login_login_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./module/login/login.guard */ "./src/app/module/login/login.guard.ts");
/* harmony import */ var _module_login_login_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./module/login/login.service */ "./src/app/module/login/login.service.ts");
/* harmony import */ var _module_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./module/confirm-dialog/confirm-dialog.component */ "./src/app/module/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _shared_order_by__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/order-by */ "./src/app/shared/order-by.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _module_voting_voting_component__WEBPACK_IMPORTED_MODULE_8__["VotingComponent"],
                _module_setup_setup_component__WEBPACK_IMPORTED_MODULE_9__["SetupComponent"],
                _module_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _module_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _module_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _module_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDialogComponent"],
                _shared_order_by__WEBPACK_IMPORTED_MODULE_21__["OrderBy"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase, 'bss-voting'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            entryComponents: [
                _module_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDialogComponent"]
            ],
            providers: [
                _module_login_login_service__WEBPACK_IMPORTED_MODULE_19__["LoginService"],
                _module_login_login_guard__WEBPACK_IMPORTED_MODULE_18__["LoginGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/login/login.service */ "./src/app/module/login/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppService = /** @class */ (function () {
    function AppService(db, auth, router) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.sectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentSectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.voterListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.voterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.auth.authStateSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (v) { return !!v; }))
            .subscribe(function (user) {
            _this.db.collection("config").snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
                return actions
                    .map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(); }))
                .subscribe(function (value) {
                if (Array.isArray(value)) {
                    var config_1 = null;
                    value.forEach(function (v) {
                        config_1 = __assign({}, config_1);
                        config_1[v.$key] = v;
                    });
                    _this.configSubject.next(config_1);
                }
            });
            _this.sectionCollection = _this.db.collection('sections', function (ref) { return ref.orderBy('order'); });
            _this.sectionCollection.snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
                return actions
                    .map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            }))
                .subscribe(function (value) {
                for (var i = 0; i < value.length; i++) {
                    if (!value[i].finished) {
                        _this.currentSectionSubject.next(value[i]);
                        break;
                    }
                }
                _this.sectionSubject.next(value);
            });
            _this.db.collection('voters').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
                return actions
                    .map(function (action) { return (__assign({ $key: action.payload.doc.id }, action.payload.doc.data())); });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }))
                .subscribe(function (value) {
                _this.voterListSubject.next(value);
            });
            _this.voterDocument = _this.db.doc("voters/" + user.email);
            _this.voterDocument.valueChanges()
                .subscribe(function (value) {
                _this.voterSubject.next(value);
            }, function (error1) {
                _this.auth.signOut().then(function () {
                    _this.router.navigate(['/login']).then();
                });
            });
        });
    }
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _module_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/module/confirm-dialog/confirm-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/module/confirm-dialog/confirm-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.title}}</h2>\n<mat-dialog-content>{{data.content}}</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/module/confirm-dialog/confirm-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/module/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        if (data === void 0) { data = { title: 'Title', content: 'Dialog body' }; }
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/module/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/module/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/module/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/module/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@.disabled]=\"true\" *ngFor=\"let voteItem of voteItems\">\n  <mat-tab-group>\n    <mat-tab label=\"Phần {{voteItem.title}}\">\n      <table mat-table [dataSource]=\"voteItem.content\">\n        <!-- # Column -->\n        <ng-container matColumnDef=\"index\">\n          <th mat-header-cell *matHeaderCellDef> No.</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.index}} </td>\n        </ng-container>\n\n        <!-- title Column -->\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef> Tiết mục</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n\n        <!-- type Column -->\n        <ng-container matColumnDef=\"subtitle\">\n          <th mat-header-cell *matHeaderCellDef> Thông tin</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.subtitle}} </td>\n        </ng-container>\n\n        <!-- votes Column -->\n        <ng-container matColumnDef=\"voteCount\">\n          <th mat-header-cell *matHeaderCellDef> Lượt vote</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.voteCount}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </mat-tab>\n    <mat-tab *ngFor=\"let t of voteItem.content\" label=\"{{t.title}}\">\n      <table mat-table [dataSource]=\"getVoterDataSource(t.voters)\">\n        <!-- # Column -->\n        <ng-container matColumnDef=\"$key\">\n          <th mat-header-cell *matHeaderCellDef> No.</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.$key}} </td>\n        </ng-container>\n\n        <!-- title Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef> Email</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedVoterColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedVoterColumns;\"></tr>\n      </table>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/module/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/module/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  flex-direction: column;\n  margin: 5px;\n  padding: 5px;\n  flex: 1;\n  min-width: 300px; }\n  .container table {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvUHJvamVjdHMvYnNzL2Jzcy12b3Rpbmcvc3JjL2FwcC9tb2R1bGUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsYUFBWTtFQUNaLFFBQU87RUFDUCxpQkFBZ0IsRUFNakI7RUFYRDtJQVNJLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAzMDBweDtcblxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/module/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/module/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appService) {
        this.appService = appService;
        this.displayedColumns = ['index', 'title', 'subtitle', 'voteCount'];
        this.displayedVoterColumns = ['$key', 'email'];
        this.voteItems = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.appService.sectionSubject, this.appService.voterListSubject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var sections = _a[0], voterList = _a[1];
            return (!!sections && !!voterList);
        }))
            .subscribe(function (_a) {
            var sections = _a[0], voterList = _a[1];
            var tmp = [];
            sections.forEach(function (s, index) {
                var sectionContent = [];
                s.items.forEach(function (item) {
                    var voters = [];
                    var voteCount = 0;
                    voterList.filter(function (v) { return v.hasOwnProperty(s.$key); }).forEach(function (v) {
                        var votes = v[s.$key];
                        if (votes.includes(item.id)) {
                            voteCount++;
                            voters.push(v['$key']);
                        }
                    });
                    var dashboardItem = {
                        index: index,
                        order: item.order,
                        title: item.title,
                        subtitle: item.subtitle,
                        voteCount: voteCount,
                        voters: voters
                    };
                    sectionContent.push(dashboardItem);
                });
                tmp.push({
                    title: s.title,
                    content: sectionContent.sort(function (a, b) {
                        return (a.voteCount === 0 && b.voteCount === 0) ? (a.order - b.order) : -(a.voteCount - b.voteCount);
                    })
                });
            });
            _this.voteItems = tmp;
        });
    };
    DashboardComponent.prototype.getVoterDataSource = function (voters) {
        return voters.map(function (value, index) { return ({ $key: index, email: value }); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/module/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/module/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/module/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/module/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"progress; else formBody\" class=\"form-body\">\n    <mat-spinner></mat-spinner>\n  </div>\n\n  <ng-template #formBody>\n    <div *ngIf=\"user; else showLogin\" class=\"form-body\">\n      <h1>Chào {{ user.displayName }}!</h1>\n      <button mat-button mat-raised-button (click)=\"logout()\">Logout</button>\n    </div>\n    <ng-template #showLogin>\n      <div class=\"form-body\">\n        <p>Please login with BeeSightSoft account.</p>\n        <button mat-button mat-raised-button (click)=\"login()\">Login with Google</button>\n      </div>\n    </ng-template>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./src/app/module/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/module/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  flex-direction: column;\n  margin: 5px;\n  padding: 5px;\n  flex: 1;\n  min-width: 300px; }\n  .container .form-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvUHJvamVjdHMvYnNzL2Jzcy12b3Rpbmcvc3JjL2FwcC9tb2R1bGUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGFBQVk7RUFDWixRQUFPO0VBQ1AsaUJBQWdCLEVBU2pCO0VBZEQ7SUFRSSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgLmZvcm0tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/module/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/module/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/module/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.progress = true;
        this.loginService.authStateSubject.subscribe(function (user) {
            if (user && user.uid) {
                _this.user = user;
                setTimeout(function () {
                    _this.router.navigate(['/voting']).then();
                }, 1000);
            }
            _this.progress = false;
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.progress = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loginService.signIn()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        this.progress = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.signOut()
            .then(function () {
            _this.user = null;
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/module/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/module/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/module/login/login.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/module/login/login.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/module/login/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuard = /** @class */ (function () {
    function LoginGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.auth.authenticated) {
            return true;
        }
        return this.auth.userObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/login']).then();
            }
        }));
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/module/login/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/module/login/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
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
    function LoginService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this._user = null;
        this.authStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.afAuth.authState.subscribe(function (user) {
            // Notify
            _this._user = user;
            _this.authStateSubject.next(user);
        });
    }
    Object.defineProperty(LoginService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "authenticated", {
        get: function () {
            return !!(this.user && this.user.uid);
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.userObservable = function () {
        return this.afAuth.user;
    };
    LoginService.prototype.signIn = function (provider) {
        if (provider === void 0) { provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider(); }
        return this.afAuth.auth.signInWithPopup(provider);
    };
    LoginService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/module/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/module/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not found\n</p>\n"

/***/ }),

/***/ "./src/app/module/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/module/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/module/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/module/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/login']).then();
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/module/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/module/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/module/setup/setup.component.html":
/*!***************************************************!*\
  !*** ./src/app/module/setup/setup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Form section register-->\n<form class=\"register-form\">\n  <mat-form-field class=\"register-form-full-width\">\n    <input matInput placeholder=\"Tên section\" required [formControl]=\"sectionForm.title\">\n    <mat-error *ngIf=\"sectionForm.title.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"register-form-full-width\">\n    <input matInput placeholder=\"Thời gian bầu chọn (giây)\" type=\"number\" required\n           [formControl]=\"sectionForm.durationSec\">\n    <mat-error *ngIf=\"sectionForm.durationSec.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"register-form-full-width\">\n    <input matInput placeholder=\"Số lượng phiếu/người\" type=\"number\" required\n           [formControl]=\"sectionForm.maxVote\">\n    <mat-error *ngIf=\"sectionForm.maxVote.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n  <div>\n    <button mat-button mat-raised-button [disabled]=\"!isSectionFormValid()\" (click)=\"addNewSection()\">Tạo mới</button>\n  </div>\n</form>\n\n<!--Form section detail register-->\n<form class=\"register-form\">\n  <mat-form-field class=\"register-form-full-width\">\n    <input autofocus matInput placeholder=\"Tên tiết mục\" required [formControl]=\"sectionDetailForm.title\">\n    <mat-error *ngIf=\"sectionDetailForm.title.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"register-form-full-width\">\n    <input matInput placeholder=\"Thông tin thêm\" required [formControl]=\"sectionDetailForm.subtitle\">\n    <mat-error *ngIf=\"sectionDetailForm.subtitle.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"register-form-full-width\">\n    <input matInput placeholder=\"Link ảnh preview\" required [formControl]=\"sectionDetailForm.preview\">\n    <mat-error *ngIf=\"sectionDetailForm.preview.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"register-form-full-width\">\n    <textarea matInput placeholder=\"Mô tả ngắn\" required [formControl]=\"sectionDetailForm.description\"></textarea>\n    <mat-error *ngIf=\"sectionDetailForm.description.invalid\">Vui lòng điền thông tin.</mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Chọn section\" required [formControl]=\"sectionDetailForm.sectionId\">\n      <mat-option *ngFor=\"let section of sections\" [value]=\"section.$key\">\n        {{section.title}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"sectionDetailForm.sectionId.invalid\">Vui lòng chọn.</mat-error>\n  </mat-form-field>\n\n  <div>\n    <button mat-button mat-raised-button [disabled]=\"!isSectionDetailFormValid()\" (click)=\"addNewSectionDetail()\">Tạo\n      mới\n    </button>\n  </div>\n</form>\n\n<div class=\"table-container\" [@.disabled]=\"true\" *ngFor=\"let section of sections\">\n  <h3>{{section.title}}</h3>\n  <!--Table item-->\n  <table mat-table [dataSource]=\"section.items\">\n    <!-- # Column -->\n    <ng-container matColumnDef=\"index\">\n      <th mat-header-cell *matHeaderCellDef> No.</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.order}} </td>\n    </ng-container>\n\n    <!-- title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Tiết mục</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- type Column -->\n    <ng-container matColumnDef=\"subtitle\">\n      <th mat-header-cell *matHeaderCellDef> Thông tin</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.subtitle}} </td>\n    </ng-container>\n\n    <!-- preview Column -->\n    <ng-container matColumnDef=\"preview\">\n      <th mat-header-cell *matHeaderCellDef> Preview</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <img mat-card-avatar class=\"item-header-image\" src=\"{{element.preview}}\" alt=\"\">\n      </td>\n    </ng-container>\n\n    <!-- description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Mô tả</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/module/setup/setup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/module/setup/setup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  margin: 50px auto; }\n  .register-form .register-form-full-width {\n    width: 100%; }\n  .table-container {\n  flex-direction: column;\n  margin-bottom: 100px;\n  padding: 5px;\n  flex: 1;\n  min-width: 300px; }\n  .table-container table {\n    width: 100%; }\n  .table-container table .item-header-image {\n      background-size: cover;\n      width: 100px; }\n  .table-container table .cdk-column-description {\n      flex: 0 0 75px;\n      max-width: 100px; }\n  @media (max-width: 640px) {\n      .table-container table .cdk-column-preview, .table-container table .cdk-column-description {\n        display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvUHJvamVjdHMvYnNzL2Jzcy12b3Rpbmcvc3JjL2FwcC9tb2R1bGUvc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxrQkFBaUIsRUFLbEI7RUFURDtJQU9JLFlBQVcsRUFDWjtFQUlIO0VBQ0UsdUJBQXNCO0VBQ3RCLHFCQUFvQjtFQUNwQixhQUFZO0VBQ1osUUFBTztFQUNQLGlCQUFnQixFQXVCakI7RUE1QkQ7SUFTSSxZQUFXLEVBaUJaO0VBMUJIO01BWU0sdUJBQXNCO01BQ3RCLGFBQVksRUFDYjtFQWRMO01BaUJNLGVBQWM7TUFDZCxpQkFBZ0IsRUFDakI7RUFFRDtNQXJCSjtRQXVCUSxjQUNGLEVBQUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9zZXR1cC9zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuXG4gIC5yZWdpc3Rlci1mb3JtLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAwcHg7XG5cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuaXRlbS1oZWFkZXItaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG5cbiAgICAuY2RrLWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gICAgICBmbGV4OiAwIDAgNzVweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAuY2RrLWNvbHVtbi1wcmV2aWV3LCAuY2RrLWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/module/setup/setup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/module/setup/setup.component.ts ***!
  \*************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetupComponent = /** @class */ (function () {
    function SetupComponent(appService, snackBar) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.sectionDetailForm = {
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            preview: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            sectionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        };
        this.sectionForm = {
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: null, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            durationSec: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 5 * 60, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            maxVote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: 2, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        };
        this.displayedColumns = ['index', 'title', 'subtitle', 'preview', 'description'];
        this.sections = [];
    }
    SetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.sectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (sections) { return !!sections; })).subscribe(function (sections) {
            _this.sections = sections;
        });
    };
    SetupComponent.prototype.isSectionFormValid = function () {
        return this.sectionForm.title.valid;
    };
    SetupComponent.prototype.isSectionDetailFormValid = function () {
        return this.sectionDetailForm.title.valid &&
            this.sectionDetailForm.subtitle.valid &&
            this.sectionDetailForm.preview.valid &&
            this.sectionDetailForm.description.valid &&
            this.sectionDetailForm.sectionId.valid;
    };
    SetupComponent.prototype.addNewSection = function () {
        var _this = this;
        this.appService.sectionCollection
            .add({
            order: this.sections.length,
            title: this.sectionForm.title.value,
            duration_sec: this.sectionForm.durationSec.value,
            end_time: 0,
            finished: false,
            max_vote: this.sectionForm.maxVote.value,
            items: []
        })
            .then(function (ref) {
            _this.showMsg('Tạo section thành công');
        })
            .catch(function (reason) {
            console.error('addNewSection', reason);
            _this.showMsg(reason);
        });
    };
    SetupComponent.prototype.addNewSectionDetail = function () {
        var _this = this;
        var section = this.sections.filter(function (s) { return s.$key == _this.sectionDetailForm.sectionId.value; })[0];
        console.log(this.sections);
        console.log(section);
        if (!section) {
            return;
        }
        var items = section.items;
        if (items && Array.isArray(items)) {
            items.push({
                id: uuid_v1__WEBPACK_IMPORTED_MODULE_5___default()(),
                order: items.length,
                title: this.sectionDetailForm.title.value,
                subtitle: this.sectionDetailForm.subtitle.value,
                description: this.sectionDetailForm.description.value,
                preview: this.sectionDetailForm.preview.value
            });
            this.appService.sectionCollection.doc("/" + this.sectionDetailForm.sectionId.value)
                .update({ items: items })
                .then(function () {
                _this.showMsg('Thêm tiết mục thành công.');
            })
                .catch(function (reason) {
                console.error('addNewSectionDetail', reason);
                _this.showMsg(reason);
            });
        }
    };
    SetupComponent.prototype.showMsg = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 2000,
        });
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/module/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/module/setup/setup.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/module/voting/voting.component.html":
/*!*****************************************************!*\
  !*** ./src/app/module/voting/voting.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"user\" style=\"text-align:center\">\n    <h1>Chào {{ user.displayName }}</h1>\n    <h3 *ngIf=\"(getAvailableSlot() >0); else endSlot\">Bạn còn {{getAvailableSlot()}} lượt bình chọn!</h3>\n    <ng-template #endSlot>\n      <h3>Bạn đã xài hết lượt bình chọn!</h3>\n    </ng-template>\n    <button mat-button mat-raised-button (click)=\"logout()\">Logout</button>\n    <button mat-button mat-raised-button *ngIf=\"isAdmin\" routerLink=\"/dashboard\" style=\"margin-left: 10px\">Dashboard\n    </button>\n  </div>\n  <mat-list-item *ngIf=\"currentSection\">\n    <mat-card class=\"item-card\"\n              *ngFor=\"let item of currentSection.items | orderBy : 'order'\">\n      <mat-card-header>\n        <img mat-card-avatar class=\"item-header-image\" src=\"{{item.preview}}\" alt=\"\">\n        <mat-card-title>{{item.title}}</mat-card-title>\n        <mat-card-subtitle>{{item.subtitle}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{item.preview}}\" alt=\"\">\n      <mat-card-content>\n        <p>\n          {{item.description}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions style=\"display: flex;justify-content: center;\">\n        <button *ngIf=\"voted.includes(item.id) || getAvailableSlot() > 0\" mat-fab (click)=\"vote(item)\"\n                [disabled]=\"voted.includes(item.id)\">\n          <mat-icon aria-label=\"Vote\">favorite</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/module/voting/voting.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/module/voting/voting.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  flex-direction: column;\n  margin: 5px;\n  padding: 5px;\n  flex: 1;\n  min-width: 300px; }\n  .container mat-list-item {\n    display: flex;\n    justify-content: center; }\n  .container mat-list-item .item-card {\n      max-width: 400px;\n      margin: 10px; }\n  .container mat-list-item .item-card .item-header-image {\n        background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvUHJvamVjdHMvYnNzL2Jzcy12b3Rpbmcvc3JjL2FwcC9tb2R1bGUvdm90aW5nL3ZvdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFzQjtFQUN0QixZQUFXO0VBQ1gsYUFBWTtFQUNaLFFBQU87RUFDUCxpQkFBZ0IsRUFnQmpCO0VBckJEO0lBUUksY0FBYTtJQUNiLHdCQUF1QixFQVd4QjtFQXBCSDtNQVlNLGlCQUFnQjtNQUNoQixhQUFZLEVBS2I7RUFsQkw7UUFnQlEsdUJBQXNCLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlL3ZvdGluZy92b3RpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuXG4gIG1hdC1saXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAuaXRlbS1jYXJkIHtcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgIC5pdGVtLWhlYWRlci1pbWFnZSB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/module/voting/voting.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/voting/voting.component.ts ***!
  \***************************************************/
/*! exports provided: VotingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingComponent", function() { return VotingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ "./src/app/module/login/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/module/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VotingComponent = /** @class */ (function () {
    function VotingComponent(appService, auth, snackBar, router, dialog) {
        this.appService = appService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.voted = [];
        this.isAdmin = false;
    }
    VotingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.user;
        this.appService.configSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (v) { return !!v; }))
            .subscribe(function (config) {
            _this.isAdmin = config.admin.hasOwnProperty(_this.user.email);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.appService.currentSectionSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (v) { return !!v; })), this.appService.voterSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (v) { return !!v; })))
            .subscribe(function (_a) {
            var currentSection = _a[0], voteList = _a[1];
            _this.currentSection = currentSection;
            if (voteList.hasOwnProperty(_this.currentSection.$key)) {
                _this.voted = voteList[_this.currentSection.$key];
            }
        });
    };
    VotingComponent.prototype.logout = function () {
        var _this = this;
        this.auth.signOut()
            .then(function () {
            _this.user = null;
            _this.router.navigate(['/login']).then();
        })
            .catch(function (err) { return console.error(err); });
    };
    VotingComponent.prototype.getAvailableSlot = function () {
        return (this.currentSection && (this.currentSection.max_vote - this.voted.length)) || 0;
    };
    VotingComponent.prototype.vote = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
            width: '300px',
            data: { title: "Vote cho \"" + item.title + "\"", content: 'Bạn sẽ mất 1 lượt vote. Chắc chắn chứ?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                if (item.id && !_this.voted.includes(item.id)) {
                    var tmp_1 = _this.voted.slice(0);
                    tmp_1.push(item.id);
                    var update = {};
                    update[_this.currentSection.$key] = tmp_1;
                    _this.appService.voterDocument.set(update)
                        .then(function () {
                        _this.showMsg('Bầu chọn thành công.');
                        _this.voted = tmp_1;
                    })
                        .catch(function (reason) {
                        console.error('vote', reason);
                        _this.showMsg("L\u1ED7i: " + reason);
                    });
                }
                else {
                    _this.showMsg('Mục này đã được bình chọn.');
                }
            }
        });
    };
    VotingComponent.prototype.showMsg = function (msg) {
        this.snackBar.open(msg, null, {
            duration: 2000,
        });
    };
    VotingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voting',
            template: __webpack_require__(/*! ./voting.component.html */ "./src/app/module/voting/voting.component.html"),
            styles: [__webpack_require__(/*! ./voting.component.scss */ "./src/app/module/voting/voting.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], VotingComponent);
    return VotingComponent;
}());



/***/ }),

/***/ "./src/app/shared/order-by.ts":
/*!************************************!*\
  !*** ./src/app/shared/order-by.ts ***!
  \************************************/
/*! exports provided: OrderBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBy", function() { return OrderBy; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderBy = /** @class */ (function () {
    function OrderBy() {
    }
    OrderBy_1 = OrderBy;
    OrderBy._orderByComparator = function (a, b) {
        if (a === undefined && b === undefined) {
            return 0;
        }
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            }
            if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
            }
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) {
                return -1;
            }
            if (parseFloat(a) > parseFloat(b)) {
                return 1;
            }
        }
        return 0; // equal each other
    };
    OrderBy.prototype.transform = function (input, _a) {
        var _b = _a[0], config = _b === void 0 ? '+' : _b;
        if (!Array.isArray(input)) {
            return input;
        }
        if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
            var propertyToCheck = !Array.isArray(config) ? config : config[0];
            var desc_1 = propertyToCheck.substr(0, 1) === '-';
            // Basic array
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return !desc_1 ? input.sort() : input.sort().reverse();
            }
            else {
                var property_1 = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
                    ? propertyToCheck.substr(1)
                    : propertyToCheck;
                return input.sort(function (a, b) {
                    return !desc_1 ?
                        OrderBy_1._orderByComparator(a[property_1], b[property_1])
                        : -OrderBy_1._orderByComparator(a[property_1], b[property_1]);
                });
            }
        }
        else {
            // Loop over property of the array in order and sort
            return input.sort(function (a, b) {
                for (var i = 0; i < config.length; i++) {
                    var desc = config[i].substr(0, 1) === '-';
                    var property = config[i].substr(0, 1) === '+' || config[i].substr(0, 1) === '-'
                        ? config[i].substr(1)
                        : config[i];
                    var comparison = !desc ?
                        OrderBy_1._orderByComparator(a[property], b[property])
                        : -OrderBy_1._orderByComparator(a[property], b[property]);
                    // Don't return 0 yet in case of needing to sort by next property
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                return 0; // equal each other
            });
        }
    };
    var OrderBy_1;
    OrderBy = OrderBy_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'orderBy' })
    ], OrderBy);
    return OrderBy;
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
    firebase: {
        apiKey: 'AIzaSyDpHttkgwlWTS2BzPYjJcc3ZUgxWdp_aKY',
        authDomain: 'bss-voting.firebaseapp.com',
        databaseURL: 'https://bss-voting.firebaseio.com',
        projectId: 'bss-voting',
        storageBucket: 'bss-voting.appspot.com',
        messagingSenderId: '233603608932'
    }
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

module.exports = __webpack_require__(/*! /Volumes/Data/Projects/bss/bss-voting/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map