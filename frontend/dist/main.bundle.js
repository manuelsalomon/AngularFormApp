webpackJsonp([1,4],{

/***/ 1023:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(436);


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POSTS_GET; });
/* unused harmony export POST_GET */
/* unused harmony export POST_NEW */
/* unused harmony export POST_EDIT */
/* unused harmony export POST_DELETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_VALIDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return USER_LOGOUT; });
/* unused harmony export COMMENT_NEW */
/* unused harmony export COMMENT_EDIT */
/* unused harmony export COMMENT_DELETE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPosts; });
/* unused harmony export getPost */
/* unused harmony export editPost */
/* unused harmony export deletePost */
/* unused harmony export newPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return userError; });
/* unused harmony export newComment */
/* unused harmony export editComment */
/* unused harmony export deleteComment */
// posts actions
var POSTS_GET = 'POSTS_GET';
var POST_GET = 'POST_GET';
var POST_NEW = 'POST_NEW';
var POST_EDIT = 'POST_EDIT';
var POST_DELETE = "POST_DELETE";
// users actions:
var USER_VALIDATE = 'USER_VALIDATE';
var USER_ERROR = 'USER_ERROR';
var USER_REGISTER = 'USER_REGISTER';
var USER_LOGIN = 'USER_LOGIN';
var USER_LOGOUT = 'USER_LOGOUT';
// comments actions:
var COMMENT_NEW = 'COMMENT_NEW';
var COMMENT_EDIT = 'COMMENT_EDIT';
var COMMENT_DELETE = 'COMMENT_DELETE';
// interfaces:
// action creators:
var userValidate = function (status) {
    return {
        type: USER_VALIDATE,
        status: status
    };
};
// posts:
var getPosts = function (posts) {
    return {
        type: POSTS_GET,
        posts: posts
    };
};
var getPost = function (postId) {
    return {
        type: POST_GET,
        postId: postId
    };
};
var editPost = function (postId) {
    return {
        type: POST_EDIT,
        postId: postId
    };
};
var deletePost = function (postId) {
    return {
        type: POST_DELETE,
        postId: postId
    };
};
var newPost = function (title, body, author) {
    return {
        type: POST_NEW,
        title: title,
        body: body,
        author: author
    };
};
var registerUser = function (obj) {
    return {
        type: USER_REGISTER,
        username: obj.username,
        name: obj.name,
        _id: obj._id
    };
};
var userLogin = function (obj) {
    return {
        type: USER_LOGIN,
        username: obj.username,
        name: obj.name,
        _id: obj._id
    };
};
var logout = function () {
    return {
        type: USER_LOGOUT
    };
};
var userError = function (error) {
    return {
        type: USER_ERROR,
        error: true,
        errorMessage: error
    };
};
// comments actions:
var newComment = function (body) {
    return {
        type: COMMENT_NEW,
        body: body,
    };
};
var editComment = function (_id) {
    return {
        type: COMMENT_EDIT,
        _id: _id
    };
};
var deleteComment = function (_id, newBody) {
    return {
        type: COMMENT_DELETE,
        _id: _id,
        newBody: newBody
    };
};
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/actions.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_actions__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_store__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ValidateUserService = (function () {
    function ValidateUserService(store) {
        this.store = store;
    }
    ValidateUserService.prototype.validateUser = function (res) {
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_1__redux_actions__["a" /* userValidate */](res.status));
    };
    ValidateUserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__redux_store__["a" /* AppStore */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_redux__["Store"]) === 'function' && _a) || Object])
    ], ValidateUserService);
    return ValidateUserService;
    var _a;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/validate-user.service.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 435;


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(554);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/main.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mycombinereducer__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStore; });


