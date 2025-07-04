import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const roles = [
  { icon: "ShieldCheck", label: "Staff SREs" },
  { icon: "Server", label: "Platform Engineers" },
  { icon: "Code2", label: "DevOps Teams" },
  { icon: "Users", label: "Incident Responders" },
];

const BuiltFor = () => {
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
      tl.from(".builtfor-title", { y: 40, opacity: 0 })
        .from(".builtfor-card", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-20 bg-white relative overflow-hidden" id="built-for">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="builtfor-title text-2xl md:text-3xl font-extrabold mb-8 text-gray-900">Built for Modern Engineering Teams</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {roles.map((r, i) => (
            <div key={r.label} className="builtfor-card flex flex-col items-center bg-white rounded-xl px-6 py-4 shadow border border-gray-200">
              <i className={`lucide lucide-${r.icon.toLowerCase()} text-3xl text-blue-500 mb-2`}></i>
              <span className="font-semibold text-gray-900">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuiltFor; 