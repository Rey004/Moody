import { Outlet } from 'react-router-dom'
import Bottom_navbar from '../components/bottom_navbar/Bottom_navbar'
import Navbar from '../components/Navbar/Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Bottom_navbar />
        </div>
    )
}

export default Layout