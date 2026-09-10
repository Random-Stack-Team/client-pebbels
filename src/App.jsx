import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Explore from "./pages/Explore";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Maintenance from "./pages/Maintenance";

const MAINTENANCE_MODE = true;

export default function App() {
  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <Layout>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Maintenance />} />
      </Routes>
    </Layout>
  );
}