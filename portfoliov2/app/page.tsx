"use client";

import { useEffect } from 'react';
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import './globals.css';

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => e.preventDefault());
    
  //   return () => {
  //     document.removeEventListener('contextmenu', (e) => e.preventDefault());
  //   };
  // }, []);

  return (
    <main className="custom-cursor flex flex-col justify-center items-center">
      <section>
        <Hero/>
      </section>
      <section>
        <Projects/>
      </section>
    </main>
  );
}
