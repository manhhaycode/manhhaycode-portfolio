/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from '../common/Image';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    CVIcon,
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
} from '@/assets/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '../common/Tooltip';

export default function HomeSection() {
    return (
        <section id="home" className="mx-auto max-w-6xl p-5 sm:min-h-screen sm:p-10 bg-[#f9f9f9]">
            <div className="flex justify-between items-center gap-y-10 flex-col-reverse lgm:flex-row ">
                <div className="max-w-lg relative flex flex-col gap-y-5  items-center text-center lgm:items-start lgm:text-start">
                    <h1 className="text-[#2d2e32] font-bold !leading-[1.2] text-3xl xs:text-5xl">
                        Front-End React Developer
                    </h1>
                    <div className="absolute top-10 right-14 w-11 xs:w-14 hidden sm:block lgm:top-14 lgm:right-44">
                        <Image src="/images/hi.png" alt={'hi'} />
                    </div>
                    <p>
                        Hi, I'm Nguyen Viet Manh. A passionate Front-end React Developer based in Ho Chi Minh City, Viet
                        Nam. 📍
                    </p>
                    <div className="flex gap-x-4 gap-y-3 mt-4">
                        <a target="_blank" href="https://github.com/manhhaycode">
                            <FaGithub size={32} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/viet-manh-nguyen-3b905a2a2">
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1Kn1ILmRNMZ3nl7WBFpqvIUjkPg0ZlP0X/view"
                        >
                            <CVIcon width={32} height={32} />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/ManhVoldemort">
                            <FaFacebook size={32} />
                        </a>
                    </div>
                </div>
                <div className="w-4/5 sm:w-[400px] h-auto">
                    <Image
                        priority
                        style={{
                            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                        }}
                        className="avatar-main border-2 border-solid border-[#2d2e32] "
                        src="/images/avatar.webp"
                        alt={'avatar'}
                    />
                </div>
            </div>
            <div className="mt-10 flex gap-x-10 gap-y-12 flex-col lgm:flex-row">
                <div className="flex gap-x-4 gap-y-5 items-center flex-col lgm:flex-row">
                    <h3 className="text-[#2d2e32] font-semibold min-w-max">Tech Stack</h3>
                    <div className="w-20 h-[2px] bg-[rgba(45,46,50,.5)] lgm:w-px lgm:h-10"></div>
                </div>
                <ul className="flex flex-wrap gap-x-8 gap-y-8 max-w-5xl justify-center lgm:justify-start">
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <HtmlCSSIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>HTML, CSS: Intermediate</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <JavaTypeScriptIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Java, TypeScript: Intermediate</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <ReactNextJSIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>React, NextJS: Intermediate</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <TailwindSCSSIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Tailwind, SCSS: Intermediate</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <MySQLMongoDBIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>MySQL, MongoDB: Intermediate</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <ExpressJSSPringBootIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>ExpressJS, Spring Boot: Basic</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <DockerNginxIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Docker, Nginx: Basic</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <GoogleAzureAwsIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Google Cloud, Azure, AWS: Basic</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <FigmaPhotoshopIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Figma, Photoshop: Basic</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <li className="hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer flex">
                                <PostmanLinuxIcon />
                            </li>
                        </TooltipTrigger>
                        <TooltipContent className="Tooltip">
                            <p>Postman, Linux: Basic</p>
                        </TooltipContent>
                    </Tooltip>
                </ul>
            </div>
        </section>
    );
}
