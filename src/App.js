import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './screens/Bookmark'
import Error from './screens/Error'
import Header from './components/Header'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import Team from './screens/Team'

function App() {
  const [isFavorite, setIsFavorite] = useState([10, 15, 35, 54]) // id objet API

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
          }
        />
        <Route
          path='/bookmark'
          element={
            <Bookmark isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
          }
        />
        <Route path='/team' element={<Team />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
