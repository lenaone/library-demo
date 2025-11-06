import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import MyBooksPage from './pages/MyBooksPage'
import LoginPage from './pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
   const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log('Authentication status changed:', authenticate);
  }, [authenticate]);



  return (
      <div>
       <NavBar
         isAuthenticated={authenticate}
         setAuthenticate={setAuthenticate}
       />
       <HomePage />
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-books" element={<MyBooksPage />} />
          <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate} />} />
       </Routes>
       </div>
  )
}

export default App
