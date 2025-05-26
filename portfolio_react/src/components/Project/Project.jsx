import React from "react";

const projects = [
  {
    title: "Full Stack Food Delivery App",
    description:
      "An end-to-end food ordering app with real-time tracking, authentication, admin dashboard, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "+3"],
    image: "https://t3.ftcdn.net/jpg/03/51/02/46/360_F_351024684_qRJBZa0XlvKs5bKDHVqlcbVF2ux4tDga.jpg", // Place in public/images/
  },
  {
    title: "Weather App ",
    description:
      "A sleek weather forecasting app using React Router, fetching real-time data from weather APIs with dynamic routing.",
    tech: ["React", "React Router", "OpenWeatherMap API", "+2"],
    image: "https://images.unsplash.com/photo-1514632595-4944383f2737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Amazon Clone",
    description:
      "A fully responsive eCommerce UI clone of Amazon using React, Firebase for authentication and Context API for cart management.",
    tech: ["React", "Firebase", "Context API", "CSS", "+2"],
    image: "https://i.ytimg.com/vi/yjZmtEGq_ss/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpQR397boidhfaX1NIq4FOoy65-g",
  },
  {
    title: "ECommerce_website",
    description:
      "A fully responsive eCommerce UI clone of Amazon using React, Firebase for authentication and Context API for cart management.",
    tech: ["React", "tailwind Css", "Context API", "CSS", "+2"],
    image: "https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?ga=GA1.1.858137007.1741064688&semt=ais_items_boosted&w=740",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-16 px-5 sm:px-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-cyan-400/30"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs border border-cyan-400 text-cyan-300 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
