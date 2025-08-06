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
import DashboardLayout from './layouts/DashboardLayout';
import Home from './Users/Home';
import UserSettings from './Users/UserSettings';
import UserProducts from './Users/UserProducts';
import Logs from './Users/Logs';
import VaultScan from './Users/VaultScan';
import AutoAudit from './Users/AutoAudit';
import PolicyBuilder from './Users/PolicyBuilder';
import AccessIntelLoop from './Users/AccessIntelLoop';
import Labs from './Users/Labs';

function App() {

  return (
    <Routes>
      {/* sundry pages layout */}
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>

      {/* dashboard pages layout  */}
      <Route element={<DashboardLayout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/usersettings' element={<UserSettings/>}/>
          <Route path='/userproducts' element={<UserProducts/>}/>
          <Route path='/logs' element={<Logs />} />
          <Route path='/vaultscan' element={<VaultScan />} />
          <Route path='/autoaudit' element={<AutoAudit />} />
          <Route path='/policybuilder' element={<PolicyBuilder />} />
          <Route path='/accessintel-loop' element={<AccessIntelLoop />} />
          <Route path='/labs' element={<Labs />} />
      </Route>

    </Routes>
  )
}

export default App
