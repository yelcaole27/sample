// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06020e] text-zinc-100 selection:bg-purple-900/80 selection:text-purple-200 w-full pt-28 px-6 sm:px-12 md:px-16 lg:px-24 py-16 overflow-hidden">
      <Navbar />

      {/* Ambient Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[700px] bg-purple-900/35 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-violet-950/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 -right-20 w-[700px] h-[700px] bg-purple-950/30 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-24">
        <Hero />
        <section id="projects"><ProjectsSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="certifications"><CertificationsSection /></section>
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}