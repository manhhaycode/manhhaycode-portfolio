import React from 'react';
import Image from '../common/Image';
import TechTag from './TechTag';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';

export default function ProjectCard({ project, reverse }: { project: Project; reverse?: boolean }) {
    return (
        <div className="shadow-primary w-full p-6 rounded-xl max-h-[500px]">
            <div className={twMerge('flex w-full gap-x-10 ', reverse ? 'flex-row-reverse' : '')}>
                <a target="_blank" href={project.demoUrl}>
                    <div className="shadow-primary w-[600px] max-w-[600px]  rounded-lg overflow-hidden h-full">
                        <Image
                            ratio="56.25%"
                            className="object-top rounded-lg hover:-translate-y-[80%] !h-auto translate-y-0 transition-transform ease-in-out duration-[9s]"
                            src={project.image}
                            alt="binhminhcooking"
                        />
                    </div>
                </a>
                <div className="flex flex-col gap-y-5 items-stretch justify-between">
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-[#767676] text-base">{project.content}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {project.techStack.map((tech, index) => (
                                <TechTag key={index} tech={tech} />
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-x-10 items-center">
                        {project.gitHubUrl && (
                            <a
                                target="_blank"
                                href={project.gitHubUrl}
                                className="hover:text-hover flex gap-x-3 items-center font-semibold"
                            >
                                <p>Source Code</p>
                                <FaGithub size={20} />
                            </a>
                        )}
                        <a
                            target="_blank"
                            href={project.demoUrl}
                            className="hover:text-hover flex gap-x-3 items-center font-semibold"
                        >
                            Live Demo
                            <FiExternalLink size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
