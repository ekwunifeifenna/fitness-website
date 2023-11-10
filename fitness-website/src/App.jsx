import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import {Box} from "@mui/material"


import './App.css'
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)
// the box is a div with some shading and some colours
  return (

    // Make sure the website is responsive on larger devices with the sx property and margin auto
    <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
      </Routes>
      <Footer />



 
    </Box>
  )
}

export default App
