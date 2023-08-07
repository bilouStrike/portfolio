import { BrowserRouter } from "react-router-dom";

import {
  About,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
