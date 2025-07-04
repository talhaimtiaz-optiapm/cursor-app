import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
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
      tl.from(".demo-title", { y: 40, opacity: 0 })
        .from(".demo-desc", { y: 40, opacity: 0 }, "-=0.5")
        .from(".demo-img", { y: 40, opacity: 0 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24 bg-white min-h-[60vh] overflow-hidden" id="demo">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="demo-title text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">Live Product Demo</h2>
        <p className="demo-desc text-lg text-gray-600 mb-10 max-w-xl mx-auto">Watch RobinRelay automatically surface your team's alert history and suggested fixes — inside Slack.</p>
        <div className="flex justify-center">
          <div className="rounded-xl border border-gray-200 shadow-lg bg-white overflow-hidden w-full max-w-3xl">
            <img
              src="/demo.gif"
              alt="Slack alert demo"
              className="demo-img w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
