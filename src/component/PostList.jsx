import React from "react";
import PostItem from "./PostItem";



const PostList = ( {posts,title,removePost}) => {

    if (!posts.length) {
        return  <h1>List is empty</h1>
    } 


    let result = posts.map((el,index) => {
        return (
            <PostItem
                removePost={removePost}
                position={index}
                key={el.id}
                post={el}
            />
        )
    })
    return (
        <div className="App">
            <h1>{title}</h1>
            {result}
        </div>
    )
}

export default PostList