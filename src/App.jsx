import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Certificates from "./pages/Certificates"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards-certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
