import React from "react";

import pic from "../../public/code1.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';


import { FaDatabase } from 'react-icons/fa';



function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-teal-700 font-bold"
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I'm a full-stack developer skilled in building scalable, user-focused applications. While I work across the stack, my passion lies in backend development, leveraging technologies like Node.js, Express.js, MongoDB, and MySQL. I value clean, efficient code and continuously strive to create impactful solutions.

            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">

                  <ul className="flex space-x-5">
                    <li>
                      <a href="https://www.linkedin.com/in/ashikurrahman3" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:ashikur.rahman9656@gmail.com">
                        <FaEnvelope className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="tel:+8801726282979">
                        <FaPhone className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/AshikurRahman3" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl cursor-pointer" />
                      </a>
                    </li>
                  </ul>


                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaDatabase className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
