import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';


export default function FormComponent() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [state, setState] = useState({
        title: '',
        author: ''
    })
    const [content, setContent] = useState('')

    const { title, author } = state

    const inputValue = name => event => {
        const value = event.target.value
        setState({ ...state, [name]: value })
    }
    const submitContent = (event) => {
        setContent(event)
    }

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/blog/${id}`).then((res) => {
            console.log(res.data)
            setState({...res.data})
            setContent(res.data.content)
        })
    }, [])

    function submitForm(e) {
        e.preventDefault();
        if (!id) {
            axios.post(`${import.meta.env.VITE_API_URL}/blog`, { title, content, author }).then(res => {
                Swal.fire(
                    'สำเร็จ',
                    'บันทึกข้อมูลบทความเรียบร้อย',
                    'success'
                ).then(() => {
                    setState({...state, title: '', author: ''})
                    setContent('')
                    navigate('/')
                })
            }).catch(err => {
                Swal.fire(
                    'แจ้งเตือน',
                    err.response.data.error,
                    'error'
                )
            })
        } else {
            axios.put(`${import.meta.env.VITE_API_URL}/blog/${id}`, { title, content, author }).then(res => {
                Swal.fire(
                    'สำเร็จ',
                    'บันทึกข้อมูลบทความเรียบร้อย',
                    'success'
                ).then(() => {
                    navigate('/')
                })
            }).catch(err => {
                Swal.fire(
                    'แจ้งเตือน',
                    err.response.data.error,
                    'error'
                )
            })
        }
        
    }

    return (
        <form className="form-group mt-3" onSubmit={submitForm}>
            <div>
                <label>ชื่อบทความ</label>
                <input type="text" className="form-control" value={title} onChange={inputValue('title')} />
            </div>
            <div className="mt-3">
                <label>รายละเอียดบทความ</label>
                {/* <textarea className="form-control" value={content} onChange={inputValue('content')}></textarea> */}
                <ReactQuill 
                    value={content}
                    onChange={submitContent}
                    theme="snow"
                    className="pb-2"
                    placeholder="เขียนรายละเอียดบทความของคุณ"
                />
            </div>
            <div className="mt-3">
                <label>ชื่อผู้แต่ง</label>
                <input type="text" className="form-control" value={author} onChange={inputValue('author')} />
            </div>
            <input type="submit" value="Record" className="btn btn-primary mt-3" />
        </form>
    )
}