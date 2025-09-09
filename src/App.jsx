import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/Video/Video'

const App = () => {

  const [sidebar, setSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setSidebar={setSidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path='/' element ={<Home sidebar={sidebar} searchQuery={searchQuery} />} />
        <Route path='/video/:categoryId/:videoId' element ={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
