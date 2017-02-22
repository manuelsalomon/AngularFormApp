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
import { BackendService } from '../backend.service';
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
    return PostComponent;
}());
PostComponent = __decorate([
    Component({
        selector: 'post',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.css'],
        inputs: ['post']
    }),
    __param(1, Inject(BackendService)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        BackendService])
], PostComponent);
export { PostComponent };
//# sourceMappingURL=../../../../src/app/post/post.component.js.map