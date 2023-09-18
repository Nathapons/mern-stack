import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


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

    const deleteBlog = (slug) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/blog/${slug}`).then(res => {
            Swal.fire(
                'Delete Success!',
                'ลบข้อมูลเรียบร้อยแล้ว',
                'success'
            ).then(
                setBlog(res.data)
            )
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
                <table className="table table-striped mt-2">
                    <thead className="thread-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ชื่อบทความ</th>
                            <th scope="col">รายละเอียดบทความ</th>
                            <th scope="col">ชื่อผู้แต่ง</th>
                            <th scope="col">วันที่เผยแพร่</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {blogs.map((blog, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></td>
                                <td>{blog.content.substring(0, 10)}</td>
                                <td>{blog.author}</td>
                                <td>{new Date(blog.createdAt).toLocaleString()}</td>
                                <td>
                                    <button className="btn btn-danger mx-2" onClick={(e) => deleteBlog(blog.slug)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}