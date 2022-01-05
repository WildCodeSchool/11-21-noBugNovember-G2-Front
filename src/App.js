import './App.css'
import { Routes, Route } from 'react-router-dom'
import Bookmark from './screens/Bookmark'
import Error from './screens/Error'
import Header from './components/Header'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import Team from './screens/Team'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bookmark' element={<Bookmark />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='*' element={<Error />}/>
     </Routes>
    </div>
  )
}

export default App
