import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()

    function logout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav class="navbar navbar-expand-lg bg-primary text-light">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <Link to='/main/' className="nav-link text-light" style={{textDecoration: "none"}}>รายละเอียดบทความ</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/form/' className="nav-link text-light" style={{textDecoration: "none"}}>เขียนบทความ</Link>
                    </li>
                </ul>
            </div>
            <div style={{float: "right"}}>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <button className="nav-link text-light" onClick={() => logout()}>ออกจากระบบ</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}