import * as AppActions from './actions';
var userInitialState = {
    isLogged: false,
    username: null,
    name: null,
    imgUrl: null,
    errorMessage: null,
    error: false,
};
export var UserReducer = function (state, action) {
    if (state === void 0) { state = userInitialState; }
    switch (action.type) {
        case AppActions.USER_ERROR:
            console.log('llego');
            var error = Object.assign({}, state);
            error.error = true;
            error.errorMessage = action.errorMessage;
            console.log(error);
            return error;
        default:
            return state;
    }
};
//# sourceMappingURL=../../../../src/app/redux/user.reducer.js.map