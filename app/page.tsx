"use client";

import { useEffect } from 'react';
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import './globals.css';
import Lenis from 'lenis';

export default function Home() {

  useEffect(() =>{
    const lenis = new Lenis();
    function raf(time: any){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="custom-cursor flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <section id='hero'>
        <Hero/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
    </main>
  );
}