var store = __WEBPACK_IMPORTED_MODULE_0__mycombinereducer__["a" /* default */];
var AppStore = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* OpaqueToken */]('app.store');
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/store.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = (function () {
    function AppComponent(backend, http, backUrl, store) {
        this.backend = backend;
        this.http = http;
        this.backUrl = backUrl;
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.backend.getPosts();
        // this.http.get(this.backUrl+'/users/validate', {withCredentials: true})
        // .subscribe( (res:any)=> {
        //   console.log(res);
        //   this.store.dispatch(AppActions.userValidate(res))
        // }
        // )
        // this.store.dispatch(AppActions.getPosts())
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(739),
            styles: [__webpack_require__(729)],
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__backend_service__["b" /* BackendAdress */])),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__redux_store__["a" /* AppStore */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, String, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_redux__["Store"]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/app.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validate_user_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_list_post_list_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_post_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__coment_coment_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_sign_user_sign_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__postform_postform_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__new_comment_new_comment_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_comment_edit_comment_component__ = __webpack_require__(556);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_8__post_list_post_list_component__["a" /* PostListComponent */] },
    { path: "signin", component: __WEBPACK_IMPORTED_MODULE_13__user_sign_user_sign_component__["a" /* UserSignComponent */] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */] },
    { path: "post/:id", component: __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */] },
    { path: "newpost", component: __WEBPACK_IMPORTED_MODULE_14__postform_postform_component__["a" /* PostformComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__post_list_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__coment_coment_component__["a" /* ComentComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_sign_user_sign_component__["a" /* UserSignComponent */],
                __WEBPACK_IMPORTED_MODULE_14__postform_postform_component__["a" /* PostformComponent */],
                __WEBPACK_IMPORTED_MODULE_16__new_comment_new_comment_component__["a" /* NewCommentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_comment_edit_comment_component__["a" /* EditCommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__backend_service__["a" /* BackendService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__backend_service__["b" /* BackendAdress */], useValue: __WEBPACK_IMPORTED_MODULE_4__backend_service__["b" /* BackendAdress */] },
                { provide: __WEBPACK_IMPORTED_MODULE_15__redux_store__["a" /* AppStore */], useValue: __WEBPACK_IMPORTED_MODULE_15__redux_store__["b" /* store */] },
                __WEBPACK_IMPORTED_MODULE_5__validate_user_service__["a" /* ValidateUserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComentComponent = (function () {
    function ComentComponent() {
    }
    ComentComponent.prototype.ngOnInit = function () {
    };
    ComentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'coment',
            template: __webpack_require__(740),
            styles: [__webpack_require__(730)],
            inputs: ['comment']
        }), 
        __metadata('design:paramtypes', [])
    ], ComentComponent);
    return ComentComponent;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/coment.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditCommentComponent = (function () {
    function EditCommentComponent() {
    }
    EditCommentComponent.prototype.ngOnInit = function () {
    };
    EditCommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-edit-comment',
            template: __webpack_require__(741),
            styles: [__webpack_require__(731)]
        }), 
        __metadata('design:paramtypes', [])
    ], EditCommentComponent);
    return EditCommentComponent;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/edit-comment.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(obj) {
        this.postId = obj._id;
        this.author = obj.author;
        this.title = obj.title;
        this.body = obj.body;
        this.comments = obj.comments;
        this.date = obj.date;
        this.isOwner = obj.isOwner;
    }
    return Post;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/post.model.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(57);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NavbarComponent = (function () {
    function NavbarComponent(backend, store) {
        this.backend = backend;
        this.store = store;
        this.error = false;
        this.errorMessage = '';
        this.isLogged = false;
        this.username = null;
        this.name = null;
        this._id = null;
        this.readState();
    }
    NavbarComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.isLogged = state['UserReducer'].isLogged;
        this.error = state['UserReducer'].error;
        this.errorMessage = state['UserReducer'].errorMessage;
        this.username = state['UserReducer'].username;
        this.name = state['UserReducer'].name;
        this._id = state['UserReducer']._id;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function () {
            _this.readState();
        });
    };
    NavbarComponent.prototype.userLogin = function (username, password) {
        this.backend.userLogin(username, password);
    };
    NavbarComponent.prototype.logout = function () {
        this.backend.userLogout();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(742),
            styles: [__webpack_require__(732)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */])),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__redux_store__["a" /* AppStore */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_redux__["Store"]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/navbar.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var NewCommentComponent = (function () {
    function NewCommentComponent(backend, store, router) {
        this.backend = backend;
        this.store = store;
        this.router = router;
        // this.readState();
    }
    NewCommentComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.username = state['UserReducer'].username;
        this.userId = state['UserReducer']._id;
    };
    NewCommentComponent.prototype.newComment = function (body, postId) {
        console.log(body, postId);
        this.backend.newComment(body, postId);
        this.router.navigate(['/home']);
    };
    NewCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readState();
        this.store.subscribe(function () {
            _this.readState();
        });
    };
    NewCommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'new-comment',
            template: __webpack_require__(743),
            styles: [__webpack_require__(733)],
            inputs: ['post1']
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */])),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__redux_store__["a" /* AppStore */])),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_redux__["Store"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NewCommentComponent);
    return NewCommentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/new-comment.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PostListComponent = (function () {
    function PostListComponent(store, ref) {
        this.store = store;
        this.ref = ref;
        this.readState();
    }
    PostListComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.currentPosts = state['PostReducer'].posts;
        console.log('current posts', this.currentPosts);
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function () {
            _this.readState();
            _this.ref.detectChanges();
        });
    };
    PostListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'post-list',
            template: __webpack_require__(744),
            styles: [__webpack_require__(734)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__redux_store__["a" /* AppStore */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_redux__["Store"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */]) === 'function' && _b) || Object])
    ], PostListComponent);
    return PostListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/post-list.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PostComponent = (function () {
    function PostComponent(ref, backend) {
        this.ref = ref;
        this.backend = backend;
        this.clicked = false;
        this.edit = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.ref.detectChanges();
    };
    PostComponent.prototype.deletePost = function (postId) {
        this.backend.deletePost(postId);
    };
    PostComponent.prototype.editPost = function (postId, body, title) {
        this.backend.editPost(postId, body, title);
    };
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'post',
            template: __webpack_require__(745),
            styles: [__webpack_require__(735)],
            inputs: ['post']
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ChangeDetectorRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backend_service__["a" /* BackendService */]) === 'function' && _b) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/post.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_service__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PostformComponent = (function () {
    function PostformComponent(store, backend) {
        this.store = store;
        this.backend = backend;
    }
    PostformComponent.prototype.ngOnInit = function () {
    };
    PostformComponent.prototype.sendPost = function (title, text) {
        console.log('title', title, 'text', text);
        this.backend.newPost(title, text);
    };
    PostformComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'postform',
            template: __webpack_require__(746),
            styles: [__webpack_require__(736)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__redux_store__["a" /* AppStore */])),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__backend_service__["a" /* BackendService */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_redux__["Store"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__backend_service__["a" /* BackendService */]) === 'function' && _b) || Object])
    ], PostformComponent);
    return PostformComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/postform.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_reducer__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_reducer__ = __webpack_require__(564);



