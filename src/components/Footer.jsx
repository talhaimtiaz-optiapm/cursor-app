import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const root = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.8 },
        scrollTrigger: {
          trigger: root.current,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
      tl.from(".footer-copyright", { y: 40, opacity: 0 })
        .from(".footer-link", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} className="bg-white border-t border-gray-200 py-10 text-center text-gray-500 text-sm shadow-sm relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} <span className="text-blue-500 font-semibold">RobinRelay</span>. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#features" className="footer-link hover:text-blue-600 transition-colors">Features</a>
          <a href="#demo" className="footer-link hover:text-blue-600 transition-colors">Demo</a>
          <a href="mailto:founders@robinrelay.ai" className="footer-link hover:text-blue-600 transition-colors">founders@robinrelay.ai</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 