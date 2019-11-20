(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>About Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"70\">\n        <h2>Our History</h2>\n        <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n        <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n      </div>\n      <div fxFlex=\"30\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>\n              <h2>Facts At a Glance</h2>\n            </mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <dl>\n              <dt>Started</dt>\n              <dd>3 Feb. 2013</dd>\n              <dt>Major Stake Holder</dt>\n              <dd>HK Fine Foods Inc.</dd>\n              <dt>Last Year's Turnover</dt>\n              <dd>$1,250,375</dd>\n              <dt>Employees</dt>\n              <dd>40</dd>\n            </dl>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <mat-card>\n      <blockquote>\n        <h3>You better cut the pizza in four pieces because\n          I'm not hungry enough to eat six.</h3>\n        <footer>-- Yogi Berra,\n          <cite>The Wit and Wisdom of Yogi Berra,\n            P. Pepe, Diversion Books, 2014</cite>\n        </footer>\n      </blockquote>\n    </mat-card>\n  </div>\n\n\n  <div fxFlex *ngIf=\"leaders\" [@expand]>\n    <h2>Corporate Leadership</h2>\n    <p>Display the details of the corporate leaders here</p>\n\n    <!-- three line list -->\n    <mat-list>\n      <mat-list-item *ngFor=\"let leader of leaders\">\n        <img matListAvatar alt=\"{{leader.name}}\" src=\"{{baseURL + leader.image}}\"/>\n        <h3 matLine> {{leader.name}} {{leader.abbr}}</h3>\n        <p matLine> {{leader.designation}} </p>\n        <p matLine> {{leader.description}} </p>\n      </mat-list-item>\n    </mat-list>\n</div>\n</div>\n\n<div [hidden]=\"leaders\">\n  <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     fxLayout=\"column\"\n     fxLayoutGap=\"10px\">\n\n  <div fxFlex>\n    <div>\n      <h3>Contact Us</h3>\n      <hr>\n    </div>\n  </div>\n\n  <div fxFlex>\n    <h3>Location Information</h3>\n    <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n      <div fxFlex=\"50\" fxFlexOffset=\"20px\">\n        <h4>Our Address</h4>\n        <address>\n          121, Clear Water Bay Road<br>\n          Clear Water Bay, Kowloon<br>\n          HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n        <p></p>\n        <div>\n          <a mat-raised-button href=\"tel:+85212345678\"><i class=\"fa fa-phone\"></i> Call</a>\n          <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\n          <a mat-raised-button href=\"mailto:confusion@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\n        </div>\n      </div>\n      <div fxFlex=\"40\">\n        <h4>Map of our Location</h4>\n      </div>\n    </div>\n  </div>\n\n  <div fxFlex *ngIf=\"feedbackCopy\" [@expand]>\n      <h2>Your Submission</h2>\n    <div>\n      <p>Firstname: {{feedbackCopy.firstname}}</p>\n      <p>Lastname: {{feedbackCopy.lastname}}</p>\n      <p>Email: {{feedbackCopy.email}}</p>\n      <p>Telnum: {{feedbackCopy.telnum}}</p>\n      <p>Agree: {{feedbackCopy.agree}}</p>\n      <p>Type: {{feedbackCopy.contacttype}}</p>\n      <p>Message: {{feedbackCopy.message}}</p>\n    </div>\n  </div>\n\n  <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\n    <form novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\" #fform='ngForm' *ngIf=\"!showSpinner\">\n      <p>\n      <mat-form-field class=\"half-width\">\n        <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\n        <mat-error *ngIf=\"formErrors.firstname\">{{formErrors.firstname}}</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\n        <mat-error *ngIf=\"formErrors.lastname\">{{formErrors.lastname}}</mat-error>\n      </mat-form-field>\n      </p>\n      <p>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" pattern=\"[0-9]*\" required>\n          <mat-error *ngIf=\"formErrors.telnum\">{{formErrors.telnum}}</mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" email required>\n          <mat-error *ngIf=\"formErrors.email\">{{formErrors.email}}</mat-error>\n        </mat-form-field>\n      </p>\n      <table class=\"form-size\">\n        <td>\n          <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\n        </td>\n        <td>\n          <mat-select placeholder=\"How?\" formControlName=\"contacttype\">\n            <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n              {{ ctype }}\n            </mat-option>\n          </mat-select>\n        </td>\n      </table>\n      <p>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\n        </mat-form-field>\n      </p>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\">Submit</button>\n    </form>\n  </div>\n  <div fxFlex *ngIf=\"showSpinner\">\n    <h3>Submitting Form</h3>\n    <mat-spinner></mat-spinner>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\">\n    <mat-card *ngIf=\"dish\" [@expand]>\n      <mat-card-header>\n        <mat-card-title>\n          <h3 *ngIf=\"dish\">{{dish.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{baseURL + dish.image}}\" alt={{dish.name}}>\n      <mat-card-content>\n        <p>{{dish.description}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button [routerLink]=\"['/dishdetail', prev]\"><span class=\"fa fa-chevron-left fa-lg\"></span></button>\n        <button mat-button (click)=\"goBack()\">BACK</button>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n        <span class=\"flex-spacer\"></span>\n        <button mat-button [routerLink]=\"['/dishdetail', next]\"><span class=\"fa fa-chevron-right fa-lg\"></span></button>\n      </mat-card-actions>\n    </mat-card>\n    <div [hidden]=\"dish || errMess\">\n      <mat-spinner></mat-spinner>\n      <h4>Loading . . . Please Wait</h4>\n    </div>\n    <div fxFlex *ngIf=\"errMess\">\n      <h2>Error</h2>\n      <h4>{{errMess}}</h4>\n    </div>\n  </div>\n\n\n  <div fxFlex=\"40\" *ngIf=\"dish\" [@visibility]=\"visibility\">\n    <mat-list role=\"list\" *ngIf=\"dish\" [@expand]>\n      <h2>Comments</h2>\n      <mat-list-item role=\"listitem\" *ngFor=\"let comment of dish.comments\">\n        <p matLine> {{comment.comment}} </p>\n        <p matLine>\n          {{comment.rating}} <span>stars</span>\n        </p>\n        <p matLine>\n          <span> -- {{comment.author}} {{comment.date | date}} </span>\n        </p>\n      </mat-list-item>\n    </mat-list>\n\n\n\n    <form novalidate [formGroup]=\"commentForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <mat-list *ngIf=\"commentForm.valid\">\n        <h3>Preview Comment</h3>\n        <mat-list-item role=\"listitem\">\n          <p matLine> {{commentForm.get('comment').value}} </p>\n          <p matLine>\n            {{commentForm.get('rating').value}} <span>stars</span>\n          </p>\n          <p matLine>\n            <span> -- {{commentForm.get('author').value}}</span>\n          </p>\n        </mat-list-item>\n      </mat-list>\n      <div>\n        <mat-form-field class=\"full-width\">\n          <input matInput formControlName=\"author\" placeholder=\"Author Name\" type=\"text\" required>\n          <mat-error *ngIf=\"formErrors.author\">{{formErrors.author}}</mat-error>\n        </mat-form-field>\n      </div>\n      <div>\n        <mat-slider\n          formControlName=\"rating\"\n          thumbLabel\n          [displayWith]=\"formatLabel\"\n          tickInterval=\"1\"\n          min=\"0\"\n          max=\"5\"></mat-slider>\n      </div>\n      <div>\n        <mat-form-field class=\"full-width\">\n          <textarea matInput formControlName=\"comment\" placeholder=\"Your Comment\" rows=6 required></textarea>\n          <mat-error *ngIf=\"formErrors.comment\">{{formErrors.comment}}</mat-error>\n        </mat-form-field>\n      </div>\n      <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"commentForm.invalid\">\n        Submit\n      </button>\n\n    </form>\n  </div>\n  <div [hidden]=\"dish\">\n    <mat-spinner></mat-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container footer\"\n     fxLayout=\"row wrap\"\n     fxLayout.lt-md=\"column\"\n     fxLayoutAlign=\"center center\"\n     fxLayoutGap=\"10px\">\n\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"40\" fxFlexOffset=\"20px\">\n        <h4>Links</h4>\n        <mat-list>\n          <mat-list-item><a mat-button routerLink=\"/home\">Home</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/aboutus\">About</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/menu\">Menu</a></mat-list-item>\n          <mat-list-item><a mat-button routerLink=\"/contactus\">Contact</a></mat-list-item>\n        </mat-list>\n      </div>\n      <div fxFlex=\"55\">\n        <h4>Our Address</h4>\n        <address style=\"text-size: 80%\">\n          121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n          <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n          <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n          <i class=\"fa fa-envelope\"></i>:\n          <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n        </address>\n      </div>\n    </div>\n  </div>\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"45\">\n    <div style=\"text-align:center\">\n      <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i class=\"fa fa-google-plus fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i class=\"fa fa-facebook fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i class=\"fa fa-linkedin fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\n      <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\n    </div>\n  </div>\n  <div>\n    <p>© Copyright 2018 Ristorante Con Fusion</p>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\n  <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\n  <a mat-button routerLink=\"/aboutus\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\n  <a mat-button routerLink=\"/menu\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Menu</a>\n  <a mat-button routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span> Contact</a>\n  <span class=\"flex-spacer\"></span>\n  <a mat-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</mat-toolbar>\n\n<div class=\"container jumbotron\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.xs=\"start center\"\n     fxLayoutAlign.sm=\"start center\"\n     fxLayoutAlign.gt-sm=\"center center\"\n     fxLayoutGap=\"10px\">\n\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <h1>Ristorante Con Fusion</h1>\n    <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking\n      creations\n      will tickle your culinary senses!</p>\n  </div>\n  <div fxFlex fxFlex.gt-sm=\"20%\">\n    <img src=\"/assets/images/logo.png\" alt=\"Logo\">\n  </div>\n  <div fxFlex></div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.sm=\"column\"\n     fxLayout.xs=\"column\"\n     fxLayoutAlign.gt-md=\"space-around center\"\n     fxLayoutGap=\"10px\">\n\n\n  <div fxFlex *ngIf=\"dish\" [@expand]>\n    <mat-card *ngIf=\"dish\" fxFlex>\n      <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>\n          <h3>{{dish.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{baseURL + dish.image}}\" alt={{dish.name}}>\n      <mat-card-content>\n        <p>{{dish.description}}\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div [hidden]=\"dish || dishErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"dishErrMess\">\n    <h2>Error</h2>\n    <h4>{{dishErrMess}}</h4>\n  </div>\n\n\n  <div fxFlex *ngIf=\"promotion\" [@expand]>\n    <mat-card *ngIf=\"promotion\" fxFlex>\n      <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>\n          <h3>{{promotion.name | uppercase}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{baseURL + promotion.image}}\" alt={{promotion.name}}>\n      <mat-card-content>\n        <p>{{promotion.description}}\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div [hidden]=\"promotion || promoErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"promoErrMess\">\n    <h2>Error</h2>\n    <h4>{{promoErrMess}}</h4>\n  </div>\n\n\n\n  <div fxFlex *ngIf=\"leader\" [@expand]>\n    <mat-card *ngIf=\"leader\" fxFlex>\n      <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>\n          <h3>{{leader.name | uppercase}} {{leader.abbr}}</h3>\n        </mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"{{baseURL + leader.image}}\" alt={{leader.name}}>\n      <mat-card-content>\n        <p>{{leader.designation}}</p>\n        <p>{{leader.description}}\n        </p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div [hidden]=\"leader || leaderErrMess\">\n    <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n  </div>\n  <div fxFlex *ngIf=\"leaderErrMess\">\n    <h2>Error</h2>\n    <h4>{{leaderErrMess}}</h4>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  Login\n  <span class=\"flex-spacer\"></span>\n<button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n<p>{{ user | json }}</p>\n\n<form novalidate  #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n  <mat-dialog-content>\n    <p>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" #username=\"ngModel\"  required type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n        <mat-error *ngIf=\"username.errors?.required\">Username is required</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" #password=\"ngModel\" required type=\"password\" [(ngModel)]=\"user.password\" name=\"password\">\n        <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n      </mat-form-field>\n      <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\n    </p>\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button type=\"submit\" mat-button class=\"background-primary text-floral-white\" [disabled]=\"loginForm.form.invalid\">Login</button>\n  </mat-dialog-actions>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <div fxFlex *ngIf=\"dishes\" [@expand]>\n    <mat-grid-list cols=\"2\" rowHeight=\"200px\">\n      <mat-grid-tile *ngFor=\"let dish of dishes\" [routerLink]=\"['/dishdetail',dish.id]\" appHighlight>\n        <img height=\"200px\" src=\"{{ baseURL + dish.image }}\" alt={{dish.name}}>\n        <mat-grid-tile-footer>\n          <h1>{{dish.name | uppercase}}</h1>\n        </mat-grid-tile-footer>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n\n<div [hidden]=\"dishes || errMess\">\n  <mat-spinner></mat-spinner><h4>Loading . . . Please Wait</h4>\n</div>\n<div fxFlex *ngIf=\"errMess\">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/about/about.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
            /* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent(leaderService, baseURL) {
                    this.leaderService = leaderService;
                    this.baseURL = baseURL;
                }
                AboutComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.leaderService.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; });
                };
                return AboutComponent;
            }());
            AboutComponent.ctorParameters = function () { return [
                { type: _services_leader_service__WEBPACK_IMPORTED_MODULE_2__["LeaderService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BaseURL',] }] }
            ]; };
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    host: {
                        '[@flyInOut]': 'true',
                        'style': 'display: block;'
                    },
                    animations: [
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL'))
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/animations/app.animation.ts": 
        /*!*********************************************!*\
          !*** ./src/app/animations/app.animation.ts ***!
          \*********************************************/
        /*! exports provided: visibility, flyInOut, expand */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibility", function () { return visibility; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function () { return flyInOut; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expand", function () { return expand; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function visibility() {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1.0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(0.5)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out'))
                ]);
            }
            function flyInOut() {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]);
            }
            function expand() {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-50%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateX(0)' }))
                    ])
                ]);
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing/app-routing.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/app-routing/app-routing.module.ts ***!
          \***************************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_4__["routes"])
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app-routing/routes.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing/routes.ts ***!
          \***************************************/
        /*! exports provided: routes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
            var routes = [
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
                { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
                { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
                { path: 'dishdetail/:id', component: _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_4__["DishdetailComponent"] },
                { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ];
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'conFusion';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dishdetail/dishdetail.component */ "./src/app/dishdetail/dishdetail.component.ts");
            /* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/dish.service */ "./src/app/services/dish.service.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
            /* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/promotion.service */ "./src/app/services/promotion.service.ts");
            /* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/leader.service */ "./src/app/services/leader.service.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu/shared/baseurl */ "./src/app/menu/shared/baseurl.ts");
            /* harmony import */ var _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
            /* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                        _dishdetail_dishdetail_component__WEBPACK_IMPORTED_MODULE_9__["DishdetailComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                        _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_33__["HighlightDirective"]
                    ],
                    imports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"]
                    ],
                    entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]],
                    providers: [_services_dish_service__WEBPACK_IMPORTED_MODULE_10__["DishService"], _services_promotion_service__WEBPACK_IMPORTED_MODULE_17__["PromotionService"], _services_leader_service__WEBPACK_IMPORTED_MODULE_18__["LeaderService"], _services_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_32__["ProcessHTTPMsgService"], { provide: 'BaseURL', useValue: _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_31__["baseURL"] }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/contact/contact.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: 95%;\n}\n\n.half-width {\n  width: 45%;\n}\n\n.form-size {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJhdGluby9QaHBzdG9ybVByb2plY3RzL2NvdXJzZXJhL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSVcbn1cblxuLmhhbGYtd2lkdGgge1xuICB3aWR0aDogNDUlXG59XG5cbi5mb3JtLXNpemUge1xuICB3aWR0aDogNzUlXG59XG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmZvcm0tc2l6ZSB7XG4gIHdpZHRoOiA3NSU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _menu_shared_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/shared/feedback */ "./src/app/menu/shared/feedback.ts");
            /* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
            /* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/feedback.service */ "./src/app/services/feedback.service.ts");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent(fb, feedbackService) {
                    this.fb = fb;
                    this.feedbackService = feedbackService;
                    this.contactType = _menu_shared_feedback__WEBPACK_IMPORTED_MODULE_3__["ContactType"];
                    this.showSpinner = false;
                    this.formErrors = {
                        'firstname': '',
                        'lastname': '',
                        'telnum': '',
                        'email': ''
                    };
                    this.validationMessages = {
                        'firstname': {
                            'required': 'First Name is required.',
                            'minlength': 'First Name must be at least 2 characters long.',
                            'maxlength': 'FirstName cannot be more than 25 characters long.'
                        },
                        'lastname': {
                            'required': 'Last Name is required.',
                            'minlength': 'Last Name must be at least 2 characters long.',
                            'maxlength': 'Last Name cannot be more than 25 characters long.'
                        },
                        'telnum': {
                            'required': 'Tel. number is required.',
                            'pattern': 'Tel. number must contain only numbers.'
                        },
                        'email': {
                            'required': 'Email is required.',
                            'email': 'Email not in valid format.'
                        },
                    };
                    this.createForm();
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                ContactComponent.prototype.createForm = function () {
                    var _this = this;
                    this.feedbackForm = this.fb.group({
                        firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
                        lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
                        telnum: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern]],
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        agree: false,
                        contacttype: 'None',
                        message: ''
                    });
                    this.feedbackForm.valueChanges
                        .subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                ContactComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.feedback = this.feedbackForm.value;
                    this.showSpinner = true;
                    this.feedbackService.submitFeedback(this.feedback).subscribe(function (feedback) {
                        _this.feedback = feedback;
                        _this.feedbackCopy = feedback;
                    }, function (errmess) { _this.feedback = null; _this.feedbackCopy = null; _this.errMessFeed = errmess; }, function () { console.log("Observable finished"); _this.showSpinner = false; });
                    setTimeout(function () {
                        _this.feedbackCopy = null;
                    }, 5000);
                    this.feedbackForm.reset({
                        firstname: '',
                        lastname: '',
                        telnum: '',
                        email: '',
                        agree: false,
                        contacttype: 'None',
                        message: ''
                    });
                    this.feedbackFormDirective.resetForm();
                };
                ContactComponent.prototype.onValueChanged = function (data) {
                    if (!this.feedbackForm) {
                        return;
                    }
                    var form = this.feedbackForm;
                    for (var field in this.formErrors) {
                        if (this.formErrors.hasOwnProperty(field)) {
                            // clear previous error message (if any)
                            this.formErrors[field] = '';
                            var control = form.get(field);
                            if (control && control.dirty && !control.valid) {
                                var messages = this.validationMessages[field];
                                for (var key in control.errors) {
                                    if (control.errors.hasOwnProperty(key)) {
                                        this.formErrors[field] += messages[key] + ' ';
                                    }
                                }
                            }
                        }
                    }
                };
                return ContactComponent;
            }());
            ContactComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
            ], ContactComponent.prototype, "feedbackFormDirective", void 0);
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    host: {
                        '[@flyInOut]': 'true',
                        'style': 'display: block;'
                    },
                    animations: [
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["expand"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])()
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/directives/highlight.directive.ts": 
        /*!***************************************************!*\
          !*** ./src/app/directives/highlight.directive.ts ***!
          \***************************************************/
        /*! exports provided: HighlightDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () { return HighlightDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HighlightDirective = /** @class */ (function () {
                function HighlightDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                }
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.renderer.addClass(this.el.nativeElement, 'highlight');
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.renderer.removeClass(this.el.nativeElement, 'highlight');
                };
                return HighlightDirective;
            }());
            HighlightDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
            ], HighlightDirective.prototype, "onMouseEnter", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
            ], HighlightDirective.prototype, "onMouseLeave", null);
            HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appHighlight]'
                })
            ], HighlightDirective);
            /***/ 
        }),
        /***/ "./src/app/dishdetail/dishdetail.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/dishdetail/dishdetail.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".full-width {\n  width: 95%;\n}\n\n.half-width {\n  width: 45%;\n}\n\n.form-size {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJhdGluby9QaHBzdG9ybVByb2plY3RzL2NvdXJzZXJhL3NyYy9hcHAvZGlzaGRldGFpbC9kaXNoZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXNoZGV0YWlsL2Rpc2hkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSVcbn1cblxuLmhhbGYtd2lkdGgge1xuICB3aWR0aDogNDUlXG59XG5cbi5mb3JtLXNpemUge1xuICB3aWR0aDogNzUlXG59XG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuLmZvcm0tc2l6ZSB7XG4gIHdpZHRoOiA3NSU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/dishdetail/dishdetail.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/dishdetail/dishdetail.component.ts ***!
          \****************************************************/
        /*! exports provided: DishdetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishdetailComponent", function () { return DishdetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
            var DishdetailComponent = /** @class */ (function () {
                function DishdetailComponent(dishService, route, location, fb, baseURL) {
                    this.dishService = dishService;
                    this.route = route;
                    this.location = location;
                    this.fb = fb;
                    this.baseURL = baseURL;
                    this.visibility = 'shown';
                    this.formErrors = {
                        'author': '',
                        'comment': ''
                    };
                    this.validationMessages = {
                        'author': {
                            'required': 'Author Name is required.',
                            'minlength': 'Author Name must be at least 2 characters long.',
                            'maxlength': 'Author cannot be more than 25 characters long.'
                        },
                        'comment': {
                            'required': 'Comment description is required.',
                            'minlength': 'Comment description must be at least 2 characters long.',
                        }
                    };
                }
                DishdetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.createForm();
                    this.dishService.getDishIds().subscribe(function (dishIds) { return _this.dishIds = dishIds; }, function (errmess) { return _this.errMess = errmess; });
                    this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
                        _this.visibility = 'hidden';
                        return _this.dishService.getDish(params['id']);
                    }))
                        .subscribe(function (dish) {
                        _this.dish = dish;
                        _this.dishcopy = _this.dish;
                        _this.visibility = 'shown';
                        return _this.setPrevNext(_this.dish.id);
                    }, function (errmess) { return _this.errMess = errmess; });
                };
                DishdetailComponent.prototype.goBack = function () {
                    this.location.back();
                };
                DishdetailComponent.prototype.setPrevNext = function (dishId) {
                    var index = this.dishIds.indexOf(dishId);
                    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
                    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
                };
                DishdetailComponent.prototype.createForm = function () {
                    var _this = this;
                    this.commentForm = this.fb.group({
                        author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(25)]],
                        rating: [5],
                        comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2)]],
                    });
                    this.commentForm.valueChanges
                        .subscribe(function (data) { return _this.onValueChanged(data); });
                    this.onValueChanged(); // (re)set validation messages now
                };
                DishdetailComponent.prototype.formatLabel = function (value) {
                    if (value) {
                        return value;
                    }
                };
                DishdetailComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.comment = this.commentForm.value;
                    var now = new Date();
                    this.comment.date = now.toISOString();
                    this.dish.comments.push(this.comment);
                    this.dishcopy.comments.push(this.comment);
                    this.dishService.putDish(this.dishcopy)
                        .subscribe(function (dish) {
                        _this.dish = dish;
                        _this.dishcopy = dish;
                    }, function (errmess) { _this.dish = null; _this.dishcopy = null; _this.errMess = errmess; });
                    this.commentFormDirective.resetForm();
                    this.commentForm.controls['rating'].setValue(5);
                };
                DishdetailComponent.prototype.onValueChanged = function (data) {
                    if (!this.commentForm) {
                        return;
                    }
                    var form = this.commentForm;
                    for (var field in this.formErrors) {
                        if (this.formErrors.hasOwnProperty(field)) {
                            // clear previous error message (if any)
                            this.formErrors[field] = '';
                            var control = form.get(field);
                            if (control && control.dirty && !control.valid) {
                                var messages = this.validationMessages[field];
                                for (var key in control.errors) {
                                    if (control.errors.hasOwnProperty(key)) {
                                        this.formErrors[field] += messages[key] + ' ';
                                    }
                                }
                            }
                        }
                    }
                };
                return DishdetailComponent;
            }());
            DishdetailComponent.ctorParameters = function () { return [
                { type: _services_dish_service__WEBPACK_IMPORTED_MODULE_4__["DishService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BaseURL',] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
            ], DishdetailComponent.prototype, "commentFormDirective", void 0);
            DishdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dishdetail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dishdetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dishdetail/dishdetail.component.html")).default,
                    animations: [
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["visibility"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["flyInOut"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_7__["expand"])()
                    ],
                    host: {
                        '[@flyInOut]': 'true',
                        'style': 'display: block;'
                    },
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dishdetail.component.scss */ "./src/app/dishdetail/dishdetail.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL'))
            ], DishdetailComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/footer/footer.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px;\n}\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important;\n}\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important;\n}\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important;\n}\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important;\n}\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important;\n}\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJhdGluby9QaHBzdG9ybVByb2plY3RzL2NvdXJzZXJhL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLHlCQVJnQjtFQUdoQixnQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FEV0E7RUFBZSxzQkFBQTtFQUFzQixvQ0FBQTtBQ05yQzs7QURPQTtFQUFpQixzQkFBQTtFQUFxQixvQ0FBQTtBQ0Z0Qzs7QURHQTtFQUFhLHNCQUFBO0VBQXFCLG9DQUFBO0FDRWxDOztBRERBO0VBQWMsc0JBQUE7RUFBcUIsb0NBQUE7QUNNbkM7O0FETEE7RUFBYSxzQkFBQTtFQUFxQixvQ0FBQTtBQ1VsQzs7QURUQTtFQUFVLHNCQUFBO0VBQXFCLG9DQUFBO0FDYy9CIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xuJGJhY2tncm91bmQtZGFyazogIzUxMkRBODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjOTU3NUNEO1xuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcblxuQG1peGluIHplcm8tbWFyZ2luKCRwYWQtdXAtZG93biwgJHBhZC1sZWZ0LXJpZ2h0KSB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6ICRwYWQtdXAtZG93biAkcGFkLWxlZnQtcmlnaHQ7XG59XG5cbi5mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXBhbGU7XG4gIEBpbmNsdWRlIHplcm8tbWFyZ2luKDIwcHgsIDBweCk7XG59XG5cbi5idG4tZmFjZWJvb2sge2NvbG9yOiNmZmYhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTghaW1wb3J0YW50O31cbi5idG4tZ29vZ2xlLXBsdXN7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZGQ0YjM5IWltcG9ydGFudDt9XG4uYnRuLXlvdXR1YmV7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZmY0YjM5IWltcG9ydGFudDt9XG4uYnRuLWxpbmtlZGlue2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzAwN2JiNiFpbXBvcnRhbnQ7fVxuLmJ0bi10d2l0dGVye2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzU1YWNlZSFpbXBvcnRhbnQ7fVxuLmJ0bi1tYWlse2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzUxMkRBOCFpbXBvcnRhbnQ7fVxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMUM0RTk7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWdvb2dsZS1wbHVzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXlvdXR1YmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjM5ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbGlua2VkaW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmI2ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tdHdpdHRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1tYWlsIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxMkRBOCAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/header/header.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".active {\n  background: #4527A0;\n}\n\n.jumbotron {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJhdGluby9QaHBzdG9ybVByb2plY3RzL2NvdXJzZXJhL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLG1CQUhvQjtBQ0Z0Qjs7QURZQTtFQUpFLGdCQUFBO0VBQ0Esa0JBQUE7RUFLQSxtQkFkaUI7RUFlakIsa0JBQUE7RUFDQSxpQkFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xuJGJhY2tncm91bmQtZGFyazogIzUxMkRBODtcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjOTU3NUNEO1xuJGJhY2tncm91bmQtcGFsZTogI0QxQzRFOTtcbiRiYWNrZ3JvdW5kLW1vcmVkYXJrOiAjNDUyN0EwO1xuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtbW9yZWRhcms7XG59XG5AbWl4aW4gemVyby1tYXJnaW4oJHBhZC11cC1kb3duLCAkcGFkLWxlZnQtcmlnaHQpIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcGFkZGluZzogJHBhZC11cC1kb3duICRwYWQtbGVmdC1yaWdodDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIEBpbmNsdWRlIHplcm8tbWFyZ2luKDcwcHgsMzBweCk7XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWxpZ2h0IDtcbiAgY29sb3I6ZmxvcmFsd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuIiwiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM0NTI3QTA7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwYWRkaW5nOiA3MHB4IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5NTc1Q0Q7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(dialog) {
                    this.dialog = dialog;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.openLoginForm = function () {
                    this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], { width: "500px", height: "450px" });
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
            /* harmony import */ var _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/promotion.service */ "./src/app/services/promotion.service.ts");
            /* harmony import */ var _services_leader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/leader.service */ "./src/app/services/leader.service.ts");
            /* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(dishservice, promotionservice, leaderservice, baseURL) {
                    this.dishservice = dishservice;
                    this.promotionservice = promotionservice;
                    this.leaderservice = leaderservice;
                    this.baseURL = baseURL;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dishservice.getFeaturedDish().subscribe(function (dish) { return _this.dish = dish; }, function (disherrmess) { return _this.dishErrMess = disherrmess; });
                    this.promotionservice.getFeaturedPromotion().subscribe(function (promotion) { return _this.promotion = promotion; }, function (promoerrmess) { return _this.promoErrMess = promoerrmess; });
                    this.leaderservice.getFeaturedLeader().subscribe(function (leader) { return _this.leader = leader; }, function (leadererrmess) { return _this.leaderErrMess = leadererrmess; });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"] },
                { type: _services_promotion_service__WEBPACK_IMPORTED_MODULE_3__["PromotionService"] },
                { type: _services_leader_service__WEBPACK_IMPORTED_MODULE_4__["LeaderService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BaseURL',] }] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    host: {
                        '[@flyInOut]': 'true',
                        'style': 'display: block;'
                    },
                    animations: [
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_5__["flyInOut"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_5__["expand"])()
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL'))
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                    this.user = { username: "", password: "", remember: false };
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmit = function () {
                    console.log('User:', this.user);
                    this.dialogRef.close();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/menu/menu.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: 20px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWJhdGluby9QaHBzdG9ybVByb2plY3RzL2NvdXJzZXJhL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTpmbGV4O1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/menu/menu.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/menu/menu.component.ts ***!
          \****************************************/
        /*! exports provided: MenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function () { return MenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_dish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dish.service */ "./src/app/services/dish.service.ts");
            /* harmony import */ var _animations_app_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/app.animation */ "./src/app/animations/app.animation.ts");
            var MenuComponent = /** @class */ (function () {
                function MenuComponent(dishService, baseURL) {
                    this.dishService = dishService;
                    this.baseURL = baseURL;
                }
                MenuComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dishService.getDishes().subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
                };
                return MenuComponent;
            }());
            MenuComponent.ctorParameters = function () { return [
                { type: _services_dish_service__WEBPACK_IMPORTED_MODULE_2__["DishService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BaseURL',] }] }
            ]; };
            MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
                    host: {
                        '[@flyInOut]': 'true',
                        'style': 'display: block;'
                    },
                    animations: [
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["flyInOut"])(),
                        Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_3__["expand"])()
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BaseURL'))
            ], MenuComponent);
            /***/ 
        }),
        /***/ "./src/app/menu/shared/baseurl.ts": 
        /*!****************************************!*\
          !*** ./src/app/menu/shared/baseurl.ts ***!
          \****************************************/
        /*! exports provided: baseURL */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function () { return baseURL; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var baseURL = 'https://course-json-server.herokuapp.com/';
            /***/ 
        }),
        /***/ "./src/app/menu/shared/feedback.ts": 
        /*!*****************************************!*\
          !*** ./src/app/menu/shared/feedback.ts ***!
          \*****************************************/
        /*! exports provided: Feedback, ContactType */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function () { return Feedback; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactType", function () { return ContactType; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Feedback = /** @class */ (function () {
                function Feedback() {
                }
                return Feedback;
            }());
            var ContactType = ['None', 'Email', 'Tel'];
            /***/ 
        }),
        /***/ "./src/app/services/dish.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/dish.service.ts ***!
          \******************************************/
        /*! exports provided: DishService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishService", function () { return DishService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/shared/baseurl */ "./src/app/menu/shared/baseurl.ts");
            /* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
            var DishService = /** @class */ (function () {
                function DishService(http, processHTTPMsgService) {
                    this.http = http;
                    this.processHTTPMsgService = processHTTPMsgService;
                }
                DishService.prototype.getDishes = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                DishService.prototype.getDish = function (id) {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes/' + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                DishService.prototype.getFeaturedDish = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dishes) { return dishes[0]; }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                DishService.prototype.getDishIds = function () {
                    return this.getDishes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dishes) { return dishes.map(function (dish) { return dish.id; }); }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
                };
                DishService.prototype.putDish = function (dish) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                    return this.http.put(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'dishes/' + dish.id, dish, httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                return DishService;
            }());
            DishService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"] }
            ]; };
            DishService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DishService);
            /***/ 
        }),
        /***/ "./src/app/services/feedback.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/feedback.service.ts ***!
          \**********************************************/
        /*! exports provided: FeedbackService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function () { return FeedbackService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/shared/baseurl */ "./src/app/menu/shared/baseurl.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
            var FeedbackService = /** @class */ (function () {
                function FeedbackService(http, processHTTPMsgService) {
                    this.http = http;
                    this.processHTTPMsgService = processHTTPMsgService;
                }
                FeedbackService.prototype.submitFeedback = function (feedback) {
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                    return this.http.post(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'feedback', feedback, httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processHTTPMsgService.handleError));
                };
                return FeedbackService;
            }());
            FeedbackService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"] }
            ]; };
            FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FeedbackService);
            /***/ 
        }),
        /***/ "./src/app/services/leader.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/leader.service.ts ***!
          \********************************************/
        /*! exports provided: LeaderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderService", function () { return LeaderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/shared/baseurl */ "./src/app/menu/shared/baseurl.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
            var LeaderService = /** @class */ (function () {
                function LeaderService(http, processHTTPMsgService) {
                    this.http = http;
                    this.processHTTPMsgService = processHTTPMsgService;
                }
                LeaderService.prototype.getLeaders = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'leadership')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                LeaderService.prototype.getLeader = function (id) {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'leadership/' + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                LeaderService.prototype.getFeaturedLeader = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'leadership?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (leaders) { return leaders[0]; }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                return LeaderService;
            }());
            LeaderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_5__["ProcessHTTPMsgService"] }
            ]; };
            LeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LeaderService);
            /***/ 
        }),
        /***/ "./src/app/services/process-httpmsg.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/process-httpmsg.service.ts ***!
          \*****************************************************/
        /*! exports provided: ProcessHTTPMsgService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function () { return ProcessHTTPMsgService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ProcessHTTPMsgService = /** @class */ (function () {
                function ProcessHTTPMsgService() {
                }
                ProcessHTTPMsgService.prototype.handleError = function (error) {
                    var errMsg;
                    if (error.error instanceof ErrorEvent) {
                        errMsg = error.error.message;
                    }
                    else {
                        errMsg = error.status + " - " + (error.statusText || '') + " " + error.error;
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg);
                };
                return ProcessHTTPMsgService;
            }());
            ProcessHTTPMsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProcessHTTPMsgService);
            /***/ 
        }),
        /***/ "./src/app/services/promotion.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/promotion.service.ts ***!
          \***********************************************/
        /*! exports provided: PromotionService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function () { return PromotionService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-httpmsg.service */ "./src/app/services/process-httpmsg.service.ts");
            /* harmony import */ var _menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/shared/baseurl */ "./src/app/menu/shared/baseurl.ts");
            var PromotionService = /** @class */ (function () {
                function PromotionService(http, processHTTPMsgService) {
                    this.http = http;
                    this.processHTTPMsgService = processHTTPMsgService;
                }
                PromotionService.prototype.getPromotions = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                PromotionService.prototype.getPromotion = function (id) {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions/' + id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                PromotionService.prototype.getFeaturedPromotion = function () {
                    return this.http.get(_menu_shared_baseurl__WEBPACK_IMPORTED_MODULE_5__["baseURL"] + 'promotions?featured=true').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (promotions) { return promotions[0]; }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.processHTTPMsgService.handleError));
                };
                return PromotionService;
            }());
            PromotionService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_4__["ProcessHTTPMsgService"] }
            ]; };
            PromotionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PromotionService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/sabatino/PhpstormProjects/coursera/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map