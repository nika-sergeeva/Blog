import React from "react"
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
      <h1>MyBlog</h1>

      {/* <ul>
        <li>About</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul> */}
      
      </div>
    </header>
  )
}

export default Header