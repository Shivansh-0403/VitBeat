import { Outlet } from "react-router-dom"
import Footer from "./Structural/Footer"
import Navbar from "./Structural/Navbar"


function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout