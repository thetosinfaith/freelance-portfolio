import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Developer from "./pages/Portfolio/Developer/Developer";
import Designer from "./pages/Portfolio/Designer/Designer";
import CardLayout from "./layout/CardLayout/CardLayout";
import BooksCourses from "./pages/BooksCourses/BooksCourses";
import Talks from "./pages/Talks/Talks";
import Certifications from "./pages/Certifications/Certifications";
import Awards from "./pages/Awards/Awards";
import Blog from "./pages/Blog/Blog";
import Extras from "./components/Extras/Extras";
import Communities from "./pages/Communities/Communities";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/react";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<CardLayout />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/developer" element={<Developer />} />
        <Route path="portfolio/designer" element={<Designer />} />

        <Route path="resources" element={<Extras />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/books-courses" element={<BooksCourses />} />
        <Route path="/speaking" element={<Talks />} />
        <Route path="/certificates" element={<Certifications />} />
        <Route path="/awards" element={<Awards />} />

      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
