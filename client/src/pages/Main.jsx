import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Main() {
    const [blog, setBlog] = useState('')

    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/blog`).then(res => {
            setBlog(res.data)
        }).catch((err) => {
            Swal.fire(
                'Get Data error',
                err.response.data,
                'error'
            )
        })
    }

    useEffect(() => {fetchData()}, [])

    return (
        <div className="container pt-3">
            <Navbar />
        </div>
    )
}