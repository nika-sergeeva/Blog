import React from 'react'
import MyButton from '../UI/button/MyButton'
import classes from './PostItem.module.css'

const PostItem = ({order, title, body, post, remove}) => {

  return (
    <div className={classes.post}> 
        <div className="post__content">
            <b>{order} {title}</b>
            <p>{body}</p>
        </div>
        <div className="post__btns">
            <MyButton onClick={()=> remove(post)}>Delete</MyButton>
        </div>
    </div>
  )
}

export default PostItem