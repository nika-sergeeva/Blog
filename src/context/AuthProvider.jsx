import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{

const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

useEffect(()=>{
 localStorage.setItem("user", JSON.stringify(user))
},[user])

const signIn = (newUser, callback) => {
    setUser(newUser)
    callback()
}
const signOut = (callback) => {
    setUser(null)
    callback()
}

const value = { user, signIn, signOut}

return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
}