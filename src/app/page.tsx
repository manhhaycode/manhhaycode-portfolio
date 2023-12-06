import AboutSection from '@/components/AboutSection';
import CertificateSection from '@/components/CertificateSection';
import HomeSection from '@/components/HomeSection';
import ProjectSection from '@/components/ProjectSection';
import { prisma } from '@/lib/prisma';
import React, { Suspense } from 'react';

export const revalidate = false;

export default async function Main() {
    const listProject = await prisma.project.findMany({ where: { published: true }, orderBy: { id: 'asc' } });
    const listCertificate = await prisma.certificate.findMany({ where: { published: true }, orderBy: { id: 'asc' } });
    // await prisma.certificate.createMany({
    //     data: [
    //         {
    //             image: '/images/WebDesign_Certificate.jpg',
    //             content: 'Web Design for Everybody',
    //             published: true,
    //             title: 'Coursera',
    //         },
    //         {
    //             image: '/images/WebDesign_Certificate.jpg',
    //             content: 'Web Design for Everybody',
    //             published: true,
    //             title: 'Coursera',
    //         },
    //         {
    //             image: '/images/WebDesign_Certificate.jpg',
    //             content: 'Web Design for Everybody',
    //             published: true,
    //             title: 'Coursera',
    //         },
    //     ],
    // });
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col gap-y-16">
                <HomeSection />
                <AboutSection />
                <ProjectSection listProject={listProject as Project[]} />
                <CertificateSection listCertificate={listCertificate} />
            </div>
        </Suspense>
    );
}
