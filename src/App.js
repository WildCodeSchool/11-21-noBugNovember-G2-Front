import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Bookmark from './screens/Bookmark'
import Team from './screens/Team'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/bookmark' element={<Bookmark />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='*' element={<Home />}/>
     </Routes>
    </div>
  ) };

export default App
