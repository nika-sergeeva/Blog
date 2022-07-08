import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { FaHamburger } from "react-icons/fa"

import { useAuth } from '../../hooks/useAuth'
import classes from "./Header.module.css"

const Header = () => {

const navigate = useNavigate()

const {user, signOut} = useAuth()

const [burger, setBurger] = useState(false)
function toggleMenu(){
  burger? setBurger(false) : setBurger(true)
}

const logOut = () =>{
  window.localStorage.clear()
  signOut(() => navigate('/', {replace: true}) ) 
}

return (
    <header className={classes.header} onClick={()=> setBurger(false)}>
      <div className={classes.container}>
      <Link to="/"><h1>MyBlog</h1></Link>

<div className="menu" onClick={(e)=> e.stopPropagation()}>
<FaHamburger 
className={burger ? classes.active : null}
style={{height: '2rem', width: '2rem', color: 'white', cursor: 'pointer'}} 
onClick={() => toggleMenu()}
/>
      <ul className={burger ? classes.active : null}>
        <li><Link to="about">About</Link></li>
       {user
       ? <li onClick={() => logOut()}>Log out</li> 
       : <li><Link to="login">Log in</Link></li>
       } 
      </ul>
</div>

      
      </div>
    </header>
  )
}

export default Header