import React from 'react'

const styles = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '81%',
    borderRadius: '10px',
    padding: '50px 10px',
    backgroundColor: 'white',
    position: 'relative',
    bottom: '73px',
    boxShadow:' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
}


const Main = ({children}) => {
  return (
    <main style={styles}>
        {children}
    </main>
  )
}

export default Main