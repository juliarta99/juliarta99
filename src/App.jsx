import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import PortfolioView from './views/PortfolioView';
import ContactView from './views/ContactView';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/portfolio' element={<PortfolioView />} />
          <Route path='/contact' element={<ContactView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App