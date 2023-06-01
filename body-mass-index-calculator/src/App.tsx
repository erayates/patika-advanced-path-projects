import './globals.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import WhatIsTheBMI from './pages/WhatIsTheBMI'
import Diets from './pages/Diets'
import SpecialDietList from './pages/SpecialDietList'


function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='what-is-the-bmi' element={<WhatIsTheBMI />} />
        <Route path='diets' element={<Diets />} />
        <Route path='diets/?w=weight&h=height&type=type' element={<SpecialDietList />} />
      </Routes>
    </>
  )
}

export default App
