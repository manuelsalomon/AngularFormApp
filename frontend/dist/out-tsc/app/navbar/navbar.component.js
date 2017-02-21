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
import { BackendService } from '../backend.service';
import { AppStore } from '../redux/store';
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
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: 'navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    }),
    __param(0, Inject(BackendService)),
    __param(1, Inject(AppStore)),
    __metadata("design:paramtypes", [BackendService, Object])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=../../../../src/app/navbar/navbar.component.js.map