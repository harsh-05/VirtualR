import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
      </div>
    </>
  );
}

export default App;
