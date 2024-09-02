import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";

export default function Home() {
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
