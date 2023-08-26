import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const GetAuthData=()=>{
    const authdata=useContext(AuthContext);
    return authdata;
}

export default GetAuthData