import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const root = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.8 },
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
      tl.from(".hero-pill", { y: 40, opacity: 0 })
        .from(".hero-title", { y: 40, opacity: 0 }, "-=0.5")
        .from(".hero-subtitle", { y: 40, opacity: 0 }, "-=0.5")
        .from(".hero-btn", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5")
        .from(".hero-img", { y: 40, opacity: 0 }, "-=0.4")
        .from(".hero-feature", { y: 30, opacity: 0, stagger: 0.08 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="pt-32 pb-16 bg-white min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden" id="hero">
      {/* Neon blue glow background */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-400/30 blur-3xl rounded-full pointer-events-none z-0 animate-pulse" />
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60 z-0" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <span className="hero-pill px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold shadow-sm">LLM-Native Incident Memory Layer</span>
        </div>
        <h1 className="hero-title text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
          Solve alerts faster with your <span className="text-blue-600">team's memory</span> built into Slack
        </h1>
        <p className="hero-subtitle text-lg text-gray-600 mb-8">RobinRelay remembers every alert and fix your team discussed in Slack — so no one wastes time solving the same problem twice.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <a href="#early-access" className="hero-btn px-7 py-3 rounded-lg font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">Request Early Access</a>
          <a href="#" className="hero-btn px-7 py-3 rounded-lg font-semibold border border-gray-300 text-gray-800 hover:bg-gray-100 transition-colors">Book a Call</a>
        </div>
        {/* Screenshot */}
        <div className="flex justify-center">
          <img src="/demo.gif" alt="Slack alert demo" className="hero-img rounded-xl shadow-xl border border-gray-200 w-full max-w-2xl bg-white" />
        </div>
        {/* Features below screenshot */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
          <div className="hero-feature flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Works inside Slack</div>
          <div className="hero-feature flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Choose your alert channel</div>
          <div className="hero-feature flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Auto-summarizes context</div>
          <div className="hero-feature flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>Active in under 2 minutes</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
