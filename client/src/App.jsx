import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Main from "./pages/Main"
import Form from "./pages/Form"
import './App.css'
import Login from "./pages/Login"
import AppComponent from "./components/AppComponent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<AppComponent><Main /></AppComponent>} />
        <Route path="/form/" exact element={<AppComponent><Form /></AppComponent>} />
        <Route path="/blog/:id" exact element={<AppComponent><Form /></AppComponent>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
