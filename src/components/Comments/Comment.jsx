import React from 'react'
import { letter, randomColor } from "../../utils/avatar"
import { formatEmail, textTransformation } from "../../utils/spelling"
import classes from './Comment.module.css'

const Comment = ({email, body}) => {
 
  return (
    <div className={classes.comment}>
                <div className={classes.headingBox}>
                    
                    <div className={classes.avatar} style={randomColor()} > {letter(email)} </div>
                    <h3 className={classes.heading}>{formatEmail(email)}</h3> 
                    
                </div>

                <p  className={classes.body}>{textTransformation(body)}.</p>
               
    </div>
  )
}

export default Comment