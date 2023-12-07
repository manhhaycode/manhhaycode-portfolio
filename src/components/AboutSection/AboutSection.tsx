import React from 'react';
import Image from '../common/Image';
import ImageNext from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-6xl p-5 w-full xs:py-10 sm:p-10">
            <div className="grid items-center gap-y-10 grid-cols-1 xs:gap-y-20 lg:grid-cols-[1fr_1fr]">
                <div className="w-full flex justify-center lg:justify-start">
                    <div className="relative flex w-fit">
                        <ImageNext
                            height={350}
                            width={410}
                            className="rounded-2xl"
                            src="/images/about-main.jpg"
                            alt="about"
                        />
                        <div className="absolute top-full translate-x-1/2 -translate-y-1/2 right-0 w-48 z-10 bg-white rounded-full hidden sm:block">
                            <div className="relative">
                                <Image className="front-end-rotate" src="/images/front-end.png" alt="front-end" />
                                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-14">
                                    <Image src="/images/work.png" alt="work" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 w-full text-center lg:text-start">
                    <h3 className="text-xl text-hover font-bold leading-[1.2]">ABOUT ME</h3>
                    <h1 className="text-xl font-bold text-[#2d2e32] xs:text-2xl">
                        A dedicated Front-end Developer based in Ho Chi Minh City, Viet Nam 📍
                    </h1>
                    <p className="text-[#767676] text-sm xs:text-base">
                        As a dedicated Front-end Developer, I specialize in front-end development, utilizing
                        technologies such as ReactJS and Next.js to craft engaging and user-centric web applications.
                        Currently gaining valuable experience with Spring Boot, Express.js, Docker, and cloud computing,
                        I am eager to contribute to impactful projects. Passionate about creating seamless user
                        experiences, my goal is to evolve into a Solution Architect, bridging the realms of front-end
                        development and robust system architecture. I am committed to absorbing knowledge from
                        experienced mentors, tackling challenges, and making meaningful contributions that align with my
                        aspiration to shape innovative and scalable software solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}
