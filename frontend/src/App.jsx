import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {

  const {authUser} = useAuthContext()

  return (
    <div className="h-screen p-4 flex items-center justify-center">
      <Routes>
        <Route path='/' element={!authUser?<Navigate to='/login' />:<Home/>} />
        <Route path='/login' element={authUser?<Navigate to='/' />:<Login/>} />
        <Route path='/signup' element={authUser?<Navigate to='/' />:<Signup/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
