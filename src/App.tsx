import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalDeepDive } from './components/TechnicalDeepDive';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { WorkflowAndQuality } from './components/WorkflowAndQuality';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechnicalDeepDive />
        <InteractiveCalculator />
        <PortfolioSection />
        <WorkflowAndQuality />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
