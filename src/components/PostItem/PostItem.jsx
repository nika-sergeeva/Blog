import React from 'react'
import MyButton from '../UI/button/MyButton'
import classes from './PostItem.module.css'
import {Link} from 'react-router-dom'
import { textTransformation } from '../../utils/spelling'

const PostItem = ({id, title, body, post, remove}) => {


  return (
    
    <div className={classes.post}> 
       <Link to={`posts/${id}`}> 
            <div className="post__content">
                  <h2>{id}. {textTransformation(title)}.</h2>
                  <p>{textTransformation(body)}.</p>
              </div>
        </Link>
        <div className="post__btns">
            <MyButton onClick={()=> remove(post)}>Delete</MyButton>
        </div>
    </div>
  )
}

export default PostItem