import './App.css'
import BottomBar from './components/BottomBar/BottomBar'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pathname = window.location.pathname
  const [searchVal, updateSearchVal] = useState('')
  const renderStars = () => {
    const canvas = document.getElementById("star-field")
    const context = canvas.getContext("2d")
    const stars = 200;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (var i = 0; i < stars; i++) {
      const x = Math.random() * canvas.offsetWidth;
      const y = Math.random() * canvas.offsetHeight;
      context.fillStyle = "white";
      context.fillRect(x, y, 1, 1);
    }
  }

  useEffect(() => {
    if (searchVal.length > 0 && pathname !== '/search')
      document.querySelector('a[href="/search"').click()
  }, [searchVal, pathname])

  useEffect(() => {
    renderStars()
    window.addEventListener('resize', renderStars(), true);
  }, [])

  return (
    <div className="App">
      <canvas id="star-field"></canvas>
      <BrowserRouter>
        <div className="container">
          <Header />
          <SearchBar updateSearchVal={updateSearchVal} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/search" element={<Search searchVal={searchVal} />}></Route>
            <Route path="/saved" element={<Home />}></Route>
            <Route path="/gallery" element={<Home />}></Route>
          </Routes>
        </div>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App
