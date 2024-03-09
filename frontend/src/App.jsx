// import { Outlet } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Podcasts from "./components/Podcasts"
// Podcasts
function App() {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <Home />
      <Podcasts />
      <Footer />
    </div>
  )
}

export default App