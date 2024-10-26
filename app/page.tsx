"use client";

import { useEffect } from 'react';
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import './globals.css';

export default function Home() {

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