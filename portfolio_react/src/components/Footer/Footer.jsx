import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 text-center shadow-inner shadow-cyan-500/10 border-t border-gray-800">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:scale-110 transition-transform duration-200"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:scale-110 transition-transform duration-200"
        >
          <FaTwitter size={28} />
        </a>
      </div>

      {/* Made with love */}
      <p className="text-sm mb-1">
        Made with <span className="text-red-500">❤️</span> by <span className="text-blue-400">Manish Mandal</span>
      </p>

      {/* Copyright */}
      <p className="text-xs text-gray-500">&copy; 2025 All rights reserved</p>
    </footer>
  );
};

export default Footer;
