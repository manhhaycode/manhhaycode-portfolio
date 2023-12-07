'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.removeProperty('overflow');
    }, [isOpen]);

    return (
        <div className="relative block lgm:hidden">
            <button onClick={() => setIsOpen(true)}>
                <IoMenu className="hover:text-hover" size={32} />
            </button>
            <div
                className={twMerge(
                    'fixed h-screen w-screen z-[100000] bg-white top-0  flex flex-col gap-y-10 items-center justify-center transition-all ease-in-out duration-300 ',
                    isOpen ? 'right-0' : 'right-full',
                )}
            >
                <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5">
                    <MdOutlineClose className="hover:text-hover" size={32} />
                </button>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#home"
                    className="font-semibold text-2xl hover:text-hover"
                >
                    Home
                </Link>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#about"
                    className="font-semibold text-2xl hover:text-hover"
                >
                    About
                </Link>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#projects"
                    className="font-semibold text-2xl hover:text-hover"
                >
                    Projects
                </Link>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#certificates"
                    className="font-semibold text-2xl hover:text-hover"
                >
                    Certificates
                </Link>
            </div>
        </div>
    );
}
