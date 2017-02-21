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
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs';
import { AppStore } from './redux/store';
import * as AppActions from './redux/actions';
import { Post } from './models/post.model';
import { ValidateUserService } from './validate-user.service';
export var BackendAdress = 'http://10.6.6.126:3000';
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
                .map(function (item) { return _this.results.push(new Post(item)); });
        });
        this.store.dispatch(AppActions.getPosts(this.results));
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
            (response.error.error) ? _this.store.dispatch(AppActions.userError(response.error.message)) : _this.store.dispatch(AppActions.registerUser(response.content));
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
            console.log("PELOTUDO", response.error.error);
            (response.error.error) ? _this.store.dispatch(AppActions.userError(response.error.message)) : _this.store.dispatch(AppActions.userLogin(response.content));
            _this.getPosts();
        });
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
            _this.results.push(new Post(response.content));
            _this.store.dispatch(AppActions.getPosts(_this.results));
        });
        this.router.navigate(['/home']);
        this.getPosts();
    };
    BackendService.prototype.userLogout = function () {
        var _this = this;
        this.http.get(this.backUrl + '/users/logout', { withCredentials: true })
            .subscribe(function (res) {
            var response = JSON.parse(res._body);
            _this.store.dispatch(AppActions.logout());
            _this.getPosts();
        });
    };
    return BackendService;
}());
BackendService = __decorate([
    Injectable(),
    __param(0, Inject(BackendAdress)),
    __param(2, Inject(AppStore)),
    __param(3, Inject(ValidateUserService)),
    __metadata("design:paramtypes", [String, Http, Object, ValidateUserService,
        Router])
], BackendService);
export { BackendService };
//# sourceMappingURL=../../../src/app/backend.service.js.map