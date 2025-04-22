import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Experts from './pages/Experts'
import Contact from './pages/Contact'


function AppRouter () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='experts' element={<Experts />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default AppRouter