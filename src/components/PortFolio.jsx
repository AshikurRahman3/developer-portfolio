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
      name: "Spotify Clone",
      smallGif: "/projects/spotify_clone_small.gif",
      largeGif: "/projects/spotify_clone_large.gif",
      githubLink: "https://github.com/AshikurRahman3/spotify-clone",
      liveLink: "https://spotify-clone-1s.netlify.app/",
      description: "A music streaming app with features like search, playlist creation, and managing liked songs.",
    },
    {
      id: 2,
      name: "Realtime Chatrooms",
      smallGif: "/projects/chat.gif",
      largeGif: "/projects/chat.gif",
      githubLink: "https://github.com/AshikurRahman3/chat-app",
      liveLink: "https://realtime-chatroomss.netlify.app/",
      description: "A real-time chat app built with React, Node.js, and Socket.io for seamless communication.",
    },
    {
      id: 3,
      name: "E-Commerce Web App",
      smallGif: "/projects/ecommerce_small.gif",
      largeGif: "/projects/ecommerce_large.gif",
      githubLink: "https://github.com/AshikurRahman3/ecommerce",
      liveLink: "https://e-commerce-app-test.netlify.app/",
      description: "A full-stack e-commerce app built with the MERN stack and Redux, featuring cloud deployment.",
    },
    {
      id: 4,
      name: "Calorie Analysis",
      smallGif: "/projects/calorie_analysis_small.gif",
      largeGif: "/projects/calorie_analysis_large.gif",
      githubLink: "https://github.com/AshikurRahman3/Calorie-Analysis-",
      description: "An Android app to track calories, calculate BMI, and support fitness goals.",
    },
    {
      id: 5,
      name: "Bangladeshi Vehicle Counter",
      smallGif: "/projects/bangladeshi_vehicle_counter.gif",
      largeVideo: "/projects/bangladeshi_vehicle_counter.mp4",
      githubLink: "https://github.com/AshikurRahman3/Bangladeshi-Vehicle-Counter",
      description: "A real-time vehicle detection tool using YOLOv8n to count vehicles in Bangladesh.",
    },
  ];

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent the modal from opening when the link is clicked
  };

  return (
    <div id="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <section className="portfolio p-6">
        <h1 className="text-4xl font-bold text-center mb-10"></h1>
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid p-20 bg-gray-50 rounded-lg shadow-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg shadow-md p-4 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer h-full"
                onClick={() => openModal(project)}
              >
                <div>
                  {/* Image Section */}
                  <div className="relative">
                    {project.id === 4 ? (
                      <div className="aspect-[10/22] max-h-60">
                        <img
                          src={project.smallGif}
                          alt={`${project.name} Preview`}
                          className="rounded-md w-full h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={project.smallGif}
                          alt={`${project.name} Preview`}
                          className="rounded-md w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                  <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between mt-auto pt-4 border-t border-gray-300">
                  <button
                    onClick={(e) => {
                      handleLinkClick(e);
                      window.open(project.githubLink, "_blank");
                    }}
                    className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 hover:text-white transition-all"
                  >
                    View on GitHub
                  </button>
                  {project.id < 4 && (
                    <button
                      onClick={(e) => {
                        handleLinkClick(e);
                        window.open(project.liveLink, "_blank");
                      }}
                      className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 hover:text-white transition-all"
                    >
                      View Live
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Large GIFs or Video */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
            <div className="bg-white rounded-lg p-4 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
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
                  src={selectedProject.largeVideo}
                  controls
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
