import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MainFooter from "../../components/MainFooter/MainFooter";
import { Outlet } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import Brands from "../../components/Brands/Brands";
import Marquee from "../../components/Marquee/Marquee";
import Header from "../../components/Header/Header";

const MainLayout = () => {
  return (
    <>
<Marquee/>
<div className='bg-wrapper'>
<Navbar />
<Hero />
      </div>
      <Brands />
      <Outlet />
      <Contact />
      <MainFooter />
    </>
  );
};

export default MainLayout;
