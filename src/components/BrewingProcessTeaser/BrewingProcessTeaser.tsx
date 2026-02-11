"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function BrewingProcessTeaser() {
    const { t } = useLanguage();

    const steps = [
        { number: '01', title: t.processTeaser.step1.title, description: t.processTeaser.step1.desc },
        { number: '02', title: t.processTeaser.step2.title, description: t.processTeaser.step2.desc },
        { number: '03', title: t.processTeaser.step3.title, description: t.processTeaser.step3.desc },
        { number: '04', title: t.processTeaser.step4.title, description: t.processTeaser.step4.desc },
    ];

    return (
        <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
            {/* Background Hint */}
            <div className="absolute -right-20 top-0 text-[20rem] font-display text-white/5 leading-none select-none pointer-events-none">
                BREW
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-6">{t.processTeaser.title}</h2>
                        <p className="font-sans text-gray-400">
                            {t.processTeaser.description}
                        </p>
                    </div>
                    <Link href="/process" className="px-8 py-3 border border-white/20 text-white font-sans text-sm uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                        {t.processTeaser.button}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.number} className="group p-8 border border-white/5 hover:border-gold/30 bg-white/5 hover:bg-white/10 transition-colors duration-300 relative">
                            <div className="text-4xl font-display text-gold/30 mb-4 group-hover:text-gold transition-colors">{step.number}</div>
                            <h3 className="text-xl font-display text-white mb-3">{step.title}</h3>
                            <p className="text-sm font-sans text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
