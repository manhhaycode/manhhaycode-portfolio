import Link from "next/link";
import React from "react";
export default function Header() {
  return (
    <header className="w-full shadow-primary px-12 py-6">
      <nav className="flex justify-between items-center text-[#2d2e32] font-semibold">
        <h3 className="text-xl cursor-pointer">manhhaycode.dev</h3>
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
