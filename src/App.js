import React, { useState } from "react";
import PostForm from "./component/PostForm";
import PostList from "./component/PostList";
import "./style/app.css"
import PostFilter from "./component/PostFilter";
import Divided from "./component/UI/divideLine/divided";
import MyModel from "./component/UI/MyModal/myModel";
import MyButton from "./component/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";


const App = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [visible, setVisible] = useState(false);
  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  return (
    <>
      <MyButton onClick={() => setVisible(!visible)}>
        Create post
      </MyButton>
      <MyModel visible={visible} setVisible={setVisible}>
        <PostForm createPost={createPost} />
      </MyModel>
      <Divided />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList
        removePost={removePost}
        posts={sortedAndSerchedPosts}
        title={"List post №1"}
      />
    </>
  );
}

export default App;
