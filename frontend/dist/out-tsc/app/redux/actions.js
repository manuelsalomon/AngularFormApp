export var POSTS_GET = 'POSTS_GET';
export var POST_GET = 'POST_GET';
export var POST_NEW = 'POST_NEW';
export var POST_EDIT = 'POST_EDIT';
export var POST_DELETE = "POST_DELETE";
export var USER_ERROR = 'USER_ERROR';
export var USER_REGISTER = 'USER_REGISTER';
export var USER_LOGIN = 'USER_LOGIN';
export var USER_LOGOUT = 'USER_LOGOUT';
export var COMMENT_NEW = 'COMMENT_NEW';
export var COMMENT_EDIT = 'COMMENT_EDIT';
export var COMMENT_DELETE = 'COMMENT_DELETE';
export var getPosts = function (posts) {
    return {
        type: POSTS_GET,
        posts: posts
    };
};
export var getPost = function (postId) {
    return {
        type: POST_GET,
        postId: postId
    };
};
export var editPost = function (postId) {
    return {
        type: POST_EDIT,
        postId: postId
    };
};
export var deletePost = function (postId) {
    return {
        type: POST_DELETE,
        postId: postId
    };
};
export var newPost = function (title, body, author) {
    return {
        type: POST_NEW,
        title: title,
        body: body,
        author: author
    };
};
export var registerUser = function (username, name, password) {
    return {
        type: USER_REGISTER,
        username: username,
        name: name,
        password: password
    };
};
export var login = function (username, password) {
    return {
        type: USER_LOGIN,
        username: username,
        password: password
    };
};
export var logout = function () {
    return {
        type: USER_LOGOUT
    };
};
export var userError = function (errorMessage) {
    return {
        type: USER_ERROR,
        errorMessage: errorMessage
    };
};
export var newComment = function (body) {
    return {
        type: COMMENT_NEW,
        body: body,
    };
};
export var editComment = function (_id) {
    return {
        type: COMMENT_EDIT,
        _id: _id
    };
};
export var deleteComment = function (_id, newBody) {
    return {
        type: COMMENT_DELETE,
        _id: _id,
        newBody: newBody
    };
};
//# sourceMappingURL=../../../../src/app/redux/actions.js.map