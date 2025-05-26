import React from "react";
import ProfilePic from "../../assets/Pic.jpg"; // Replace with your actual image

const Home = () => {
  return (
    <section className="bg-black text-white min-h-[calc(100vh-72px)] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 md:py-20">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-cyan-400">Manish</span><br />
          <span className="text-purple-500">Mandal</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
              Frontend Developer & Backend Developer 
        </h2>
        <p className="mt-4 text-gray-400">
          I am a versatile Full Stack Developer with expertise in crafting seamless web applications,
          blending front-end creativity with back-end efficiency.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="mt-10 md:mt-0">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/30">
          <img
            src={ProfilePic}
            alt="Manish"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
