import { useState } from "react"

export default function Form() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    return (
        <div className="container pt-5">
            <h1>เขียนบทความ</h1>
            <form className="form-group mt-5">
                <div>
                    <label>ชื่อบทความ</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label>รายละเอียดบทความ</label>
                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div className="mt-3">
                    <label>ชื่อผู้แต่ง</label>
                    <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <input type="submit" value="Record" className="btn btn-primary mt-3" />
            </form>
        </div>
    )
}