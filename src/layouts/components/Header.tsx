import Link from 'next/link';
import React from 'react';
import MenuMobile from './MenuMobile';
export default function Header() {
    return (
        <header className="w-full shadow-primary p-6 sticky top-0 left-0 z-[1000] bg-white sm:px-12">
            <nav className="flex justify-between items-center text-[#2d2e32] font-semibold">
                <Link href="/" className="text-xl">
                    manhhaycode.dev
                </Link>
                <ul className="items-center text-lg hidden lgm:flex">
                    <li className="mr-12 hover:text-hover">
                        <Link href="/#home">Home</Link>
                    </li>
                    <li className="mr-12 hover:text-hover">
                        <Link href="/#about">About</Link>
                    </li>
                    <li className="mr-12 hover:text-hover">
                        <Link href="/#projects">Projects</Link>
                    </li>
                    <li className="mr-12 hover:text-hover">
                        <Link href="/#certificates">Certificates</Link>
                    </li>
                </ul>
                <MenuMobile />
            </nav>
        </header>
    );
}
