import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import MainFooter from "../../components/MainFooter/MainFooter";
import { Outlet } from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import Brands from "../../components/Brands/Brands";

const MainLayout = () => {
  return (
    <>
      <div className="yy" style={{ backgroundColor: "#FEFCF7" }}>
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
