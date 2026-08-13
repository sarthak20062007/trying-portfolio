import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Remaining sections will be added one by one */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="section-container text-center">
          <p className="text-foreground-muted text-lg">
            More sections coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
