import { useState } from "react"

export const useFetch = (callback) =>{
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () =>{
        try{
            setLoader(true)
            await callback()
        }catch(e){
            setError(e.message)
        }finally{
            setLoader(false)
        }
    }
    return [fetching, loader, error]
}