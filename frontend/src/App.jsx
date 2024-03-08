// import { Outlet } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      {/* <Outlet /> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App