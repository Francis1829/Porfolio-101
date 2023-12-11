import React from "react";
import Logo from "../assets/LOGO2.png";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Footer() {
  const MenuList = [
    {
      Name: "Home",
      Paths: "/",
    },
    {
      Name: "About Me",
      Paths: "/AboutMe",
    },
    {
      Name: "Projects",
      Paths: "/Projects",
    },
    {
      Name: "Education",
      Paths: "/Education",
    },
  ];

  const Social = [
    {
      Icon: <FaFacebookF className="text-[3.5rem] text-black p-1 bg-white rounded-md  hover:invert duration-300 ease-in-out border" />,
      Link: "https://www.facebook.com/akofrancisko/",
    },
    {
      Icon: <AiFillInstagram className="text-[3.5rem] text-black p-1 bg-white rounded-md  hover:invert duration-300 ease-in-out border" />,
      Link: "https://www.instagram.com/cisciretsit/",
    },
    {
      Icon: <FaLinkedinIn className="text-[3.5rem] text-black p-1 bg-white rounded-md  hover:invert duration-300 ease-in-out border" />,
      Link: "https://www.linkedin.com/in/francis-mar-subsilica-659b76276/",
    },
    {
      Icon: <FaTwitter className="text-[3.5rem] text-black p-1 bg-white rounded-md  hover:invert duration-300 ease-in-out border" />,
      Link: "https://twitter.com/franciskoysssss",
    },
    {
      Icon: <BsGithub className="text-[3.5rem] text-black p-1 bg-white rounded-md  hover:invert duration-300 ease-in-out border" />,
      Link: "https://github.com/Francis1829",
    },
  ];
  return (
    <>
      <div className="bg-black relative text-white">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="flex p-10 xl:flex-row lg:flex-row flex-col justify-between relative z-10">
          <div className="md:cursor-pointer flex flex-col lg:items-start items-center  p-3 lg:w-[35%] w-auto ">
            <img src={Logo} alt="Logo" className="w-[100px]" />
            <div className="font-semibold text-xl">Portfolio | Francis Mar Subsilica</div>
          </div>
          <div className="md:cursor-pointer flex flex-col justify-center items-center lg:w-[30%] w-auto ">
          <div className="font-[grotesk] font-medium text-[3rem] mb-2">Menu</div>
            {MenuList.map((item) => (
              <ul className="flex mb-2 mx-1 font-[grotesk] xl:lg:text-2xl text-xl">
                <li className="hover:underline">
                  <Link to={item.Paths}>{item.Name}</Link>   
                </li>
              </ul>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[35%] w-auto ">
            <div className="font-[grotesk] font-medium text-[3rem] mb-2">Socials</div>
            <div className="flex w-[40%] justify-center items-center flex-wrap lg:flex-row flex-col">
            {Social.map((list) => (
              <ul className="text-center my-2 mx-2">
                <li className="">
                  <Link to={list.Link} className="">
                    {list.Icon}
                  </Link>
                </li>
              </ul>
            ))} 
              </div>
          </div>
       
        </div>
        <div class="flex justify-center text-lg p-5">
          <div class="">© Copyright 2023 - FM • All rights reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
