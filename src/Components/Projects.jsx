import React, { useState } from "react";
import { Link } from "react-router-dom";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import isabelaco from "../assets/Isebelaco.png";
import techub from "../assets/techub.png";
import PageMotion from "../Motions/PageMotion";

function Projects() {
  return (
    <>
      <div className="bg-black relative text-white ">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="w-full h-full flex justify-center items-center z-30 lg:p-10">
          <div className="container py-10">
          <div className="text-center lg:text-start font-[satisfy] m-5 2xl:p-0 xl/lg:p-0 pt-10 tracking-wider text-[2.5rem]">
            Projects
          </div>
          <div className=" flex xl:flex-row flex-col justify-center items-center">
          <PageMotion>
            <div className="pic md:cursor-pointer relative flex flex-col lg:items-start items-center w-auto h-[420px]  m-5 bg-[#ededed] p-3 rounded-md">
              <img
                src={Project1}
                alt="Project"
                className="w-[430px] h-auto lg:h-[280px] rounded-xl shadow-md"
              />
              <div className="text-xl font-semibold font-[grotesk] m-2 text-black">
                <img src={isabelaco} alt="logo" className="w-[130px]" />
              </div>
              <div className="flex text-base gap-2 flex-wrap">
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#dd4b24]">
                  <IoLogoHtml5 size={25} />
                  HTML
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#1b70b5]">
                  <IoLogoCss3 size={25} />
                  CSS
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2 text-[#dd9c24]">
                  <DiJavascript size={25} />
                  Java Script
                </div>
              </div>
              <Link to="https://miniproj-1.vercel.app/">
                {" "}
                <div className="hide absolute w-full h-full flex justify-center items-center p-4 top-0 left-0 z-10 text-center text-xs lg:text-base font-[grotesk]">
                  "Crafted with precision using HTML, CSS, and JavaScript,
                  Isabelaco's hotel booking landing page seamlessly blends
                  modern aesthetics with intuitive functionality, providing
                  users a delightful experience in discovering and booking their
                  ideal accommodations.
                  <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 -z-10"></div>
                </div>
              </Link>
            </div>
            </PageMotion>
            <PageMotion>
            <div className="pic md:cursor-pointer relative flex flex-col lg:items-start items-center w-auto h-[420px] m-5 bg-[#ededed] p-3 rounded-md">
              <img
                src={Project2}
                alt="Project"
                className="w-[430px] h-auto lg:h-[280px] rounded-xl shadow-md"
              />
              <div className="text-xl font-semibold font-[grotesk] m-2 text-black">
                <img src={techub} alt="logo" className="w-[130px]" />
              </div>
              <div className="flex text-base gap-2 flex-wrap">
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#dd4b24]">
                  <IoLogoHtml5 size={25} />
                  HTML
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#1b70b5]">
                  <FaReact size={25} />
                  React
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2 text-[#7ab561]">
                  <FaNodeJs size={25} />
                  Node.js
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2 text-[#3abef8]">
                  <SiTailwindcss size={25} />
                  Tailwind
                </div>
              </div>
              <Link to="techub-tau.vercel.app">
                <div className="hide absolute w-full h-full flex justify-center items-center p-4 top-0 left-0 z-10 text-center text-xs lg:text-base font-[grotesk]">
                  "techub is a responsive e-commerce website with a clean and
                  intuitive user interface. It features a dynamic navigation bar
                  with dropdown functionality, allowing users to explore various
                  sections such as Home, Shop, Gallery, and Contact. The site
                  also includes a user authentication system, enabling users to
                  sign up and access a personalized profile. Additionally, a
                  shopping cart system is implemented, providing users with a
                  seamless experience to add, remove, and view items in their
                  cart. The project is designed to offer a visually appealing
                  and user-friendly online shopping experience.
                  <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 -z-10"></div>
                </div>
              </Link>
            </div>
            </PageMotion>
            <PageMotion>
            <div className="pic md:cursor-pointer relative flex flex-col lg:items-start items-center w-auto h-[420px] m-5 bg-[#ededed] p-3 rounded-md">
              <img
                src={Project3}
                alt="Project"
                className="w-[430px] h-auto lg:h-[280px] rounded-xl shadow-md"
              />
              <div className="text-xl font-semibold font-[grotesk] m-2 text-black">
                ETZY Clone
              </div>
              <div className="flex text-base gap-2 flex-wrap">
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#dd4b24]">
                  <IoLogoHtml5 size={25} />
                  HTML
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2  text-[#1b70b5]">
                  <IoLogoCss3 size={25} />
                  CSS
                </div>
                <div className="flex justify-center items-center bg-white rounded-xl px-2 text-[#dd9c24]">
                  <DiJavascript size={25} />
                  Java Script
                </div>
              </div>
              <Link to="https://etz-y.vercel.app/">
                <div className="hide absolute w-full h-full flex justify-center items-center p-4 top-0 left-0 z-10 text-center text-xs lg:text-base  font-[grotesk]">
                  "I am meticulously crafting a replica of Etsy landing page
                  using HTML and CSS, focusing on replicating its visually
                  appealing design, seamless user interface to create an
                  immersive online shopping experience.
                  <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 -z-10"></div>
                </div>{" "}
              </Link>
            </div>
            </PageMotion>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
