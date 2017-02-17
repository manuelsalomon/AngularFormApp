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
import { Post } from './models/post.model';
import * as AppActions from './redux/actions';
import { AppStore } from './redux/store';
import 'rxjs';
export var BackendAdress = 'http://10.6.6.126:3000';
var BackendService = (function () {
    function BackendService(backUrl, http, store) {
        this.backUrl = backUrl;
        this.http = http;
        this.store = store;
        this.results = [];
    }
    BackendService.prototype.testConn = function () {
        return this.http.get(this.backUrl);
    };
    BackendService.prototype.getPosts = function () {
        var _this = this;
        this.results = [];
        this.http.get(this.backUrl)
            .subscribe(function (res) { return res.json()
            .map(function (item) { return _this.results.push(new Post(item)); }); });
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
            console.log(response.error);
            (response.error) ? _this.store.dispatch(AppActions.userError(response.error)) : _this.store.dispatch(AppActions.registerUser(userData));
        });
    };
    BackendService.prototype.userLogin = function (username, pass) {
        var userData = {
            username: username,
            pass: pass
        };
        this.http.post(this.backUrl + '/users/login', userData)
            .subscribe(function (res) { return res.json().then(function (res) {
            console.log(res);
        }); });
    };
    return BackendService;
}());
BackendService = __decorate([
    Injectable(),
    __param(0, Inject(BackendAdress)), __param(2, Inject(AppStore)),
    __metadata("design:paramtypes", [String, Http, Object])
], BackendService);
export { BackendService };
//# sourceMappingURL=../../../src/app/backend.service.js.map