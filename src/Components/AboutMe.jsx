import React from "react";
import Percent1 from "../assets/Percent1.png";
import Percent2 from "../assets/Percent2.png";
import { FaArrowRight } from "react-icons/fa6";
import Resume from '../Pages/ResumeUpdated.pdf'

function AboutMe() {
  return (
    <>
      <div className="bg-white text-black mt-20 relative">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="w-full h-full z-30 lg:p-10 p-7 ">
          <div className="bttn text-center lg:text-start text-3xl font-[satisfy] m-5 tracking-wider">
            About Me
          </div>
          <div className=" flex lg:flex-row flex-col lg:justify-around justify-center">
            <div className="flex flex-col items-center w-auto lg:w-[70%] m-5">
              <div className="text-xl m-10 mx-10 font-[grotesk] text-center">
                Hello, I'm Francis Mar Bulusan Subsilica, but my friends call me
                Ikko. During my free time, you'll often find me immersed in
                anime or whipping up my favorite dishes in the kitchen. I'm a
                web designer based in Isabela, Philippines, passionate about
                crafting websites for small businesses in our town. Regardless
                of your location, I'm here to help you build a stunning website.
                Let's work together to bring your online presence to life!
              </div>
              <div className="bttn text-sm lg:text-lg font-[grotesk] lg:m-10 m-4 relative z-30">
              <a href={Resume} download={Resume}>  <button className="lg:px-7 px-5 lg:py-3 py-1 mx-3 flex items-center border border-black rounded-md hover:bg-black  hover:text-white duration-300 ease-in-out">
                  Download CV
                  <span className="mx-2">
                    <FaArrowRight />
                  </span>
                </button></a>
              </div>
            </div>
            <div className="ikmg lg:w-[50%] w-auto flex flex-col justify-center items-center mb-7 mt-10 p-5">
              <div className="font-[grotesk] font-semibold ">
                <img src={Percent1} alt="precent" className="w-[350px]" />
                <div className="ml-5 text-base mt-2 italic">95%</div>
                <div className="ml-5 text-base tracking-wide">Logo Design</div>
              </div>
              <div className="font-[grotesk] font-semibold mt-2 ">
                <img src={Percent2} alt="precent" className="w-[350px]" />
                <div className="ml-5 text-base mt-2 italic">90%</div>
                <div className="ml-5 text-base tracking-wide">
                  Brand Identity
                </div>
              </div>
              <div className="font-[grotesk] font-semibold mt-2 ">
                <img src={Percent2} alt="precent" className="w-[350px]" />
                <div className="ml-5 text-base mt-2 italic">90%</div>
                <div className="ml-5 text-base tracking-wide">Database</div>
              </div>
              <div className="font-[grotesk] font-semibold mt-2">
                <img src={Percent1} alt="precent" className="w-[350px]" />
                <div className="ml-5 text-base mt-2 italic">95%</div>
                <div className="ml-5 text-base tracking-wide">
                  Responsive Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
