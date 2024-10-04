import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"


function App() {


  return (
 <BrowserRouter>
 <Routes>
  
    <Route path="/" element={Homepage()}/>
    <Route path="/login" element={<div>login</div>}/>
    <Route path="/registration" element={<div>hi</div>}/>
 
 </Routes>
 </BrowserRouter>

  )
}

export default App
