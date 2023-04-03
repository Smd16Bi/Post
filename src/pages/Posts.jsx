import React, { useEffect, useMemo, useRef, useState } from "react";
import PostForm from "../component/PostForm";
import PostList from "../component/PostList";
import PostFilter from "../component/PostFilter";
import Divided from "../component/UI/divideLine/divided";
import MyModel from "../component/UI/MyModal/myModel";
import MyButton from "../component/UI/button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostServise from "../component/API/postServer";
import Preloader from "../component/UI/preloader/preloader";
import { useFething } from "../hooks/useFetching";
import { getCount, getPages } from "../utilits/pages";


const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [visible, setVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  let pagesArray = useRef();
  let buttons = [];


  const [fetching, isPostsLoading, error] = useFething(async (page, limit) => {
    const response = await PostServise.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getCount(totalCount, limit))
  })

  useMemo(() => {
    pagesArray.current = getPages(totalPages);
  }, [totalPages])

  useEffect(() => {
    fetching(page, limit)
  }, [page, limit])



  const changePage = (x,y) => {
    setPage(x);
    setLimit(y);
    fetching(x, y)
  }

  const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  if (pagesArray.current.length > 0) {
    buttons = pagesArray.current.map(btn => {
      return <span  
        className={page === btn ? "current_page page" : "page"} 
        onClick={() => { changePage(btn, 10) }} 
        key={btn} 
        >{btn}</span>
    })
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
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && <h1>Happen error</h1>}
      {!isPostsLoading ?
        <PostList
          removePost={removePost}
          load={isPostsLoading}
          posts={sortedAndSerchedPosts}
          title={`List post №${page}`}
        />
        : <Preloader />
      }
      <Divided />

      {buttons && buttons}

    </>
  );
}

export default Posts;
