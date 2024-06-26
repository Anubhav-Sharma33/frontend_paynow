import React from 'react'
import { BrowserRouter , Routes, Route, createBrowserRouter} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import Send from './pages/send'
import { useRoutes } from 'react-router-dom'

const App = () => { 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/bulk' element={<Dashboard />} />
        <Route path='/send' element={<Send />} />
        {/* Default route */}
        <Route path='*' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App