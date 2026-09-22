import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import EventSection from "./components/EventSection";
import Projects from "./components/Projects";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import TeamStrip from "./components/TeamStrip";
import Testimonials from "./components/Testimonials";
import GlobalPresence from "./components/GlobalPresence";
import { Icon, Modal } from "./components/Shared";
export default function App() {
  const [details, setDetails] = useState(null);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 6500);
    return () => clearTimeout(timer);
  }, [notice]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services onDetails={setDetails} />
        <About />
        <TeamStrip />
        <Projects onDetails={setDetails} notify={setNotice} />
        <EventSection notify={setNotice} />
        <Process />
        <Testimonials />
        <CTA />
        <Contact notify={setNotice} />
        <GlobalPresence />
      </main>
      <Footer notify={setNotice} />
      {details && <Modal item={details} close={() => setDetails(null)} />}
      {notice && (
        <div className="toast" role="status">
          <Icon name="check" />
          <span>{notice}</span>
          <button
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            <Icon name="close" />
          </button>
        </div>
      )}
    </>
  );
}
