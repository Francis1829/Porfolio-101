import React from "react";
import Logo from "../assets/LOGO2.png";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import PageMotion from "../Motions/PageMotion";


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
    
      <div className=" relative text-white">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="flex p-5 2xl:mx-[30rem] xl:mx-[20rem] lg:mx-[10rem] md:mx-[5rem] m-0 flex-col relative justify-center items-center z-10">
          <div className="md:cursor-pointer flex flex-col items-center  p-3 w-full ">
            <img src={Logo} alt="Logo" className="w-[100px]" />
            <div className="font-semibold text-xl">Portfolio | Francis Mar Subsilica</div>
          </div>
        <div className="2xl:text-[6rem] xl/lg:text-[6rem] text-[4rem] font-[grotesk] font-bold after:content-['.'] after:text-[#251744]">Contact</div>

        <div className="text-2xl text-center my-5 leading-8">Shoot me an email if you want to connect! You can also find me on <Link to="https://www.linkedin.com/in/francis-mar-subsilica-659b76276/" className="hover:underline text-[#251744] font-semibold">Linkedin</Link> or <Link to="https://www.instagram.com/cisciretsit/" className="font-semibold hover:underline text-[#251744]">Instagram</Link> if that's more your speed.</div>

        <div class="flex justify-center items-center text-2xl p-5">     
         <PageMotion>
          <div className="text-center">© Copyright 2023 - FM • All rights reserved.</div>
          </PageMotion>
        </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
