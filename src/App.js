import Bookmark from './screens/Bookmark'
import Connect from './screens/Connect'
import Error from './screens/Error'
import Header from './components/Header'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import noavatar from './assets/AvatarPlaceholder.jpg'
import Prez from './screens/Prez'
import { Routes, Route } from 'react-router-dom'
import Team from './screens/Team'
import useLocalStorage from 'use-local-storage'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [avatar, setAvatar] = useState(noavatar)
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isFavorite, setIsFavorite] = useState([])
  const [isRead, setIsRead] = useState([])
  const [openPartage, setOpenPartage] = useState(false)
  const [urlPartage, setUrlPartage] = useState('')
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const changeIsRead = (temp) => setIsRead(temp)
  useEffect(() => {
    if (localStorage.getItem('id_user') !== null) {
      setAvatar(localStorage.getItem('avatar'))
    }
  }, [])

  const clickClosePartage = () => {
    setOpenPartage(false)
  }
  const clickOpenPartage = (url) => {
    setOpenPartage(true)
    setUrlPartage(url)
  }
  const disconnect = () => {
    localStorage.clear()
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div id='App' data-theme={theme}>
      <Navbar switchTheme={switchTheme} disconnect={disconnect} />
      <Header
        switchTheme={switchTheme}
        avatar={avatar}
        setAvatar={setAvatar}
        theme={theme}
        disconnect={disconnect}
      />

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
        <Route
          path='/connect'
          element={<Connect avatar={avatar} setAvatar={setAvatar} />}
        />
        <Route
          path='/prez'
          element={
            <Prez
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
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
