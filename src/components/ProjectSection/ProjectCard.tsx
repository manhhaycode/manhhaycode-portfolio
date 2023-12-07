import React from 'react';
import Image from '../common/Image';
import TechTag from './TechTag';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

export default function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
    return (
        <div className="shadow-primary p-3 rounded-xl w-full sm:p-6 sm:w-fit lg:w-full">
            <div
                className={twMerge(
                    'flex  gap-x-10 flex-col w-full gap-y-5 items-center xs:gap-y-10 sm:w-fit lg:items-start',
                    reverse ? 'lg:flex-row-reverse' : 'lg:flex-row',
                )}
            >
                <a target="_blank" href={project.demoUrl} className="self-stretch">
                    <div className="shadow-primary w-full max-w-[600px] rounded-lg overflow-hidden h-full sm:w-[600px]">
                        <Image
                            ratio="56.25%"
                            className="object-top rounded-lg hover:-translate-y-[80%] !h-auto translate-y-0 transition-transform ease-in-out duration-[9s]"
                            src={project.image}
                            alt={project.title}
                        />
                    </div>
                </a>
                <div className="flex flex-col gap-y-5 items-center justify-between w-full  text-center lg:text-start sm:w-[500px] lg:w-full lg:items-stretch">
                    <div className="flex flex-col gap-y-3 xs:gap-y-5">
                        <h3 className="text-base font-bold xs:text-xl">{project.title}</h3>
                        <p className="text-[#767676] text-xs xs:text-base">{project.content}</p>
                        <div className="flex flex-wrap gap-x-2  gap-y-3 justify-center sm:gap-x-4 lg:justify-start">
                            {project.techStack.map((tech, index) => (
                                <TechTag key={index} tech={tech} />
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-x-10 items-center w-fit">
                        {project.gitHubUrl && (
                            <a
                                target="_blank"
                                href={project.gitHubUrl}
                                className="hover:text-hover flex gap-x-3 items-center font-semibold"
                            >
                                <p className="hidden xs:block">Source Code</p>
                                <p className="block xs:hidden">Source</p>
                                <FaGithub size={20} />
                            </a>
                        )}
                        <a
                            target="_blank"
                            href={project.demoUrl}
                            className="hover:text-hover flex gap-x-3 items-center font-semibold"
                        >
                            <p className="hidden xs:block">Live Demo</p>
                            <p className="block xs:hidden">Demo</p>
                            <FiExternalLink size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
