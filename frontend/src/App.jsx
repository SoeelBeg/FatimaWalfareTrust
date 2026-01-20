import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Institutions from './pages/Institutions'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Donate from './pages/Donate'
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'
import AdminGallery from './pages/AdminGallery'


function App() {

  return (
   <Routes>

  {/* Public website */}
  <Route
    path="/*"
    element={
      <>
        <Header />
        <div className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </div>
        <Footer />
      </>
    }
  />

  {/* Admin (no header/footer) */}
  <Route path="/admin-gallery" element={<AdminGallery />} />

</Routes>
 )
}

export default App
