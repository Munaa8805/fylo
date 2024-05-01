import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";
function App() {
  return (
    <div className="dark:bg-darkBlue dark:text-white">
      <Header />
      <Hero />
      <Features />
      <Productive />
    </div>
  );
}

export default App;
