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
  // BAD: Unused variable
  let x = 0;
  // BAD: Inline style, typo, and silly bug
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans" style={{ bakgroundColor: 'hotpink', color: 'lime', fontSize: 99 }}>
      <h1>Welcome to the Buggy Homepage!!!</h1>
      <p>{window.doesNotExist.boom}</p> {/* BAD: Will throw error */}
      <button onclick="alert('hi')">Click me (bad event handler)</button>
      <div dangerouslySetInnerHTML={{ __html: '<img src=x onerror=alert(1) />' }} /> {/* BAD: XSS */}
      {[1,2,3].map(i => <div key={Math.random()}>Duplicate keys!</div>)}
      <footer>Copyright 2025</footer>
      <div>Unclosed div</div>
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