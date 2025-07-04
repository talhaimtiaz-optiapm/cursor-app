import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alex P.",
    role: "Staff SRE, Fintech",
    text: "RobinRelay cut our incident response time in half. It's like having the team's memory on tap!",
    avatar: "https://dummyimage.com/48x48/23272a/34d399&text=AP",
  },
  {
    name: "Morgan L.",
    role: "Platform Engineer, SaaS",
    text: "No more digging through Slack history. RobinRelay just tells me what worked last time.",
    avatar: "https://dummyimage.com/48x48/23272a/8b5cf6&text=ML",
  },
  {
    name: "Jamie C.",
    role: "DevOps Lead, E-commerce",
    text: "The AI summaries are spot on. Our team is way less stressed during incidents.",
    avatar: "https://dummyimage.com/48x48/23272a/f59e42&text=JC",
  },
];

const Testimonials = () => {
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
      tl.from(".testimonials-title", { y: 40, opacity: 0 })
        .from(".testimonial-card", { y: 40, opacity: 0, stagger: 0.12 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 bg-white relative overflow-hidden" id="testimonials">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="testimonials-title text-2xl md:text-3xl font-extrabold text-center mb-12 text-gray-900">What Teams Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card bg-white rounded-2xl p-8 flex flex-col items-center shadow border border-gray-200">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mb-3 border border-blue-200" />
              <p className="text-gray-800 text-center mb-3">“{t.text}”</p>
              <span className="font-semibold text-blue-500">{t.name}</span>
              <span className="text-xs text-gray-400">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 