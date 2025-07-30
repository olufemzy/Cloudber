import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import Mainlayout from './layouts/Mainlayout';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import PricingPage from './pages/PricingPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
  )
}

export default App
