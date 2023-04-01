import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


const PostForm = ({ createPost }) => {
    const [post, setPost] = useState({ title: "", body: "" })

    const addNewPost = (event) => {
        event.preventDefault();
        let newPost = {
            ...post, id: Date.now
        }
        createPost(newPost)
        setPost({ title: "", body: "" })
    }
    return (
        <form>
            <MyInput
                placeholder="Name post"
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })}
            />
            <MyInput
                placeholder="Body post"
                value={post.body}
                onChange={event => setPost({ ...post, body: event.target.value })}

            />
            <MyButton onClick={addNewPost}  >Create post </MyButton>
        </form>
    )
}

export default PostForm