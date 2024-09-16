// Mark this as a Client Component by adding "use client"
"use client";

import { useEffect } from 'react';
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => e.preventDefault());
    
  //   return () => {
  //     document.removeEventListener('contextmenu', (e) => e.preventDefault());
  //   };
  // }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="">
        <Hero/>
      </section>
      <section className="">
        <Projects/>
      </section>
    </main>
  );
}
