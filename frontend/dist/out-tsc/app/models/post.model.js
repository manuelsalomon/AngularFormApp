var Post = (function () {
    function Post(obj) {
        this.postId = obj.postId;
        this.author = obj.author;
        this.title = obj.title;
        this.body = obj.body;
        this.comments = obj.comments;
        this.date = obj.date;
        this.isOwner = obj.isOwner;
    }
    return Post;
}());
export { Post };
//# sourceMappingURL=../../../../src/app/models/post.model.js.map