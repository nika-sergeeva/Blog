import React from 'react'
import PostItem from './PostItem/PostItem'

const PostList = ({post, remove}) => {

  if(!post.length){
    return(
      <h2 style={{color: 'navy', textAlign: 'center'}}>Not found</h2>
    )
  }

  return (
    <div>
        {post.map((item, index) => {
       return  <PostItem key={item.id} remove={remove} order={index + 1} post={item} title={item.title} body={item.body}/> 
        })}
    </div>
  )
}

export default PostList