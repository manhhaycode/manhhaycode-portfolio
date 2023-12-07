import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectSection({ listProject }: { listProject: Project[] }) {
    return (
        <div className="bg-[#f9f9f9]">
            <section id="projects" className="mx-auto max-w-6xl p-5 w-full sm:py-20 sm:p-10 lgm:py-36">
                <div className="flex flex-col gap-y-12 items-center">
                    <div className="flex flex-col gap-y-4 w-full text-center sm:text-start">
                        <h3 className="text-xl font-bold text-hover">PORTFOLIO</h3>
                        <h1 className="text-xl font-bold text-[#2d2e32] xs:text-2xl">
                            Each project is a unique piece of development 🧩
                        </h1>
                    </div>
                    {listProject.map((project) => (
                        <ProjectCard reverse={project.id % 2 === 0} key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
