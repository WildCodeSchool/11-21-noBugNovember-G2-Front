import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Bookmark from './screens/Bookmark'
import Team from './screens/Team'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bookmark' element={<Bookmark />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='*' element={<Home />}/>
     </Routes>
    </div>
  )
}

export default App
