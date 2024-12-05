import React from 'react';
import { FaPython, FaJsSquare, FaJava, FaNode, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';

function Skills() {
    return (
        <div name="Skills" className="skills-section p-10  rounded-lg shadow-lg ">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid bg-gray-50 rounded-lg shadow-lg grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
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
        </div>
    );
}

export default Skills;
