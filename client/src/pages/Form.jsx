import Navbar from "../components/Navbar"
import FormComponent from "../components/FormComponent"

export default function Form() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="mt-2">เขียนบทความ</h1>
                <FormComponent />
            </div>
        </div>
    )
}