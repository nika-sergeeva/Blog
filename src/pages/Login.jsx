import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'


const Login = () => {

const navigate = useNavigate()
const location = useLocation()
const {signIn} = useAuth()

const fromPage = location.state?.from?.pathname || '/'

function submit(e){
e.preventDefault()
const form = e.target
const user = form.username.value
signIn(user, () => navigate(fromPage, {replace: true}))
}

  return (
    <div className='center-block'>
      <h2>Log in</h2>
      <hr />
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="username" name="username" required/>
        <MyInput tyle="password" placeholder="password" />
        <MyButton style={{marginTop: '1rem'}}>Submit</MyButton>
      </form>
      <h6 style={{color: 'hsl(211, 10%, 45%)'}}> * Type in your name and press submit to enter.</h6>
    </div>
  )
}

export default Login