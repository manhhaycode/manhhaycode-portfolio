import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectSection({ listProject }: { listProject: Project[] }) {
    return (
        <div className="bg-[#f9f9f9]">
            <section id="projects" className="mx-auto max-w-6xl p-10 w-full py-36">
                <div className="flex flex-col gap-y-12">
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-xl font-bold text-hover">PORTFOLIO</h3>
                        <h1 className="text-2xl font-bold text-[#2d2e32]">
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
