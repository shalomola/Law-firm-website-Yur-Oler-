// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Experts from './pages/Experts'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
// import Experts from "./pages/Experts"
// import Contact from "./pages/Contact"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='experts' element={<Experts />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
    // <>
    // <Navbar />
    // </>

  )
}

export default App
