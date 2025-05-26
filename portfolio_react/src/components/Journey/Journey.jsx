import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const journeyData = [
 
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: "Computer Science Degree",
    subtitle: "Accurate Institute of Management & Technology",
    description: "Bachelor's degree in Computer Science",
    date: "2021 - 2025",
  },
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: "High School (12th)",
    subtitle: "XYZ School",
    description: "Completed senior secondary education with Science stream.",
    date: "2017 - 2019",
  },
  {
    icon: <FaGraduationCap className="text-xl text-white" />,
    title: "High School (10th)",
    subtitle: "XYZ School",
    description: "Completed Secondary Education with distinction ",
    date: "2016 - 2017",
  },
];

const Journey = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-center text-4xl font-bold text-blue-500 mb-12">
        My Journey
      </h2>

      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-cyan-400 h-full left-1/2 transform -translate-x-1/2"></div>

        {journeyData.map((item, index) => {
  const isLeft = index % 2 === 0;
  const aosType = isLeft ? "fade-right" : "fade-left";


          return (
            <div
              key={index}
      data-aos={aosType}
      className={`mb-12 w-full flex ${isLeft ? "justify-start" : "justify-end"} relative`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-gray-900 p-6 rounded-lg shadow-md relative">
                  <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-cyan-500 w-10 h-10 flex items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-cyan-400">{item.subtitle}</p>
                  <p className="text-sm mt-2">{item.description}</p>
                  <p className="text-gray-400 text-xs mt-2">{item.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
