import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-gray-900">RobinRelay</span>
      </div>
      <ul className="flex items-center gap-8 text-sm font-medium">
        <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a></li>
        <li><a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a></li>
        <li><a href="#early-access" className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Get Early Access</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 