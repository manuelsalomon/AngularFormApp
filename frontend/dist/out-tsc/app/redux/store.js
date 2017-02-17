import { createStore } from 'redux';
import { OpaqueToken } from '@angular/core';
import { PostReducer } from './post.reducer';
var devTools = window["devToolsExtension"] ?
    window["devToolsExtension"]() : function (f) { return f; };
export var store = createStore(PostReducer, devTools);
export var AppStore = new OpaqueToken('app.store');
//# sourceMappingURL=../../../../src/app/redux/store.js.map