import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'


export default function FormComponent() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        title: '',
        content: '',
        author: ''
    })
    const { title, content, author } = state

    const inputValue = name => event => {
        const value = event.target.value
        setState({ ...state, [name]: value })
    }

    function submitForm(e) {
        e.preventDefault();
        console.table({ title, content, author })
        console.log(import.meta.env.VITE_API_URL)
        axios.post(`${import.meta.env.VITE_API_URL}/blog`, { title, content, author }).then(res => {
            Swal.fire(
                'สำเร็จ',
                'บันทึกข้อมูลบทความเรียบร้อย',
                'success'
            ).then(() => {
                setState({...state, title: '', content: '', author: ''})
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

    return (
        <form className="form-group mt-5" onSubmit={submitForm}>
            <div>
                <label>ชื่อบทความ</label>
                <input type="text" className="form-control" value={title} onChange={inputValue('title')} />
            </div>
            <div className="mt-3">
                <label>รายละเอียดบทความ</label>
                <textarea className="form-control" value={content} onChange={inputValue('content')}></textarea>
            </div>
            <div className="mt-3">
                <label>ชื่อผู้แต่ง</label>
                <input type="text" className="form-control" value={author} onChange={inputValue('author')} />
            </div>
            <input type="submit" value="Record" className="btn btn-primary mt-3" />
        </form>
    )
}