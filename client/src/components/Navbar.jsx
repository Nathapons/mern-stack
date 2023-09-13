export default function Navbar() {
    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/" className="nav-link">หน้าแรก</a>
                </li>
                <li className="nav-item pr-3 pt-3 pb-3">
                    <a href="/form" className="nav-link">เขียนบทความ</a>
                </li>
            </ul>
        </nav>
    )
}