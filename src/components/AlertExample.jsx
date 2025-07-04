import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AlertExample = () => {
  const root = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 } });
      tl.from(".alert-title", { y: 40, opacity: 0 })
        .from(".alert-card", { y: 40, opacity: 0, stagger: 0.15 }, "-=0.5");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-24 bg-white relative overflow-hidden" id="alert-example">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\'/%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' stroke=\'%23E5E7EB\'/%3E%3C/svg%3E')] bg-repeat opacity-60" />
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h2 className="alert-title text-2xl md:text-3xl font-extrabold text-center mb-8 text-gray-900">How RobinRelay Helps</h2>
        <div className="alert-card bg-white rounded-2xl p-8 shadow border border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <img src="https://dummyimage.com/40x40/23272a/8b5cf6&text=JD" alt="User" className="rounded-full w-10 h-10 border border-gray-200" />
            <div>
              <span className="font-semibold text-gray-900">Jane Doe</span>
              <p className="text-gray-700">Datadog alert: <span className="text-blue-500 font-semibold">payment-gateway latency spike</span></p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="https://dummyimage.com/40x40/23272a/34d399&text=RR" alt="RobinRelay" className="rounded-full w-10 h-10 border border-blue-200" />
            <div>
              <span className="font-semibold text-blue-500">RobinRelay</span>
              <p className="text-gray-800 mt-1">🧠 <span className="font-bold text-blue-600">I've seen this before!</span> <br/> Last time, the fix was: <span className="font-semibold text-blue-400">Restart <span className="underline">payment-gateway</span> + clear <span className="underline">Redis cache</span></span>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlertExample; 