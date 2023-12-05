import React from "react";
import { Header } from "../components";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="2xl:max-w-[1536px] relative">
      <Header />
      {children}
    </div>
  );
}
