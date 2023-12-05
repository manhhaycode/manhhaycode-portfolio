/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "../common/Image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  DockerNginxIcon,
  ExpressJSSPringBootIcon,
  FigmaPhotoshopIcon,
  GoogleAzureAwsIcon,
  HtmlCSSIcon,
  JavaTypeScriptIcon,
  MySQLMongoDBIcon,
  PostmanLinuxIcon,
  ReactNextJSIcon,
  TailwindSCSSIcon,
} from "@/assets/icons";

export default function HomeSection() {
  return (
    <div id="home" className="mx-auto max-w-6xl p-10">
      <div className="flex justify-between items-center">
        <div className="max-w-lg relative flex flex-col gap-y-5">
          <h1 className="text-5xl text-[#2d2e32] font-bold leading-[1.2]">
            Front-End React Developer
          </h1>
          <div className="h-14 w-14 absolute top-14 right-44">
            <Image src="/images/hi.png" alt={"hi"} />
          </div>
          <p>
            Hi, I'm Nguyen Viet Manh. A passionate Front-end React Developer
            based in Ho Chi Minh City, Viet Nam. 📍
          </p>
          <div className="flex gap-x-4 gap-y-3 mt-4">
            <a target="_blank" href="https://github.com/manhhaycode">
              <FaGithub size={32} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/viet-manh-nguyen-3b905a2a2"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
        <div className="w-[400px] h-auto">
          <Image
            priority
            style={{
              borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            }}
            className="avatar-main border-2 border-solid border-[#2d2e32] "
            src="/images/avatar.webp"
            alt={"avatar"}
          />
        </div>
      </div>
      <div className="mt-10 flex gap-x-10">
        <div className="flex gap-x-4 items-center">
          <h3 className="text-[#2d2e32] font-semibold min-w-max">Tech Stack</h3>
          <div className="w-px h-6 bg-[rgba(45,46,50,.5)]"></div>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-8 max-w-5xl">
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <HtmlCSSIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <JavaTypeScriptIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <ReactNextJSIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <TailwindSCSSIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <MySQLMongoDBIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <ExpressJSSPringBootIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <DockerNginxIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <GoogleAzureAwsIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <FigmaPhotoshopIcon />
          </li>
          <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
            <PostmanLinuxIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}
