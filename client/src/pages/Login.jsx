import { useEffect } from "react";
import LoginComponent from "../components/LoginComponent";
import '../style/Login.css'

export default function Login() {
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        console.log(token)
        if (token) {
          navigate('/main')
        }
      }, [])

    return (
        <LoginComponent />
    )
}