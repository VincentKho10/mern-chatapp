// import React from 'react'

import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

function useLogout() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const doLogout = async ()=>{
        setLoading(true)
        try {
            const res = await fetch('api/auth/logout', {
                method:"POST",
                headers: {"Content-Type": "application/json"},
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.clear()
            setAuthUser(null)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
  return {loading, doLogout}
}

export default useLogout