import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}