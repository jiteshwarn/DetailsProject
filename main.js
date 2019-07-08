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

/***/ "./src/app/HomeComponent/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/HomeComponent/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/HomeComponent/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/HomeComponent/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t        <!--================Home Banner Area =================-->\r\n\t\t\t<section class=\"home_banner_area\">\r\n                    <div class=\"container box_1620\">\r\n                        <div class=\"banner_inner d-flex align-items-center\">\r\n                         <div class=\"banner_content\">\r\n                             <div class=\"media\">\r\n                                 <div class=\"d-flex\">\r\n                                     <img src=\"https://avatars2.githubusercontent.com/u/16861849?s=400&u=268b64c2fb6d62ba8b0d7a9b63d078eb900a7297&v=4\" alt=\"\">\r\n                                 </div>\r\n                                 <div class=\"media-body\">\r\n                                     <div class=\"personal_text\">\r\n                                         <h6>Hello Everybody, i am</h6>\r\n                                         <h3>Jiteshwar Nishad</h3>\r\n                                         <h4>Senior UI Developer</h4>\r\n                                         <p>I'm a Tech Savy living in Bangalore, India. I have 6 years of experience in web and mobile based websites. I'm currently employed at Apttus where I develop HTML, CSS and JS for consumer facing applications.</p>\r\n                                         <ul class=\"list basic_info\">\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-calendar-full\"></i> 28th April, 1989</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-phone-handset\"></i> +91 9590325564</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> jiteshnishad1989@gmail.com</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-home\"></i> Bangalore India</a></li>\r\n                                         </ul>\r\n                                         <ul class=\"list personal_social\">\r\n                                             <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                                             <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                             <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                                         </ul>\r\n                                     </div>\r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 </section>\r\n             <!--================End Home Banner Area =================-->"

/***/ }),

/***/ "./src/app/HomeComponent/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/HomeComponent/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.welcomeMsg = "Hey...";
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wm-component',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/HomeComponent/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/HomeComponent/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--================Header Menu Area =================-->\r\n<header class=\"header_area\">\r\n  <div class=\"main_menu\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n      <div class=\"container box_1620\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <a class=\"navbar-brand logo_h\" href=\"index.html\"><img src=\"img/logo.png\" alt=\"\"></a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\r\n          <ul class=\"nav navbar-nav menu_nav ml-auto\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"about-us.html\">About</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" href=\"services.html\">Services</a></li>\r\n            <li class=\"nav-item submenu dropdown\">\r\n              <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n                aria-expanded=\"false\">Pages</a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"portfolio.html\">Portfolio</a></li>\r\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"elements.html\">Elements</a></li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"nav-item submenu dropdown\">\r\n              <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\r\n                aria-expanded=\"false\">Blog</a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"blog.html\">Blog</a></li>\r\n                <li class=\"nav-item\"><a class=\"nav-link\" href=\"single-blog.html\">Blog Details</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <!-- <li class=\"nav-item\"><a class=\"nav-link\" href=\"contact.html\">Contact</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/welcome\">Welcome</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/product\">Product</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"product-detail\">Details</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"simple-component\">Simple Component</a></li>\r\n            <li class=\"nav-item\" ><a class=\"nav-link\" routerLink=\"parent-component\">Parent Child Commnuication</a></li>\r\n            <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"forms\">Forms</a></li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>\r\n<!--================Header Menu Area =================-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  margin: 10px; }\n"

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
        this.title = 'Jitesh App';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/product.component */ "./src/app/products/product.component.ts");
