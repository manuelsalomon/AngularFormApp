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
var UserSignComponent = (function () {
    function UserSignComponent(backend) {
        this.backend = backend;
    }
    UserSignComponent.prototype.ngOnInit = function () {
    };
    UserSignComponent.prototype.newUser = function (name, username, pass, passConfirm) {
        this.backend.userRegister(name, username, pass, passConfirm);
    };
    return UserSignComponent;
}());
UserSignComponent = __decorate([
    Component({
        selector: 'app-user-sign',
        templateUrl: './user-sign.component.html',
        styleUrls: ['./user-sign.component.css']
    }),
    __param(0, Inject(BackendService)),
    __metadata("design:paramtypes", [BackendService])
], UserSignComponent);
export { UserSignComponent };
//# sourceMappingURL=../../../../src/app/user-sign/user-sign.component.js.map