import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import Swal from 'sweetalert2';


export default function Main() {
    const [blogs, setBlog] = useState([])

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
        <div>
            <Navbar />
            <div className="container">
                <h2 className="mt-2">รายการแสดงข้อมูลบทความ</h2>
                <table class="table table-striped mt-2">
                    <thead class="thread-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ชื่อบทความ</th>
                            <th scope="col">รายละเอียดบทความ</th>
                            <th scope="col">ชื่อผู้แต่ง</th>
                            <th scope="col">วันที่เผยแพร่</th>
                        </tr>
                    </thead>
                    <tbody>
                    {blogs.map((blog, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{blog.title}</td>
                                <td>{blog.content.substring(0, 10)}</td>
                                <td>{blog.author}</td>
                                <td>{new Date(blog.createdAt).toLocaleString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}