import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
      </div>
    </>
  );
}

export default App;
