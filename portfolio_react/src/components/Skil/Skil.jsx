import React from 'react';
import { FaStar, FaTrophy, FaCode } from 'react-icons/fa';

// Skill Progress Bar Component
const ProgressBar = ({ percent }) => (
  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
      style={{ width: `${percent}%` }}
    />
  </div>
);

// Skills and Achievements Component
const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'HTML5', percent: 90 },
      { name: 'CSS3', percent: 80 },
      { name: 'JavaScript', percent: 80 },
      { name: 'Bootstrap', percent: 90 },
      { name: 'React', percent: 70 },
    ],
    backend: [
      { name: 'Node.js', percent: 80 },
      { name: 'Express.js', percent: 80 },
     
      { name: 'Python', percent: 90 },
      { name: 'MongoDB', percent: 80 },
    ],
  };

  const achievements = [
    {
      icon: <FaStar size={40} className="text-cyan-400" />,
      number: '100%',
      title: 'Success Rate',
      description: 'Perfect track record of project completion',
    },
    {
      icon: <FaTrophy size={40} className="text-cyan-400" />,
      number: '5+',
      title: 'Awards Won',
      description: 'Recognition for excellence in web development and design and debugging',
    },
    {
      icon: <FaCode size={40} className="text-cyan-400" />,
      number: '30+',
      title: 'Projects Completed',
      description: 'Completed diverse projects across multiple domains, delivering exceptional results.',
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-10 px-6 md:px-20">
      {/* Skills & Expertise */}
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-10">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Frontend</h3>
          {skillsData.frontend.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <ProgressBar percent={skill.percent} />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Backend</h3>
          {skillsData.backend.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <ProgressBar percent={skill.percent} />
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">
        Achievements
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="bg-[#0d0d0d] p-8 rounded-xl shadow-lg text-center border border-gray-800 hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)' }}
          >
            <div className="mb-4">{achieve.icon}</div>
            <h3 className="text-2xl font-bold text-cyan-400">{achieve.number}</h3>
            <p className="font-semibold mt-2 mb-1">{achieve.title}</p>
            <p className="text-sm text-gray-300">{achieve.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
