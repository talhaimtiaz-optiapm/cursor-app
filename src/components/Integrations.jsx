import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg" },
  { name: "Datadog", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/datadog.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/grafana.svg" },
];

const Integrations = () => {
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
      tl.from(".integrations-title", { y: 40, opacity: 0 })
        .from(".integration-card", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-20 bg-white relative overflow-hidden" id="integrations">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="integrations-title text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">Integrates Seamlessly</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {integrations.map((i, idx) => (
            <div
              key={i.name}
              className="integration-card flex flex-col items-center bg-white rounded-xl px-6 py-4 shadow border border-gray-200"
            >
              <img src={i.logo} alt={i.name} className="w-16 h-16 mb-2 border border-blue-100 rounded-lg" />
              <span className="text-blue-500 font-medium mt-1">{i.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations; 