import React, { useState } from "react";

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      name: "Ai Resume Maker",
      smallGif: "/projects/ai_resume_maker.mp4",
      largeVideo: "/projects/ai_resume_maker.mp4",
      githubLink: "https://github.com/AshikurRahman3/ai-resume-maker",
      liveLink: "https://ashikurs-ai-resume-maker.vercel.app/",
      description: <>AI Resume Maker is a MERN full-stack application for creating, editing, and managing resumes with AI assistance. Built using <b>React.js, Redux Toolkit, Node.js, Express.js, and MongoDB</b>, it includes <b>JWT</b> authentication, live preview, and AI-powered summary suggestions for multiple saved resumes.</>,
    },
    {
      id: 2,
      name: "Dine POS",
      smallGif: "/projects/pos_original2.mp4",
      largeVideo: "/projects/pos_original2.mp4",
      githubLink: "https://github.com/AshikurRahman3/dine-pos",
      liveLink: "https://dine-pos.vercel.app",
      description: <>Dine POS is a Mern full-stack Point of Sale system for managing item selection, orders, billing, and customer records. Developed with <b>React.js, Redux, Node.js, Express.js, and MongoDB</b>, it features user <b>JWT</b> authentication and smooth cart-based order processing.</>,
    },
    {
      id: 3,
      name: "Quick Basket",
      smallGif: "/projects/quick_basket_demo_video_main.mp4",
      largeVideo: "/projects/quick_basket_demo_video_main.mp4",
      githubLink: "https://github.com/AshikurRahman3/quick-basket",
      liveLink: "https://quick-basket-uqmr.onrender.com/",
      description: <>Quick Basket is an e-commerce platform enabling users to browse and buy products from specialized shops (Fish, Meat, Vegetables, Fruit, Grocery) with filters for shop type and city. Built with <b>Node.js, Express.js, and MongoDB</b>, it offers a dynamic UI and single-shop checkout for a seamless experience</>,
    },
    {
      id: 4,
      name: "University Book Management System",
      smallGif: "/projects/university_book_management_system_main.mp4",
      largeVideo: "/projects/university_book_management_system_main.mp4",
      githubLink: "https://github.com/AshikurRahman3/university_book_management_system",
      liveLink: "#",
      description: <>SUST Book Portal is a <b>Django-based</b> university book management system with <b>admin</b> controls, allowing teachers to manage semester-wise books with image uploads, using <b>MySQL</b> and <b>Pillow</b>.</>,
    },
    {
      id: 5,
      name: "Calorie Analysis",
      smallGif: "/projects/calorie_analysis_large.gif",
      largeGif: "/projects/calorie_analysis_large.gif",
      githubLink: "https://github.com/AshikurRahman3/Calorie-Analysis-",
      liveLink: "#",
      description: <>Calorie Analysis is an <b>Android</b> app <b>(Java)</b> that helps users monitor calorie intake, calculate BMI, and track fitness progress with <b>Firebase</b> for data storage. It features Google Sign-In, global user rankings, and intuitive navigation with fragments, RecyclerView, and multiple food categories.</>,
    },
    {
      id: 6,
      name: "Bangladeshi Vehicle Counter",
      smallGif: "/projects/bangladeshi_vehicle_counter.mp4",
      largeVideo: "/projects/bangladeshi_vehicle_counter.mp4",
      githubLink: "https://github.com/AshikurRahman3/Bangladeshi-Vehicle-Counter",
      liveLink: "#",
      description: <>It is a real-time traffic analysis tool using <b>YOLOv8</b> and <b>OpenCV</b> to detect and count <b>18 vehicle types</b>, achieving <b>0.664 mAP accuracy</b>. Developed in Python with Google Colab, it provides traffic insights through precision-recall metrics and confusion matrices.</>,
    },
  ];

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent the modal from opening when the link is clicked
  };

  return (
    <div id="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <section className="portfolio p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-3 bg-gray-50 rounded-lg shadow-lg">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg shadow-md p-4 flex flex-col h-[500px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Preview Section */}
              <div className="h-48 md:h-60 w-full overflow-hidden rounded-md bg-black">
                {project.smallGif.endsWith(".mp4") ? (
                  <video
                    src={project.smallGif}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.smallGif}
                    alt={`${project.name} Preview`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Title and Description */}
              <h3 className="text-lg md:text-xl font-semibold mt-4">{project.name}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 flex-grow">
                {project.description}
              </p>

              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row justify-between mt-auto pt-4 border-t border-gray-300 gap-2">
                {project.liveLink !== "#" && (
                  <button
                    onClick={(e) => {
                      handleLinkClick(e);
                      window.open(project.liveLink, "_blank");
                    }}
                    className="bg-green-500 text-white text-sm md:text-base py-2 px-3 md:px-4 rounded-md hover:bg-blue-600 transition-all"
                  >
                    View Live
                  </button>
                )}

                <button
                  onClick={(e) => {
                    handleLinkClick(e);
                    window.open(project.githubLink, "_blank");
                  }}
                  className="bg-teal-500 text-white text-sm md:text-base py-2 px-3 md:px-4 rounded-md hover:bg-teal-600 transition-all"
                >
                  View on GitHub
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Large View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-4 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 bg-white rounded-full p-1 shadow-md"
                onClick={closeModal}
                style={{ fontSize: "24px" }}
              >
                ✕
              </button>

              {selectedProject.largeVideo ? (
                <video
                  autoPlay
                  muted
                  controls
                  src={selectedProject.largeVideo}
                  className="rounded-md w-full max-h-[80vh] object-contain"
                />
              ) : (
                <img
                  src={selectedProject.largeGif}
                  alt={`${selectedProject.name} Large View`}
                  className="rounded-md w-full max-h-[80vh] object-cover"
                />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Portfolio;
