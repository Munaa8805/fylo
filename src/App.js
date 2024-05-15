import Access from "./components/Access";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import Aos from "aos";
import Mobile from "./components/Mobile";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="dark:bg-darkBlue dark:text-white">
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Mobile />
      <Hero />
      <Features />
      <Productive />
      <Testimonial />
      <Access />
      <Footer />
    </div>
  );
}

export default App;
