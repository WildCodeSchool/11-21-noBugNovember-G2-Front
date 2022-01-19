import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './screens/Bookmark'
import Connect from './screens/Connect'
import Error from './screens/Error'
import Header from './components/Header'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import Team from './screens/Team'
import Test from './screens/Test'
import noavatar from './assets/croix_rouge.png'
import useLocalStorage from 'use-local-storage'
import PopupSocial from './components/PopupSocial'


function App() {
  const [isFavorite, setIsFavorite] = useState([]) // id objet API
  const [avatar, setAvatar] = useState(noavatar)

  useEffect(() => {
    if (localStorage.getItem('id_user') !== null) {
      setAvatar(localStorage.getItem('avatar'))
    }
  }, [])

  const [isRead, setIsRead] = useState([])
  const changeIsRead = temp => setIsRead(temp)

  const [openPartage, setOpenPartage] = useState(false)
  const [urlPartage, setUrlPartage] = useState('')

  const clickOpenPartage = url => {
    setOpenPartage(true)
    setUrlPartage(url)
  }
  const clickClosePartage = () => {
    setOpenPartage(false)
  }

 const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <div id='App' data-theme={theme}>
      <Header avatar={avatar} setAvatar={setAvatar}/>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              openPartage={openPartage}
              urlPartage={urlPartage}
              clickClosePartage={clickClosePartage}
              setUrlPartage={setUrlPartage}
              clickOpenPartage={clickOpenPartage}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              isRead={isRead}
              changeIsRead={changeIsRead}
              setIsRead={setIsRead}
            />
          }
        />
        <Route
          path='/bookmark'
          element={
            <Bookmark
              openPartage={openPartage}
              urlPartage={urlPartage}
              clickClosePartage={clickClosePartage}
              setUrlPartage={setUrlPartage}
              clickOpenPartage={clickOpenPartage}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              isRead={isRead}
              changeIsRead={changeIsRead}
              setIsRead={setIsRead}
            />
          }
        />
        <Route
          path='/news-semaine'
          element={
            <Team
              openPartage={openPartage}
              urlPartage={urlPartage}
              clickClosePartage={clickClosePartage}
              setUrlPartage={setUrlPartage}
              clickOpenPartage={clickOpenPartage}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
              isRead={isRead}
              changeIsRead={changeIsRead}
              setIsRead={setIsRead}
            />
          }
        />
        <Route path='/connect' element={<Connect avatar={avatar} setAvatar={setAvatar}/> }/>
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