/* harmony import */ var _welcomeComponent_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcomeComponent/welcome.component */ "./src/app/welcomeComponent/welcome.component.ts");
/* harmony import */ var _productDetails_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productDetails/product-details.component */ "./src/app/productDetails/product-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _products_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/product.service */ "./src/app/products/product.service.ts");
/* harmony import */ var _simpleComponent_app_simple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./simpleComponent/app.simple.component */ "./src/app/simpleComponent/app.simple.component.ts");
/* harmony import */ var _parent_component_parent_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parent-component/parent-component.component */ "./src/app/parent-component/parent-component.component.ts");
/* harmony import */ var _child_component_child_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./child-component/child-component.component */ "./src/app/child-component/child-component.component.ts");
/* harmony import */ var _testjavascript_testjavascript_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testjavascript/testjavascript.component */ "./src/app/testjavascript/testjavascript.component.ts");
/* harmony import */ var _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HomeComponent/home.component */ "./src/app/HomeComponent/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// new website

// import { FormsComponent } from './forms/forms.component';

var appRoutes = [
    { path: 'home', component: _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'product', component: _products_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"] },
    { path: 'welcome', component: _welcomeComponent_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"] },
    { path: 'product-detail', component: _productDetails_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"] },
    { path: 'simple-component', component: _simpleComponent_app_simple_component__WEBPACK_IMPORTED_MODULE_10__["SimpleComponent"] },
    { path: 'parent-component', component: _parent_component_parent_component_component__WEBPACK_IMPORTED_MODULE_11__["ParentComponentComponent"] },
    // {path:'forms',component:FormsComponent},
    { path: '**', component: _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _products_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _welcomeComponent_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _productDetails_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
                _simpleComponent_app_simple_component__WEBPACK_IMPORTED_MODULE_10__["SimpleComponent"],
                _parent_component_parent_component_component__WEBPACK_IMPORTED_MODULE_11__["ParentComponentComponent"],
                _child_component_child_component_component__WEBPACK_IMPORTED_MODULE_12__["ChildComponentComponent"],
                _testjavascript_testjavascript_component__WEBPACK_IMPORTED_MODULE_13__["TestjavascriptComponent"],
                _HomeComponent_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
                // FormsComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                // DemoMaterialModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_products_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/child-component/child-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/child-component/child-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/child-component/child-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/child-component/child-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  child-component works!\r\n</p>\r\n<h3>{{cdata}}</h3>\r\n<h5>\r\n{{reciveFromParent}}\r\n</h5>\r\n\r\n<button (click)=\"emitChild()\">send data to parent</button>\r\n\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/child-component/child-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/child-component/child-component.component.ts ***!
  \**************************************************************/
/*! exports provided: ChildComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponentComponent", function() { return ChildComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponentComponent = /** @class */ (function () {
    function ChildComponentComponent() {
        this.cdata = "I am Child Data";
        this.msgEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChildComponentComponent.prototype.ngOnInit = function () {
        //without event trigeer if we want to send data, uncomment below code
        //this.msgEvent.emit(this.cdata);
    };
    ChildComponentComponent.prototype.emitChild = function () {
        this.msgEvent.emit(this.cdata);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChildComponentComponent.prototype, "reciveFromParent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponentComponent.prototype, "msgEvent", void 0);
    ChildComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child-component',
            template: __webpack_require__(/*! ./child-component.component.html */ "./src/app/child-component/child-component.component.html"),
            styles: [__webpack_require__(/*! ./child-component.component.css */ "./src/app/child-component/child-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponentComponent);
    return ChildComponentComponent;
}());



/***/ }),

/***/ "./src/app/parent-component/parent-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/parent-component/parent-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "**********************PARENT COMPONENT STARTS\r\n*********************************************\r\n<p>\r\n  parent-component works!\r\n</p>\r\n<h1>\r\n    {{pdata}}\r\n</h1>\r\n{{receiveValueFromChild}}\r\n<br>\r\n\r\n***************************************\r\n\r\nCHILD COMPONENT STARTS\r\n*********************************************\r\n<app-child-component [reciveFromParent]=\"pdata\" (msgEvent)=\"recieveValueChild($event)\"></app-child-component>"

/***/ }),

/***/ "./src/app/parent-component/parent-component.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/parent-component/parent-component.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/parent-component/parent-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/parent-component/parent-component.component.ts ***!
  \****************************************************************/
/*! exports provided: ParentComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponentComponent", function() { return ParentComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentComponentComponent = /** @class */ (function () {
    function ParentComponentComponent() {
        this.pdata = "i am parent data";
    }
    ParentComponentComponent.prototype.ngOnInit = function () {
    };
    ParentComponentComponent.prototype.recieveValueChild = function ($event) {
        this.receiveValueFromChild = $event;
    };
    ParentComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent-component',
            template: __webpack_require__(/*! ./parent-component.component.html */ "./src/app/parent-component/parent-component.component.html"),
            styles: [__webpack_require__(/*! ./parent-component.component.scss */ "./src/app/parent-component/parent-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponentComponent);
    return ParentComponentComponent;
}());



/***/ }),

/***/ "./src/app/productDetails/product-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/productDetails/product-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/productDetails/product-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/productDetails/product-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-unit\">\r\n    <h1>Heading</h1>\r\n    <p>Tagline</p>\r\n    <p>\r\n      <a class=\"btn btn-primary btn-large\">\r\n        Learn more\r\n      </a>\r\n    </p>\r\n  </div>\r\n  <div>\r\n    <input type=\"input\" [(ngModel)]=\"userInputText\" />\r\n  </div>\r\n  <app-simple-component [simpleInput]=\"userInputText\"></app-simple-component>"

/***/ }),

/***/ "./src/app/productDetails/product-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/productDetails/product-details.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
        this.productPageTitle = "I have product details";
        this.userInputText = "jiteeh";
    }
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pd-component',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/productDetails/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/productDetails/product-details.component.css")]
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/product.component.css":
/*!************************************************!*\
  !*** ./src/app/products/product.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product.component.html":
/*!*************************************************!*\
  !*** ./src/app/products/product.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Product Code</th>\r\n        <th>Product Name</th>\r\n        <th>Rating</th>\r\n        <th>Image</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of allProducts\">\r\n        <td>{{product.productId}}</td>\r\n        <td>{{product.productCode}}</td>\r\n        <td>{{product.productName}}</td>\r\n        <td>{{product.starRating}}</td>\r\n        <td><img [src]=\"product.imageUrl\" /></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/products/product.component.ts":
/*!***********************************************!*\
  !*** ./src/app/products/product.component.ts ***!
  \***********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "./src/app/products/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(_productService) {
        this._productService = _productService;
        this.pageTitle = "My Page";
        this.products = [
            {
                "sequence": 1,
                "name": "A",
                "productName": "Benz",
                "price": 10000000
            },
            {
                "sequence": 2,
                "name": "B",
                "productName": "Ford",
                "price": 10000000
            },
            {
                "sequence": 3,
                "name": "C",
                "productName": "Mercedz",
                "price": 10000000
            },
            {
                "sequence": 4,
                "name": "D",
                "productName": "Maruti",
                "price": 10000000
            }
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (prod) { return _this.allProducts = prod; }, function (err) { return _this.errorMessage = err; });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-component',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/products/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/products/product.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());

var x = new _product_service__WEBPACK_IMPORTED_MODULE_1__["TestClass"]();
console.log(x.apiTest);


/***/ }),

