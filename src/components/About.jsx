import React from "react";
import { FaPython, FaJsSquare, FaJava, FaNode, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaAws, FaDocker } from 'react-icons/fa';
import { FaCode, FaTrophy } from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#education" className="text-xl font-semibold text-blue-500">Education</a>
          <a href="#skills" className="text-xl font-semibold text-blue-500">Skills</a>
        </div>

        {/* Education Section */}
        <section id="education" className="education-section py-10 bg-white min-h-screen">
          <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
          <div className="flex justify-center">
            <div className="max-w-lg text-center bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science and Engineering</h3>
              <p className="text-lg mt-2 text-gray-600">Shahjalal University of Science and Technology (SUST)</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section py-10 bg-gray-50 rounded-lg shadow-lg min-h-screen">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {/* Programming Languages */}
            <div className="skill-item text-center">
              <FaPython className="text-4xl text-yellow-500" />
              <h3 className="text-xl font-semibold mt-2">Python</h3>
            </div>
            <div className="skill-item text-center">
              <FaJsSquare className="text-4xl text-yellow-400" />
              <h3 className="text-xl font-semibold mt-2">JavaScript</h3>
            </div>
            <div className="skill-item text-center">
              <FaJava className="text-4xl text-orange-500" />
              <h3 className="text-xl font-semibold mt-2">Java</h3>
            </div>
            <div className="skill-item text-center">
              <FaNode className="text-4xl text-green-600" />
              <h3 className="text-xl font-semibold mt-2">Node.js</h3>
            </div>

            {/* Web Development */}
            <div className="skill-item text-center">
              <FaReact className="text-4xl text-cyan-500" />
              <h3 className="text-xl font-semibold mt-2">React</h3>
            </div>
            <div className="skill-item text-center">
              <FaHtml5 className="text-4xl text-orange-600" />
              <h3 className="text-xl font-semibold mt-2">HTML</h3>
            </div>
            <div className="skill-item text-center">
              <FaCss3Alt className="text-4xl text-blue-500" />
              <h3 className="text-xl font-semibold mt-2">CSS</h3>
            </div>
            <div className="skill-item text-center">
              <FaDatabase className="text-4xl text-gray-700" />
              <h3 className="text-xl font-semibold mt-2">MySQL</h3>
            </div>

            {/* Tools */}
            <div className="skill-item text-center">
              <FaGitAlt className="text-4xl text-red-500" />
              <h3 className="text-xl font-semibold mt-2">Git</h3>
            </div>
            <div className="skill-item text-center">
              <FaGithub className="text-4xl text-black" />
              <h3 className="text-xl font-semibold mt-2">GitHub</h3>
            </div>

          </div>
        </section>

        {/* Competitive Programming Section */}
        <section className="competitive-programming-section py-10 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8">Competitive Programming</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Solved Problems */}
            <div className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg">
              <FaCode className="text-4xl text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold">Problem Solving</h3>
                <p className="text-gray-600 mt-2">
                  Solved over <span className="font-bold text-blue-600">300 problems</span> on platforms like
                  <span className="font-bold"> Codeforces</span>, <span className="font-bold">LeetCode</span>,
                  <span className="font-bold"> HackerRank</span>, <span className="font-bold">SPOJ</span>, and
                  <span className="font-bold"> CodeChef</span>.
                </p>
              </div>
            </div>

            {/* Contest Participation */}
            <div className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg">
              <FaTrophy className="text-4xl text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold">Contest Participation</h3>
                <p className="text-gray-600 mt-2">
                  Regularly participate in programming contests on <span className="font-bold">Codeforces</span> and other online judges.
                  Participated multiple times in the <span className="font-bold">ACM ICPC Dhaka Regional Preliminary</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
