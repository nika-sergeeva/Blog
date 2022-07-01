import { useEffect, useState } from "react";
import "./App.css"


import Header from "./components/Header/Header";
import Main from "./components/Main";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import Loader from "./components/Loader/MyLoader"

import { usePosts } from "./hooks/usePosts";
import BlogServise from "./API/BlogServise";
import { useFetch } from "./hooks/useFetch";
import {getPageCount} from "./utils/pages"
import { usePagination } from "./hooks/usePagination";
import MyButtonS from "./components/UI/buttonS/MyButtonS";


function App() {
const [post, setPost] = useState([])
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query)
const [totalPages, setTotalPages] = useState(0)
const [limit, setLimit] = useState(10)
const [page, setPage] = useState(1)


const [fetchPost, loader, postError] = useFetch(async() =>{
  const posts = await BlogServise.fetchAll(limit, page)
  setPost(posts.data)
  const totalCount = posts.headers['x-total-count']
  setTotalPages(getPageCount(totalCount, limit))
})
const pagesArray = usePagination(totalPages)


const getPost = (newPost) =>{
setPost([...post, newPost])
setModal(false)
}
const deletePost = (item) =>{
  setPost(post.filter(i => i.id !== item.id))
}

useEffect(()=> {
  fetchPost()
}, [])

function changePage(page){
setPage(page)
fetchPost()
console.log(page)
}

  return (
    <div className="App">
      <Header setModal={setModal}/>
      <Main>
        
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm getPost={getPost}/>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter}/>
        {postError && <h2>Error occured: {postError}</h2>}
        { loader? <Loader /> : <PostList post={sortedAndSearchedPosts} remove={deletePost} /> }
        <div className="page" >
          {pagesArray.map(i => 
                  <MyButtonS 
                    onClick={() => changePage(i)}
                    key={i} 
                    current={page === i? true : false}> {i} </MyButtonS>)}
          </div> 
      </Main>
    </div>
  );
}

export default App;
