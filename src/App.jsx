import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Features from "./components/Features";
import AlertExample from "./components/AlertExample";
import BuiltFor from "./components/BuiltFor";
import Testimonials from "./components/Testimonials";
import Integrations from "./components/Integrations";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* <Demo /> */}
        <Features />
        <AlertExample />
        <BuiltFor />
        <Testimonials />
        <Integrations />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App; 