var devTools = window["devToolsExtension"] ?
    window["devToolsExtension"]() : function (f) { return f; };
/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* createStore */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({ UserReducer: __WEBPACK_IMPORTED_MODULE_1__user_reducer__["a" /* UserReducer */], PostReducer: __WEBPACK_IMPORTED_MODULE_2__post_reducer__["a" /* PostReducer */] }), devTools);
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/mycombinereducer.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostReducer; });

var postInitialState = {
    posts: [],
    currentPost: {
        post: null,
        commentsAmmount: 0
    }
};
var PostReducer = function (state, action) {
    if (state === void 0) { state = postInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* POSTS_GET */]:
            var newPosts = Object.assign({}, state);
            newPosts.posts = action.posts;
            return newPosts;
        default:
            return state;
    }
};
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/post.reducer.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReducer; });

var userInitialState = {
    isLogged: false,
    _id: null,
    username: null,
    name: null,
    imgUrl: null,
    errorMessage: null,
    error: false,
};
var UserReducer = function (state, action) {
    if (state === void 0) { state = userInitialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* USER_VALIDATE */]:
            var validate = Object.assign({}, state);
            if (action.status.isLogged) {
                validate.isLogged = action.status.isLogged;
                validate.username = action.status.username;
                validate._id = action._id;
            }
            else {
                validate.isLogged = false;
                validate.username = null;
                validate._id = null;
            }
            return validate;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* USER_ERROR */]:
            var error = Object.assign({}, state);
            error.error = true;
            error.errorMessage = action.errorMessage;
            return error;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* USER_REGISTER */]:
            var register = Object.assign({}, state);
            register.isLogged = true;
            register.username = action.username;
            register.name = action.name;
            register._id = action._id;
            return register;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["f" /* USER_LOGIN */]:
            var login = Object.assign({}, state);
            login.isLogged = true;
            login.username = action.username;
            login.name = action.name;
            login._id = action._id;
            return login;
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* USER_LOGOUT */]:
            var logout = Object.assign({}, state);
            logout.isLogged = false;
            logout.username = null;
            logout.name = null;
            logout._id = null;
            return logout;
        default:
            return state;
    }
};
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/user.reducer.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserSignComponent = (function () {
    function UserSignComponent(backend, store, router) {
        this.backend = backend;
        this.store = store;
        this.router = router;
        this.error = false;
        this.errorMessage = '';
        this.isLogged = false;
        this.readState();
    }
    UserSignComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.error = state['UserReducer'].error;
        this.errorMessage = state['UserReducer'].errorMessage;
        this.isLogged = state['UserReducer'].isLogged;
        console.log(this.error, 'this error');
        if (this.isLogged) {
            this.router.navigate(['/home']);
        }
    };
    UserSignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function () {
            _this.readState();
        });
    };
    UserSignComponent.prototype.newUser = function (name, username, pass, passConfirm) {
        this.backend.userRegister(name, username, pass, passConfirm);
    };
    UserSignComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-user-sign',
            template: __webpack_require__(747),
            styles: [__webpack_require__(737)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */])),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__redux_store__["a" /* AppStore */])),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__backend_service__["a" /* BackendService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_redux__["Store"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], UserSignComponent);
    return UserSignComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/user-sign.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'user',
            template: __webpack_require__(748),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/user.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/environment.js.map

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = ".one-comment-container{\n  display: block;\n  margin: 0 auto;\n}\n.user-photo{\n  max-width: 85px;\n}\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width:768px){\r\n    .navbar-brand-centered {\r\n        position: absolute;\r\n        left: 50%;\r\n        display: block;\r\n        width: 160px;\r\n        text-align: center;\r\n        background-color: #eee;\r\n    }\r\n    .navbar>.container .navbar-brand-centered,\r\n    .navbar>.container-fluid .navbar-brand-centered {\r\n        margin-left: -80px;\r\n    }\r\n}\r\n.login-buttons li{\r\n  display: inline-block;\r\n}\r\n.btn{\r\n  margin-top: 7px\r\n}\r\n"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "body, html{\n     height: 100%;\n     background-repeat: no-repeat;\n     background-color: #d3d3d3;\n     font-family: 'Oxygen', sans-serif;\n}\n\n.main{\n     margin-top: 70px;\n}\n\nh1.title {\n    font-size: 50px;\n    font-family: 'Passion One', cursive;\n    font-weight: 400;\n}\n\nhr{\n    width: 10%;\n    color: #fff;\n}\n\n.form-group{\n    margin-bottom: 15px;\n}\n\nlabel{\n    margin-bottom: 15px;\n}\n\ninput,\ninput::-webkit-input-placeholder {\n    font-size: 11px;\n    padding-top: 3px;\n}\n\n.main-login{\n     background-color: #fff;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n\n}\n\n.main-center{\n     margin-top: 30px;\n     margin: 0 auto;\n     max-width: 330px;\n    padding: 40px 40px;\n\n}\n\n.login-button{\n    margin-top: 5px;\n}\n\n.login-register{\n    font-size: 11px;\n    text-align: center;\n}\n"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "/*\r\n/* Created by Filipe Pina\r\n * Specific styles of signin, register, component\r\n */\r\n/*\r\n * General styles\r\n */\r\n\r\nbody, html{\r\n     height: 100%;\r\n \tbackground-repeat: no-repeat;\r\n \tbackground-color: #d3d3d3;\r\n \tfont-family: 'Oxygen', sans-serif;\r\n}\r\n\r\n.main{\r\n \tmargin-top: 70px;\r\n}\r\n\r\nh1.title {\r\n\tfont-size: 50px;\r\n\tfont-family: 'Passion One', cursive;\r\n\tfont-weight: 400;\r\n}\r\n\r\nhr{\r\n\twidth: 10%;\r\n\tcolor: #fff;\r\n}\r\n\r\n.form-group{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\nlabel{\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n    font-size: 11px;\r\n    padding-top: 3px;\r\n}\r\n\r\n.main-login{\r\n \tbackground-color: #fff;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n\r\n.main-center{\r\n \tmargin-top: 30px;\r\n \tmargin: 0 auto;\r\n \tmax-width: 330px;\r\n    padding: 40px 40px;\r\n\r\n}\r\n\r\n.login-button{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.login-register{\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n}\r\n.loginError{\r\n  color: crimson;\r\n}\r\n"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "body{padding-top:30px;}\r\n\r\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\r\n\r\nsmall {\r\ndisplay: block;\r\nline-height: 1.428571429;\r\ncolor: #999;\r\n}"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n\t<div class=\"col-sm-2\">\n\t<div class=\"thumbnail\">\n\t<img class=\"img-responsive user-photo\" src=\"https://ssl.gstatic.com/accounts/ui/avatar_2x.png\">\n\t</div><!-- /thumbnail -->\n\t</div><!-- /col-sm-1 -->\n\n\t<div class=\"col-sm-10\">\n\t<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t<strong>{{comment.author}}</strong> <span class=\"text-muted\">{{comment.date}}</span>\n\t</div>\n\t<div class=\"panel-body\">\n\t{{comment.body}}\n\t</div><!-- /panel-body -->\n\t</div><!-- /panel panel-default -->\n\t</div><!-- /col-sm-5 -->\n</div>\n"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"col-sm-1\">\n\t<div class=\"thumbnail\">\n\t<img class=\"img-responsive user-photo\" width=\"50px\" src=\"https://ssl.gstatic.com/accounts/ui/avatar_2x.png\">\n\t</div><!-- /thumbnail -->\n\t</div><!-- /col-sm-1 -->\n\n\t<div class=\"col-sm-5\">\n\t<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t<strong>Commenting as:</strong> <span class=\"text-muted\">{{ username || 'Guest'}}</span>\n\t</div>\n\t<div class=\"panel-body\">\n\t<textarea class=\"form-control\" placeholder=\"Commentario...\" #commentBody ></textarea>\n\t</div><!-- /panel-body -->\n  <button class=\"btn\" (click)=\"newComment(commentBody.value, post1.postId)\">OK</button>\n\t</div><!-- /panel panel-default -->\n\t</div><!-- /col-sm-5 -->\n</div>\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "        <nav class=\"navbar navbar-default\" role=\"navigation\">\n    \t  <div class=\"container\">\n\t\t    <!-- Brand and toggle get grouped for better mobile display -->\n\t\t    <div class=\"navbar-header\">\n\t\t      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-brand-centered\">\n\t\t        <span class=\"sr-only\">Toggle navigation</span>\n\t\t        <span class=\"icon-bar\"></span>\n\t\t        <span class=\"icon-bar\"></span>\n\t\t        <span class=\"icon-bar\"></span>\n\t\t      </button>\n\t\t      <div class=\"navbar-brand navbar-brand-left\"><a [routerLink]=\"['/home']\" >Posteeeeer</a></div>\n\t\t    </div>\n\n\t\t    <!-- Collect the nav links, forms, and other content for toggling -->\n\t\t    <div class=\"collapse navbar-collapse\" id=\"navbar-brand-centered\">\n\n\t\t      <ul class=\"nav navbar-nav navbar-right\">\n\n            <div class=\"login-buttons\" *ngIf=\"!isLogged\">\n  \t\t        <li><button class=\"btn\" [routerLink]=\"['/signin']\">Registrarse</button></li>\n  \t\t        <form id=\"signin\" class=\"navbar-form navbar-right\" role=\"form\">\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                              <input #username id=\"user\" type=\"text\" class=\"form-control\" name=\"email\" value=\"\" placeholder=\"Email Address\">\n                          </div>\n\n                          <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                              <input #password id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" value=\"\" placeholder=\"Password\">\n                          </div>\n\n                          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"userLogin(username.value, password.value)\">Login</button>\n                          <p class=\"loginError\">{{errorMessage}}</p>\n                </form>\n              </div>\n              <div class=\"login-buttons\" *ngIf=\"isLogged\">\n                <li><button  class=\"btn\" [routerLink]=\"['/newpost']\">Postear</button></li>\n                <li><button  class=\"btn\" [routerLink]=\"['/user/']\">{{username}}</button></li>\n                <li><button  class=\"btn\" (click)=\"logout()\">Log-out</button></li>\n              </div>\n\t\t      </ul>\n\t\t    </div><!-- /.navbar-collapse -->\n\t\t  </div><!-- /.container-fluid -->\n\t\t</nav>\n"

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div class=\"col-sm-1\">\n\t<div class=\"thumbnail\">\n\t<img class=\"img-responsive user-photo\" width=\"50px\" src=\"https://ssl.gstatic.com/accounts/ui/avatar_2x.png\">\n\t</div><!-- /thumbnail -->\n\t</div><!-- /col-sm-1 -->\n\n\t<div class=\"col-sm-5\">\n\t<div class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t<strong>Commenting as:</strong> <span class=\"text-muted\">{{ username || 'Guest'}}</span>\n\t</div>\n\t<div class=\"panel-body\">\n\t<textarea class=\"form-control\" placeholder=\"Commentario...\" #commentBody ></textarea>\n\t</div><!-- /panel-body -->\n  <button class=\"btn\" (click)=\"newComment(commentBody.value, post1.postId)\">OK</button>\n\t</div><!-- /panel panel-default -->\n\t</div><!-- /col-sm-5 -->\n</div>\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1>Posts</h1>\n\t<post *ngFor=\"let post of currentPosts\" [post]='post'></post>\n\t<!-- <post *ngFor=\"let post of currentPosts\" [post]=\"post\" [(ngModel)]='currentPosts'></post> -->\n</div>\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-12\">\n\t<div *ngIf=\"!edit\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t<h3><strong>{{post.author}}</strong> <span class=\"text-muted\">{{post.title}}</span></h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t{{post.body}}\n\t</div><!-- /panel-body -->\n\t<div class=\"panel-heading\">\n\t\t<a (click)=\"clicked=!clicked\" class=\"btn icon-btn btn-success\"><span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\"></span>Comentar</a>\n\t\t<span *ngIf=\"post.isOwner\">\n\t\t\t<a class=\"btn icon-btn btn-warning\" (click)='edit=!edit'><span class=\"glyphicon btn-glyphicon glyphicon-minus img-circle text-warning\"></span>Editar</a>\n\t\t\t<a class=\"btn icon-btn btn-danger\"(click)=\"deletePost(post.postId)\" ><span class=\"glyphicon btn-glyphicon glyphicon-trash img-circle text-danger\"></span>Eliminar</a>\n\t\t</span>\n\t</div><!-- /panel panel-default -->\n\t</div><!-- /col-sm-5 -->\n\n\t<div *ngIf=\"edit\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t<h3><strong>{{post.author}}</strong> <input #editTitle class=\"form-control\" type=\"text\" placeholder=\"{{post.title}}\" class=\"text-muted\"/></h3>\n\t</div>\n\t<textarea #editBody class=\"panel-body\">\n\t\t{{post.body}}\n\t</textarea><!-- /panel-body -->\n\t<div class=\"panel-heading\">\n\t\t<a (click)=\"editPost(post.postId, editBody.value, editTitle.value)\" class=\"btn icon-btn btn-success\"><span class=\"glyphicon btn-glyphicon glyphicon-plus img-circle text-success\"></span>Editar</a>\n\t</div><!-- /panel panel-default -->\n\t</div><!-- /col-sm-5 -->\n\n<coment *ngFor=\"let comment of post.comments\" [comment]=\"comment\"></coment>\n<new-comment *ngIf=\"clicked\" [post1]=\"post\"></new-comment>\n</div>\n"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-login main-center\">\n                    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n                        <div class=\"form-group\">\n                            <label for=\"name\" class=\"cols-sm-2 control-label\">Titulo</label>\n                            <div class=\"cols-sm-10\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n                                    <input #postTitle type=\"text\" class=\"form-control\" name=\"title\" id=\"title\"  placeholder=\"Enter your Name\"/>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"username\" class=\"cols-sm-2 control-label\">Contenido</label>\n                            <div class=\"cols-sm-10\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n                                    <textarea #postText type=\"text\" class=\"form-control\" name=\"postbody\" id=\"postbody\"  placeholder=\"Enter your Username\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group \">\n                            <button type=\"button\" (click)=\"sendPost(postTitle.value, postText.value)\" class=\"btn btn-primary btn-lg btn-block login-button\">Postear</button>\n                        </div>\n\n                    </form>\n                </div>\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-login main-center\">\n\t\t\t\t\t<form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input #name type=\"text\" class=\"form-control\" name=\"name\" id=\"name\"  placeholder=\"Enter your Name\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input #username type=\"text\" class=\"form-control\" name=\"username\" id=\"username\"  placeholder=\"Enter your Username\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input #pass type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\n\t\t\t\t\t\t\t<div class=\"cols-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n\t\t\t\t\t\t\t\t\t<input #passConfirm type=\"password\" class=\"form-control\" name=\"confirm\" id=\"confirm\"  placeholder=\"Confirm your Password\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<p class='loginError' *ngIf=\"error\">{{errorMessage}}<p>\n\n\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-lg btn-block login-button\"\n\t\t\t\t\t\t\t(click)=\"newUser(name.value, username.value, pass.value, passConfirm.value)\">Register</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n            <div class=\"well well-sm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4\">\n                        <img src=\"http://placehold.it/380x500\" alt=\"\" class=\"img-rounded img-responsive\" />\n                    </div>\n                    <div class=\"col-sm-6 col-md-8\">\n                        <h4>Bhaumik Patel</h4>\n                        <small><cite title=\"San Francisco, USA\">San Francisco, USA <i class=\"glyphicon glyphicon-map-marker\">\n                        </i></cite></small>\n                        <p>\n                            <i class=\"glyphicon glyphicon-envelope\"></i>email@example.com\n                            <br />\n                            <i class=\"glyphicon glyphicon-globe\"></i><a href=\"http://www.jquery2dotnet.com\">www.jquery2dotnet.com</a>\n                            <br />\n                            <i class=\"glyphicon glyphicon-gift\"></i>June 02, 1988</p>\n                        <!-- Split button -->\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-primary\">\n                                Social</button>\n                            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                                <span class=\"caret\"></span><span class=\"sr-only\">Social</span>\n                            </button>\n                            <ul class=\"dropdown-menu\" role=\"menu\">\n                                <li><a href=\"#\">Twitter</a></li>\n                                <li><a href=\"https://plus.google.com/+Jquery2dotnet/posts\">Google +</a></li>\n                                <li><a href=\"https://www.facebook.com/jquery2dotnet\">Facebook</a></li>\n                                <li class=\"divider\"></li>\n                                <li><a href=\"#\">Github</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_actions__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_post_model__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validate_user_service__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BackendAdress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









// Exports:
var BackendAdress = 'http://10.6.6.126:3000';
var BackendService = (function () {
    function BackendService(backUrl, http, store, validate, router) {
        this.backUrl = backUrl;
        this.http = http;
        this.store = store;
        this.validate = validate;
        this.router = router;
        this.results = [];
    }
    BackendService.prototype.testConn = function () {
        // let header = new Headers({mode: 'no-cors'})
        // let reqOptions = new RequestOptions({headers: header})
        return this.http.get(this.backUrl);
    };
    BackendService.prototype.getPosts = function () {
        var _this = this;
        this.results = [];
        this.http.get(this.backUrl, { withCredentials: true })
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            console.log('getposts response', response);
            _this.validate.validateUser(response);
            response.content
                .map(function (item) { return _this.results.push(new __WEBPACK_IMPORTED_MODULE_7__models_post_model__["a" /* Post */](item)); });
        });
        this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["h" /* getPosts */](this.results));
    };
    BackendService.prototype.userRegister = function (name, username, pass, passConfirm) {
        var _this = this;
        var userData = {
            name: name,
            username: username,
            pass: pass,
            passConfirm: passConfirm
        };
        this.http.post(this.backUrl + '/signin', userData)
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            (response.error.error) ? _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["i" /* userError */](response.error.message)) : _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["j" /* registerUser */](response.content));
        });
        this.getPosts();
    };
    BackendService.prototype.userLogin = function (username, pass) {
        var _this = this;
        var userData = {
            username: username,
            pass: pass
        };
        this.http.post(this.backUrl + '/users/login', userData, { withCredentials: true })
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            (response.error.error) ? _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["i" /* userError */](response.error.message)) : _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["k" /* userLogin */](response.content));
            _this.getPosts();
        });
        // this.getPosts();
    };
    BackendService.prototype.newPost = function (title, text) {
        var _this = this;
        var state = this.store.getState();
        var post = {
            date: new Date(),
            title: title,
            body: text,
            author: state['UserReducer'].username
        };
        this.http.post(this.backUrl + '/post', post, { withCredentials: true })
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            console.log(response);
            _this.results.push(new __WEBPACK_IMPORTED_MODULE_7__models_post_model__["a" /* Post */](response.content));
            _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["h" /* getPosts */](_this.results));
        });
        this.router.navigate(['/home']);
        this.getPosts();
    };
    BackendService.prototype.deletePost = function (postId) {
        var _this = this;
        this.http.delete(this.backUrl + '/post/' + postId, { withCredentials: true })
            .subscribe(function (res) {
            _this.router.navigate(['/home']);
            _this.getPosts();
        });
    };
    BackendService.prototype.editPost = function (postId, body, title) {
        var _this = this;
        var postEdit = {
            body: body,
            title: title
        };
        this.http.put(this.backUrl + '/post/' + postId, postEdit, { withCredentials: true })
            .subscribe(function (res) {
            _this.router.navigate(['/home']);
            _this.getPosts();
        });
    };
    BackendService.prototype.userLogout = function () {
        var _this = this;
        this.http.get(this.backUrl + '/users/logout', { withCredentials: true })
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            _this.store.dispatch(__WEBPACK_IMPORTED_MODULE_6__redux_actions__["l" /* logout */]());
            _this.getPosts();
        });
        // this.router.navigate(['/home']);
    };
    BackendService.prototype.newComment = function (body, postId) {
        var _this = this;
        var newComment = {
            body: body,
            postId: postId
        };
        this.http.post(this.backUrl + '/comments', newComment, { withCredentials: true })
            .subscribe(function (res) {
            console.log(res);
            _this.getPosts();
        });
    };
    BackendService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(BackendAdress)),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__redux_store__["a" /* AppStore */])),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__validate_user_service__["a" /* ValidateUserService */])), 
        __metadata('design:paramtypes', [String, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_redux__["Store"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_redux__["Store"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__validate_user_service__["a" /* ValidateUserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__validate_user_service__["a" /* ValidateUserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], BackendService);
    return BackendService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/solano/current/Current Proyects/Plataforma5/bootcamp/24/forumApp/frontend/src/backend.service.js.map

/***/ })

},[1023]);
//# sourceMappingURL=main.bundle.map