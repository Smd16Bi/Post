import React from "react";
import MyButton from "./UI/button/MyButton";


const PostItem = ({post,position,removePost}) => {
    const removeCurrentPost = (event) => {
        event.preventDefault();
        removePost(post);
    }
    return (
        <div id={post.id} className="post">
            <div className="post__content">
                <strong>{position + 1}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={removeCurrentPost}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem