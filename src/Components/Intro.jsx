import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import PageMotion from "../Motions/PageMotion";

function Intro() {

  const Social = [
    {
      Icon: <FaFacebookF className="text-[2.5rem] text-[#251744] p-1 bg-white border-[#251744]  rounded-md  hover:bg-[#3f2775] hover:text-white hover:border-white duration-300 ease-in-out border" />,
      Link: "https://www.facebook.com/akofrancisko/",
    },
    {
      Icon: <AiFillInstagram className="text-[2.5rem] text-[#251744] p-1 bg-white border-[#251744]  rounded-md  hover:bg-[#3f2775] hover:text-white hover:border-white duration-300 ease-in-out border" />,
      Link: "https://www.instagram.com/cisciretsit/",
    },
    {
      Icon: <FaLinkedinIn className="text-[2.5rem] text-[#251744] p-1 bg-white border-[#251744]  rounded-md  hover:bg-[#3f2775] hover:text-white hover:border-white duration-300 ease-in-out border" />,
      Link: "https://www.linkedin.com/in/francis-mar-subsilica-659b76276/",
    },
    {
      Icon: <FaTwitter className="text-[2.5rem] text-[#251744] p-1 bg-white border-[#251744]  rounded-md  hover:bg-[#3f2775] hover:text-white hover:border-white duration-300 ease-in-out border" />,
      Link: "https://twitter.com/franciskoysssss",
    },
    {
      Icon: <BsGithub className="text-[2.5rem] text-[#251744] p-1 bg-white border-[#251744]  rounded-md  hover:bg-[#3f2775] hover:text-white hover:border-white duration-300 ease-in-out border" />,
      Link: "https://github.com/Francis1829",
    },
  ];
  return (
    <>       
     
      <div className="bg relative top-0 w-full  h-screen z-10 bg-[url('../src/assets/Unsplash5.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="bg-white absolute  w-full h-full opacity-50 -z-10"></div>
     
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        </div>
   
      <div className="w-full h-screen lg:top-24 top-12 z-30 absolute">
        <div className=" flex xl:flex-row lg:flex-row flex-col-reverse justify-center items-center 2xl:mt-[10rem] xl/lg:mt-[5rem] 2xl:ml-[12rem]">
          <div className="flex flex-col justify-center items-center w-auto lg:w-[50%] xl:ml-20 lg:ml-20 m-4">
          <PageMotion>
          <div className="font-[gresan] text-3xl text-[#251744]">FrancisDevs</div>
          </PageMotion>
          <PageMotion>
            <div className="lg:text-lg text-base font-[grotesk] text-center text-white">
              Hello, I'm a web developer dedicated to crafting responsive and
              user-friendly websites. With a strong foundation in programming
              and design, I excel at meeting diverse content needs. As a
              detail-oriented professional, I am eager to contribute my skills.
              Join me down below, and let's get cracking!
            </div>
            </PageMotion>
            <PageMotion>
            <div className="flex flex-row mt-1">
            {Social.map((list) => (
              <ul className="text-center mb-2 mx-1">
                <li className="">
                  <Link to={list.Link} className="">
                    {list.Icon}
                  </Link>
                </li>
              </ul>
            ))} 
              </div>
              </PageMotion>
          </div>
          <div className=" flex flex-col justify-start w-[60%] xl/lg:mt-[9rem] md:-mt-[1rem] mt-10 tracking-widest xl:items-start lg:items-start items-center ">
           <div className=" font-[minne] m-0 uppercase text-[2.5rem] md:text-[6rem]  xl:text-[6rem] lg:text-[5rem] xl:-ml-[12rem] lg:-ml-[2rem] xl/lg:-mt-[11rem] text-white/80">Creative</div>
  
            <PageMotion>
            <div className="font-[minne] m-0 uppercase text-[2rem] md:text-[5rem] xl:text-[5rem] lg:text-[4rem] xl/lg:-mt-[1.5rem] xl/lg:ml-5 text-[#251744] ">Frontend</div>
            </PageMotion>
            <div className="font-[minne] m-0 uppercase text-[2.3rem] md:text-[5.5rem] xl:text-[5.5rem] lg:text-[4rem] xl/lg:-mt-[.5rem] xl:-ml-[7rem] lg:-ml-[1rem] text-white/70">developer</div>
            </div>
        </div>
      </div>

    </>
  );
}

export default Intro;
