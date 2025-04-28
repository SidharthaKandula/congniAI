
import "./App.css";
import Navbar from "./components/navbar";
import Statement from "./components/statement";
import Hero from "./components/hero";
import AIPowered from "./components/aiPowdered";
import Work from "./components/work";
import Features from "./components/features";
import Automation from "./components/automation";
import Banner from "./components/banner";

function App() {
  return (
    <div>
      <Navbar />
      <Statement />
      <Hero />
      <AIPowered />
      <Work />
      <Features />
      <Automation />
      <Banner/>
    </div>
  );
}

export default App;