import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const PostList = ({ posts, title, removePost }) => {

    if (!posts.length) {
        return <h1>List is empty</h1>
    }


    let result = posts.map((el, index) => {
        return (
            <CSSTransition
                key={el.id}
                timeout={500}
                classNames='post'
            >
                <PostItem
                    removePost={removePost}
                    position={index}
                    post={el}
                />
            </CSSTransition>
        )
    })
    return (
        <div className="App">
            <h1>{title}</h1>
            <TransitionGroup>
                {result}
            </TransitionGroup>
        </div>
    )
}

export default PostList