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
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { AppStore } from '../redux/store';
var PostListComponent = (function () {
    function PostListComponent(store, ref) {
        this.store = store;
        this.ref = ref;
        this.readState();
    }
    PostListComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.currentPosts = state['PostReducer'].posts;
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function () {
            _this.readState();
            _this.ref.detectChanges();
        });
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    Component({
        selector: 'post-list',
        templateUrl: './post-list.component.html',
        styleUrls: ['./post-list.component.css'],
    }),
    __param(0, Inject(AppStore)),
    __metadata("design:paramtypes", [Object, ChangeDetectorRef])
], PostListComponent);
export { PostListComponent };
//# sourceMappingURL=../../../../src/app/post-list/post-list.component.js.map