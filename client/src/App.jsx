import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Form from "./pages/Form"
import './App.css'
import Login from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/form/" exact element={<Form />} />
        <Route path="/blog/:id" exact element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
