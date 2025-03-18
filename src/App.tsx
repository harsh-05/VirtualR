import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PaymentSection from "./components/PaymentSection";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
        <PaymentSection></PaymentSection>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
