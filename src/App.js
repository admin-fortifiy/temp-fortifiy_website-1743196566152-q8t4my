import { useEffect } from "react";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 2000,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  useEffect(() => {
    AOS.init({ mirror: true });
  }, []);
  return (
    <div className="" style={{ zoom: "1.0" }}>
      <Home />

      <Footer />
    </div>
  );
}

export default App;
