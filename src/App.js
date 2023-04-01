import React, { useMemo, useState } from "react";
import PostForm from "./component/PostForm";
import PostList from "./component/PostList";
import "./style/app.css"
import PostFilter from "./component/PostFilter";




const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Some text" },
    { id: 2, title: "Css", body: "Some text" },
    { id: 3, title: "Html", body: "Some text" },
    { id: 4, title: "C++", body: "Some text" },
    { id: 5, title: "C##", body: "Some text" },
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })


  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => { return a[filter.sort].localeCompare(b[filter.sort]) })
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSerchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))

  }, [filter.query, sortedPost])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  return (
    <>
      <PostForm createPost={createPost} />
      <hr />

      < PostFilter 
        filter={filter} 
        setFilter={setFilter} 
      />
      {
        sortedAndSerchedPosts.length !== 0
          ? <PostList removePost={removePost} posts={sortedAndSerchedPosts} title={"List post №1"} />

          : <h1>List post is empty</h1>
      }
    </>
  );
}

export default App;
