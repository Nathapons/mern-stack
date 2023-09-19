import { useState } from "react"

export default function LoginComponent() {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const {username, password} = login
    const inputValue = name => event => {
        const value = event.target.value
        setLogin({ ...login, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.table({username, password})
    }

    return (
        <form className="container mt-2" onSubmit={submitForm}>
            <h2>Login เข้าสู่ระบบ</h2>
            <div className="form-group mt-4">
                <label for="exampleInputEmail1">Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    value={username} 
                    onChange={inputValue('username')}
                />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="mt-3">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    value={password} 
                    onChange={inputValue('password')}
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">เข้าสู่ระบบ</button>
        </form>
    )
}