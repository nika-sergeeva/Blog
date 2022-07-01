import React from 'react'
import classes from "./MyLoader.module.css"

const MyLoader = () => {
  return (
    <div style={{ textAlign: 'center', margin: '2rem'}}>
<div className={classes.ldsSpinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
     )
}

export default MyLoader



