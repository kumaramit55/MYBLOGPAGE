import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FullBlog from './Components/FullBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/:blogslug" element={<FullBlog/>}/>
            
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
