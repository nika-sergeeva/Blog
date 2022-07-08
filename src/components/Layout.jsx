import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import Main from './Main'

const Layout = () => {
  return (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        
    </>
  )
}

export default Layout