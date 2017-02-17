import * as AppActions from './actions';
var postInitialState = {
    posts: [],
    currentPost: {
        post: null,
        commentsAmmount: 0
    }
};
export var PostReducer = function (state, action) {
    if (state === void 0) { state = postInitialState; }
    switch (action.type) {
        case AppActions.POSTS_GET:
            var newPosts = Object.assign({}, state);
            newPosts.posts = action.posts;
            return newPosts;
        default:
            return state;
    }
};
//# sourceMappingURL=../../../../src/app/redux/post.reducer.js.map