import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Home/Home"
import NavBar from "./components/NavBar"
import Privacy from "./pages/Privacy"
import login from "./pages/Login"
import Registration from "./pages/Registration"


function App() {


  return (
 <BrowserRouter>
 <NavBar/>
 <Routes>
  
    <Route path="/" element={Homepage()}/>
    <Route path="/login" element={login()}/>
    <Route path="/registration" element={Registration()}/>
    <Route path="/privacy-policy" element={Privacy()}/>
 
 </Routes>
 </BrowserRouter>

  )
}

export default App
