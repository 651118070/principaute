
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Room from './pages/Room'
import Branches from './pages/Branches'
import BranchDouala from './pages/branches/Douala'
import BranchBakassa from './pages/branches/Bakassa'
import BranchLounge from './pages/branches/Lounge'
function App() {
 
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/rooms' element={<Room />} />
    <Route path='/branches' element={<Branches />} />
    <Route path='/douala' element={<BranchDouala />} />
    <Route path='/bakassa' element={<BranchBakassa />} />
    <Route path='/lounge' element={<BranchLounge />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
