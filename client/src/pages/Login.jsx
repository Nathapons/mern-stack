import { useEffect } from "react";
import LoginComponent from "../components/LoginComponent";
import '../style/Login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
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