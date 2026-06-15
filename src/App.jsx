import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Design from "./pages/Design";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  return (
    
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/design" element={<Design />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}