import React, { useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(null);

  const toggleVisibility = (index) => {
    setIsVisible(isVisible === index ? null : index);
  };

  return (
    <div>
      <div className="lg:ml-64 sm:ml-4">
        <div className="sm:mt-16 lg:mt-20 sm:ml-10 sm:text-2xl lg:text-4xl font-bold">
          FAQ
        </div>
        <div
          onClick={() => toggleVisibility(1)}
          className="hover:text-green-500 sm:ml-10 sm:text-xl cursor-pointer sm:mt-5 text-black"
        >
          How to create a website for my business?
          {isVisible === 1 && (
            <p className="text-slate-500 sm:ml-2 sm:mt-2 sm:text-xs sm:mr-10 lg:mr-52">
              You can work with a web designer to create a website for your
              business, but you also have the option to build one for free...
            </p>
          )}
        </div>
        <div
          onClick={() => toggleVisibility(2)}
          className="hover:text-green-500 sm:mt-5 sm:text-xl sm:ml-10 cursor-pointer text-black"
        >
          How do website makers work?
          {isVisible === 2 && (
            <p className="text-slate-500 sm:ml-2 sm:mt-2 sm:text-xs sm:mr-10 lg:mr-52">
              Business website makers come with a library of website
              templates...
            </p>
          )}
        </div>
        <div
          onClick={() => toggleVisibility(3)}
          className="hover:text-green-500 sm:ml-10 sm:text-xl cursor-pointer sm:mt-5 text-black"
        >
          Is it better to build your own website or use a website builder?
          {isVisible === 3 && (
            <p className="text-slate-500 sm:ml-2 sm:mt-2 sm:text-xs sm:mr-10 lg:mr-52">
              It all depends on your skill and time investment. For those
              with...
            </p>
          )}
        </div>
        <div
          onClick={() => toggleVisibility(4)}
          className="hover:text-green-500 sm:ml-10 sm:text-xl cursor-pointer sm:mt-5 text-black"
        >
          What do customers look for in a website?
          {isVisible === 4 && (
            <p className="text-slate-500 sm:ml-2 sm:mt-2 sm:text-xs sm:mr-10 lg:mr-52">
              Relevant content is paramount, so make sure your business
              website...
            </p>
          )}
        </div>
        <div
          onClick={() => toggleVisibility(5)}
          className="hover:text-green-500 sm:ml-10 sm:text-xl cursor-pointer sm:mb-20 sm:mt-5 text-black"
        >
          How do small businesses create a professional website?
          {isVisible === 5 && (
            <p className="text-slate-500 sm:ml-2 sm:mt-2 sm:text-xs sm:mr-10 lg:mr-52">
              For a professional-looking small business website, prioritize...
            </p>
          )}
        </div>
      </div>
      <div className="text-center">
        <img
          className="sm:ml-72 sm:mb-5 lg:ml-[50%] lg:mt-20 lg:mb-5"
          src="https://static-cse.canva.com/_next/static/media/quotation_mark.file.9ed02a95.svg"
        />
      </div>
      <div className="text-center sm:ml-4 sm:mr-4 lg:ml-72 lg:mr-72 lg:mb-10 sm:mb-5 text-sm sm:text-base">
        @canva is simply outstanding as a tool to create designs...
      </div>
      <div className="text-center sm:ml-4 sm:text-sm lg:text-base text-slate-500">
        © 2024 All Rights Reserved, Canva®
      </div>
    </div>
  );
}

export default Footer;
