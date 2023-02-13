import React,{useState, useEffect} from 'react'

import { usePosts } from "../hooks/usePosts";
import BlogServise from "../API/BlogServise";
import { useFetch } from "../hooks/useFetch";
import {getPageCount} from "../utils/pages"

import MyModal from '../components/UI/myModal/MyModal'
import PostForm from '../components/PostForm'
import MyButton from '../components/UI/button/MyButton'
import PostFilter from '../components/PostFilter/PostFilter'
import MyLoader from '../components/UI/Loader/MyLoader'
import PostList from '../components/PostList'
import Pagination from '../components/UI/pagination/Pagination'

const Blog = () => {

    // const [modal, setModal] = useState(false)

    const [post, setPost] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    
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
    
    // const getPost = (newPost) =>{
    // setPost([...post, newPost])
    // setModal(false)
    // }
    const deletePost = (item) =>{
      setPost(post.filter(i => i.id !== item.id))
    }
    
    useEffect(()=> {
      fetchPost()
    }, [page])
    
    function changePage(page){
    setPage(page)
    }
    
  return (
    <>
        {/* <MyModal visible={modal} setVisible={setModal}>
          <PostForm getPost={getPost}/>
        </MyModal> */}
        
        <PostFilter filter={filter} setFilter={setFilter}/>

        {/* <MyButton onClick={() => setModal(true)}>Add New Post</MyButton> */}

        {postError && <h2>Error occured: {postError}</h2>}
        { loader? <MyLoader /> : <PostList post={sortedAndSearchedPosts} remove={deletePost} /> }
        <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
    </>
  )
}

export default Blog