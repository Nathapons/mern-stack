import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Form from "./pages/Form"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
