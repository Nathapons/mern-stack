import Navbar from "../components/Navbar";

export default function Main() {
    return (
        <div className="container pt-3">
            <Navbar />
            <h1>MERN STACK WORKSHOP</h1>
            <a href="/form" className="btn btn-primary">เขียนบทความ</a>
        </div>
    )
}