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
import { Component, Inject } from '@angular/core';
import { BackendService, BackendAdress } from './backend.service';
import { Http } from '@angular/http';
import * as AppActions from './redux/actions';
import { AppStore } from './redux/store';
var AppComponent = (function () {
    function AppComponent(backend, http, backUrl, store) {
        this.backend = backend;
        this.http = http;
        this.backUrl = backUrl;
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getPosts();
        this.http.get(this.backUrl + '/users/validate', { withCredentials: true })
            .subscribe(function (res) {
            console.log(res);
            _this.store.dispatch(AppActions.userValidate(res));
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
    }),
    __param(2, Inject(BackendAdress)),
    __param(3, Inject(AppStore)),
    __metadata("design:paramtypes", [BackendService, Http, String, Object])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map