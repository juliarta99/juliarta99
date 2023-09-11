import {BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import HomeView from './views/HomeView'
import AboutView from "./views/AboutView"
import PortfolioView from './views/PortfolioView'
import Navbar from './components/Navbar'
import CircleRandom from './components/CircleRandom'
import { useEffect, useState } from 'react'
import ToTop from './components/ToTop'
import NotFoundView from './views/NotFoundView'

function App() {
  // circle random
  const [circleCount, setCircleCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if(circleCount < 10) {
        setCircleCount(circleCount + 1)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [circleCount])

  const handleAnimationIteration = () => {
    setCircleCount(circleCount - 1);
  };
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const Layout = () => {
    return (
      <>
        <Navbar />
        <ToTop />
        <div className="container">
            {Array.from({ length: circleCount }).map((_, i) => (
              <CircleRandom
                key={i}
                left={Math.random() * containerWidth - 80}
                bottom={Math.random() * containerHeight}
                duration={Math.random() * 2 + 3}
                onAnimationIteration={handleAnimationIteration}
              />
            ))}
        </div>
        <Outlet />
      </>
    )
  }
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path='about' element={<AboutView />} />
            <Route path='portfolio' element={<PortfolioView />} />
          </Route>
          <Route path='*' element={<NotFoundView />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App