import React, { useState } from "react"
import classes from "./Header.module.css"
import { FaHamburger } from "react-icons/fa"

const Header = ({setModal}) => {

const [burger, setBurger] = useState(false)

function toggleMenu(){
  burger? setBurger(false) : setBurger(true)
}

return (
    <header className={classes.header} onClick={()=> setBurger(false)}>
      <div className={classes.container}>
      <h1>MyBlog</h1>

<div className="menu" onClick={(e)=> e.stopPropagation()}>
<FaHamburger 
className={burger ? classes.active : null}
style={{height: '2rem', width: '2rem', color: 'white', cursor: 'pointer'}} 
onClick={() => toggleMenu()}
/>
      <ul className={burger ? classes.active : null}>
        <li onClick={() => setModal(true)}>New post</li>
        <li>Log in</li>
      </ul>
</div>

      
      </div>
    </header>
  )
}

export default Header