/***/ "./src/app/products/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/products/product.service.ts ***!
  \*********************************************/
/*! exports provided: TestClass, ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestClass", function() { return TestClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/products/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestClass = /** @class */ (function () {
    function TestClass() {
        this.apiTest = "jitesh";
    }
    return TestClass;
}());

// @Injectable()
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this._productUrl = 'https://www.mocky.io/v2/5ca5ee5a3300008c532eaa6e';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this._productUrl);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/simpleComponent/app.simple.component.html":
/*!***********************************************************!*\
  !*** ./src/app/simpleComponent/app.simple.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello</h1>\r\n<input type=\"input\" [(ngModel)]=\"simpleInput\"/>\r\nentered {{simpleInput}}"

/***/ }),

/***/ "./src/app/simpleComponent/app.simple.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/simpleComponent/app.simple.component.ts ***!
  \*********************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
    }
    SimpleComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ": currentValue=" + current, "previous value" + previous);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SimpleComponent.prototype, "simpleInput", void 0);
    SimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-component',
            template: __webpack_require__(/*! ./app.simple.component.html */ "./src/app/simpleComponent/app.simple.component.html")
        })
    ], SimpleComponent);
    return SimpleComponent;
}());



/***/ }),

/***/ "./src/app/testjavascript/testjavascript.component.css":
/*!*************************************************************!*\
  !*** ./src/app/testjavascript/testjavascript.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testjavascript/testjavascript.component.html":
/*!**************************************************************!*\
  !*** ./src/app/testjavascript/testjavascript.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  testjavascript works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/testjavascript/testjavascript.component.ts":
/*!************************************************************!*\
  !*** ./src/app/testjavascript/testjavascript.component.ts ***!
  \************************************************************/
