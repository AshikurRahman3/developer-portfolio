import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";  // Import GitHub icon
import { FiPhone } from "react-icons/fi";  // Import Telephone icon
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="mailto:ashikur.rahman9656@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
              </a>


              <a href="tel:+8801726282979" target="_blank" rel="noopener noreferrer">
                <FiPhone size={24} />
              </a>
              <a href="https://github.com/AshikurRahman3" target="_blank" rel="noopener noreferrer">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashikur-rahman-838a07206/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Ashikur Rahman. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
