import HomeSection from "@/components/HomeSection";
import React, { Suspense } from "react";

export default function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeSection />
    </Suspense>
  );
}
