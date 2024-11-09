import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Home/Home"
import NavBar from "./components/NavBar"
import Privacy from "./pages/Privacy"


function App() {


  return (
 <BrowserRouter>
 <NavBar/>
 <Routes>
  
    <Route path="/" element={Homepage()}/>
    <Route path="/login" element={<div>login</div>}/>
    <Route path="/registration" element={<div>hi</div>}/>
    <Route path="/privacy-policy" element={Privacy()}/>
 
 </Routes>
 </BrowserRouter>

  )
}

export default App
