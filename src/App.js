import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './screens/Bookmark'
import Connect from './screens/Connect'
import Error from './screens/Error'
import Header from './components/Header'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import Team from './screens/Team'
import PopupSocial from './components/PopupSocial'


function App() {
  const [isFavorite, setIsFavorite] = useState([
    10, 15, 35, 54, 75, 127, 106, 16
  ]) // id objet API

  const [isRead, setIsRead] = useState([0, 1, 2, 3]) 
  const changeIsRead = (temp) => setIsRead(temp)

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home isFavorite={isFavorite} setIsFavorite={setIsFavorite} isRead={isRead} changeIsRead={changeIsRead} setIsRead={setIsRead} />
          }
        />
        <Route
          path='/bookmark'
          element={
            <Bookmark isFavorite={isFavorite} setIsFavorite={setIsFavorite} isRead={isRead} changeIsRead={changeIsRead} setIsRead={setIsRead}/>
          }
        />
        <Route
          path='/team'
          element={
            <Team isFavorite={isFavorite} setIsFavorite={setIsFavorite} isRead={isRead} changeIsRead={changeIsRead} setIsRead={setIsRead}/>
          }
        />
        <Route 
          path='/connect'
          element={
          <Connect /> 
          }
          />

        <Route path='*' element={<Error />} />
        <Route path='popup' element={<PopupSocial />} />
      </Routes>
      
    </div>
  )
}

export default App
