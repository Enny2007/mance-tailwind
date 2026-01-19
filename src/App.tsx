import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DemoModal from "./components/DemoModal";

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <Header onRequestDemo={() => setShowDemo(true)} />
      <Hero />

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </>     
  );
}

export default App;



{/* <nav className="header-center">
          <a href="#">Pricing</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="header-right">
          <button className="signin-btn">Sign in</button>

          
          <button className="request-btn" onClick={onRequestDemo}>
            Request a Demo
          </button>
        </div> */}

