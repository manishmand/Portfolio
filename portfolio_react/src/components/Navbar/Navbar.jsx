import React from "react";

const Navbar = () => {
  const navItems = ["Home", "Journey", "Portfolio", "Skills", "Achievements", "Contact"];

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black text-white">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-2 rounded-full">
          <span className="font-bold text-white text-xl">MM</span>
        </div>
        <h1 className="text-xl font-semibold">Manish</h1>
      </div>
      <nav className="space-x-6 hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;


