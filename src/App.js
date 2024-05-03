import Access from "./components/Access";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="dark:bg-darkBlue dark:text-white">
      <Header />
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
