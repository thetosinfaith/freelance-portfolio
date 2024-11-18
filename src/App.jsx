import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";  // Assuming this layout includes navbar and hero
import About from "./pages/About/About";
import Books from "./pages/Books/Books";
import Portfolio from "./pages/Portfolio/Portfolio";
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
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
