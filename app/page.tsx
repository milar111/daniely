"use client";

import { useEffect } from 'react';
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import './globals.css';
import { cursorPaths } from '@/components/cursorPaths';

export default function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--cursor-default', `url(${cursorPaths.default})`);
    document.documentElement.style.setProperty('--cursor-text', `url(${cursorPaths.text})`);
    document.documentElement.style.setProperty('--cursor-link', `url(${cursorPaths.link})`);
  }, []);

  return (
    <main className="cursor-custom-default flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <section id='hero'>
        <Hero />
      </section>
      <section id='projects'>
        <Projects />
      </section>
    </main>
  );
}
