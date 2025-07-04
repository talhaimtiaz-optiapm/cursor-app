import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: "Sparkles", title: "LLM-Powered Summaries", desc: "Summarize incidents and fixes instantly with AI." },
  { icon: "ScanSearch", title: "AI Pattern Recognition", desc: "Detect recurring issues and root causes automatically." },
  { icon: "SearchCheck", title: "Intelligent Context Retrieval", desc: "Surface relevant past alerts and solutions in Slack." },
  { icon: "BarChart3", title: "AI-Driven Insights", desc: "Get actionable recommendations to reduce MTTR." },
  { icon: "Slack", title: "Slack-Native Workflow", desc: "Works where your team already collaborates." },
];

const Features = () => {
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
      tl.from(".features-title", { y: 40, opacity: 0 })
        .from(".feature-card", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 bg-white relative overflow-hidden" id="features">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="features-title text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={f.title} className="feature-card bg-white rounded-2xl p-8 flex flex-col items-center shadow border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="feature-icon mb-4">
                <i className={`lucide lucide-${f.icon.toLowerCase()} text-3xl text-blue-500`}></i>
              </div>
              <h3 className="feature-title text-xl font-semibold mb-2 text-gray-900">{f.title}</h3>
              <p className="feature-desc text-gray-500 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features; 