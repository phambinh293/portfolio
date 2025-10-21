import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import CustomCursorProvider from "./components/CustomCursor";
import Footer from "./components/Footer";
import WelcomeLoader from "./components/WelcomeLoader";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <CustomCursorProvider>
        <WelcomeLoader/>
        <NavBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer/>
      </CustomCursorProvider>
    </div>
  );
};

export default App;
