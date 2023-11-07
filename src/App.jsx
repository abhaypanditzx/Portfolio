import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
      <Toaster className="z-50"/>
        <div className="bg-h bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
