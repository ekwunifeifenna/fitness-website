import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import {Box} from "@mui/material"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
// the box is a div with some shading and some colours
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExercideDetail />}/>

      </Routes>


 
    </Box>
  )
}

export default App
