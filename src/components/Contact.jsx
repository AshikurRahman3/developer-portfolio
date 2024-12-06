import React from "react";

function Contact() {
  return (
    <div id="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <section className="contact p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <a
              href="mailto:ashikur.rahman9656@gmail.com"
              className="text-teal-500 hover:text-teal-700"
            >
              Send Email
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Phone</h3>
            <a
              href="tel:+8801726282979"
              className="text-teal-500 hover:text-teal-700"
            >
              01726282979
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/AshikurRahman3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-700"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashikur-rahman-838a07206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