/*! exports provided: TestjavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestjavascriptComponent", function() { return TestjavascriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestjavascriptComponent = /** @class */ (function () {
    function TestjavascriptComponent() {
    }
    TestjavascriptComponent.prototype.ngOnInit = function () {
    };
    TestjavascriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testjavascript',
            template: __webpack_require__(/*! ./testjavascript.component.html */ "./src/app/testjavascript/testjavascript.component.html"),
            styles: [__webpack_require__(/*! ./testjavascript.component.css */ "./src/app/testjavascript/testjavascript.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestjavascriptComponent);
    return TestjavascriptComponent;
}());

var personalDetail = {
    name: 'Nishant',
    address: {
        location: 'xyz',
        zip: '123456',
        phoneNumber: {
            homePhone: 8797912345,
            workPhone: 1234509876
        }
    }
};
console.log(personalDetail);


/***/ }),

/***/ "./src/app/welcomeComponent/welcome.component.css":
/*!********************************************************!*\
  !*** ./src/app/welcomeComponent/welcome.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcomeComponent/welcome.component.html":
/*!*********************************************************!*\
  !*** ./src/app/welcomeComponent/welcome.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t        <!--================Home Banner Area =================-->\r\n\t\t\t<section class=\"home_banner_area\">\r\n                    <div class=\"container box_1620\">\r\n                        <div class=\"banner_inner d-flex align-items-center\">\r\n                         <div class=\"banner_content\">\r\n                             <div class=\"media\">\r\n                                 <div class=\"d-flex\">\r\n                                     <img src=\"https://avatars2.githubusercontent.com/u/16861849?s=400&u=268b64c2fb6d62ba8b0d7a9b63d078eb900a7297&v=4\" alt=\"\">\r\n                                 </div>\r\n                                 <div class=\"media-body\">\r\n                                     <div class=\"personal_text\">\r\n                                         <h6>Hello Everybody, i am</h6>\r\n                                         <h3>Jiteshwar Nishad</h3>\r\n                                         <h4>Senior UI Developer</h4>\r\n                                         <p>I'm a Tech Savy living in Bangalore, India. I have 6 years of experience in web and mobile based websites. I'm currently employed at Apttus where I develop HTML, CSS and JS for consumer facing applications.</p>\r\n                                         <ul class=\"list basic_info\">\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-calendar-full\"></i> 28th April, 1989</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-phone-handset\"></i> +91 9590325564</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-envelope\"></i> jiteshnishad1989@gmail.com</a></li>\r\n                                             <li><a href=\"#\"><i class=\"lnr lnr-home\"></i> Bangalore India</a></li>\r\n                                         </ul>\r\n                                         <ul class=\"list personal_social\">\r\n                                             <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                                             <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                             <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                                         </ul>\r\n                                     </div>\r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n                 </section>\r\n             <!--================End Home Banner Area =================-->"

/***/ }),

/***/ "./src/app/welcomeComponent/welcome.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/welcomeComponent/welcome.component.ts ***!
  \*******************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.welcomeMsg = "Hey...";
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wm-component',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcomeComponent/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcomeComponent/welcome.component.css")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nisjit01\Documents\Work\personal\Details_project_orignational\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map