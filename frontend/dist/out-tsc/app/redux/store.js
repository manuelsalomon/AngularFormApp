import { combineReducers, createStore } from 'redux';
import { OpaqueToken } from '@angular/core';
import { UserReducer } from './user.reducer';
import { PostReducer } from './post.reducer';
var AppReducer = combineReducers({ UserReducer: UserReducer, PostReducer: PostReducer });
var devTools = window["devToolsExtension"] ?
    window["devToolsExtension"]() : function (f) { return f; };
export var store = createStore(AppReducer, devTools);
export var AppStore = new OpaqueToken('app.store');
//# sourceMappingURL=../../../../src/app/redux/store.js.map