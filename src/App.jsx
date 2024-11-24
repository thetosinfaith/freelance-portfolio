import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import About from "./pages/About/About";
import Books from "./pages/Books/Books";
import Portfolio from "./pages/Portfolio/Portfolio"; 
import Developer from "./pages/Portfolio/Developer/Developer"; 
import Designer from "./pages/Portfolio/Designer/Designer"; 
import CardLayout from './layout/CardLayout/CardLayout';
import Blog from "./pages/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<CardLayout />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="blog" element={<Blog />} />

        <Route path="portfolio" element={<Portfolio />} /> 
        <Route path="portfolio/developer" element={<Developer />} />
        <Route path="portfolio/designer" element={<Designer />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
