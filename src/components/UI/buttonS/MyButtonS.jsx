import React from 'react'
import classes from './MyButtonS.module.css'

const MyButtonS = ({children, current, ...props}) => {

  const rootClasses = [classes.myByttonS]
  if(current){
      rootClasses.push(classes.myButton__current)
  }
  
  return (
    <button {...props} className={rootClasses.join(' ')}>{children}</button>
  )
}

export default MyButtonS