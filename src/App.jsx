import React from "react";
import { useState } from 'react';
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
  // Fixed: Removed unused variable
  // New bugs that ESLint would catch:
  
  // BUG 2: Undefined variable (ESLint: no-undef)
  console.log(undefinedVariable);
  
  // BUG 3: Unreachable code (ESLint: no-unreachable)
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <h1>Welcome to the Buggy Homepage!!!</h1>
      
      {/* Fixed: Removed runtime error */}
      {/* Fixed: Removed XSS vulnerability */}
      {/* Fixed: Removed invalid event handler */}
      
      {/* BUG 4: Missing key prop (ESLint: react/jsx-key) */}
      {[1,2,3].map(i => <div>Missing key!</div>)}
      
      {/* BUG 5: Inconsistent return (ESLint: consistent-return) */}
      {(() => {
        if (Math.random() > 0.5) {
          return <div>Sometimes rendered</div>;
        }
        // Missing else return
      })()}
      
      {/* BUG 6: No console statements (ESLint: no-console) */}
      {console.log('Debug info')}
      
      {/* BUG 7: Unused variable (ESLint: no-unused-vars) */}
      {(() => {
        const unusedVar = 'this is never used';
        return <div>Some content</div>;
      })()}
      
      {/* BUG 8: Missing prop types (ESLint: react/prop-types) */}
      <div title={123}>Number as string prop</div>
      
      {/* BUG 9: Inline styles object (ESLint: react/forbid-component-props) */}
      <div style={{color: 'red'}}>Inline style</div>
      
      {/* BUG 10: Fragment without key (ESLint: react/jsx-key) */}
      {[1,2,3].map(i => (
        <>
          <span>Item {i}</span>
          <span>Details</span>
        </>
      ))}
      
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