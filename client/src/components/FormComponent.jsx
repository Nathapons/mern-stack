import { useState } from "react"

export default function FormComponent() {
    const [state, setState] = useState({
        title: '',
        content: '',
        author: ''
    })
    const {title, content, author} = state
    
    const inputValue = name => event => {
        const value = event.target.value
        setState({...state, [name]: value})
    }

    return (
        <form className="form-group mt-5">
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