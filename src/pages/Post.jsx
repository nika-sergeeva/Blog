import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { textTransformation } from '../utils/spelling'
import { useFetch } from '../hooks/useFetch'
import BlogServise from '../API/BlogServise'
import Loader from '../components/UI/Loader/MyLoader'
import MyButton from '../components/UI/button/MyButton'
import Comment from '../components/Comments/Comment'


const Post = () => {

const {id} = useParams()
const [item, setItem] = useState({})
const [comment, setComment] = useState([])

const navigate = useNavigate()

const [fetchPostId, loader, postError] = useFetch(async () =>{
  const res = await BlogServise.getById(id)
  setItem(res.data)
})

const [fetchComment, сommentLoader, commentError] = useFetch(async () =>{
  const res = await BlogServise.getCommentById(id)
  setComment(res.data)
})

 
useEffect(()=>{
  fetchPostId(id)
  fetchComment(id)
},[])

  return (
    <div className='postBox'>
    {item.id
    ? <div>
      <MyButton onClick={() => navigate(-1)}>Back</MyButton>
   
          <h2 style={{margin: '2rem 0 1rem 0'}}> {textTransformation(item.title)}. </h2>
          <p>{textTransformation(item.body)}.</p>
      
      </div>
    : <Loader/>
    } 
    <hr />
    {comment
    ? <div>
      <h2>Comments :</h2>
      {comment.map( i => {
        return <Comment key={i.name} email={i.email} body={i.body}/>
      })}
    </div>
    :  <Loader/>
    }

    </div>
  )
}
 
export default Post