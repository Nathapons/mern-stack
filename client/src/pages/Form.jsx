import Navbar from "../components/Navbar"
import FormComponent from "../components/FormComponent"

export default function Form() {
    return (
        <div className="container pt-5">
            <Navbar />
            <h1>เขียนบทความ</h1>
            <FormComponent />
        </div>
    )
}