import { useContext } from "react"
import AuthContext from "../context/AuthContext"


//custom hook and reuseable
export const useAuth =()=>{
    const auth = useContext(AuthContext)
    return auth
}