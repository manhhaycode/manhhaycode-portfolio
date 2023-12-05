import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <header className="w-full shadow-primary px-12 py-6 sticky top-0 left-0 z-[1000]">
      <nav className="flex justify-between items-center text-[#2d2e32] font-semibold">
        <Link href="/" className="text-xl">
          manhhaycode.dev
        </Link>
        <ul className="flex items-center text-lg">
          <li className="mr-12">
            <Link href="/#home">Home</Link>
          </li>
          <li className="mr-12">
            <Link href="/#about">About</Link>
          </li>
          <li className="mr-12">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="mr-12">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
