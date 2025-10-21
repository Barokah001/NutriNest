
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import About from './pages/About';
import SignUp from './pages/SignUp';
import BMICalc from './pages/BMICalc';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/bmicalc' element={<BMICalc />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
