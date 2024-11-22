import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import MainFooter from '../../components/MainFooter/MainFooter'
import { Outlet } from 'react-router-dom'
import Contact from '../../components/Contact/Contact'

const MainLayout = () => {
  return (
       <>
      <Navbar />
      <Hero />
    <Outlet />
    <Contact/>
    <MainFooter />
    </>
  )
}

export default MainLayout;
