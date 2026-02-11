"use client";

import Hero from '@/components/Hero/Hero';
import { useLanguage } from '@/context/LanguageContext';

export default function OurStory() {
    const { t } = useLanguage();

    const team = [
        { name: 'Elias Thorne', role: t.ourStoryPage.team.roles.founder, image: 'Founder' },
        { name: 'Sarah Jenkins', role: t.ourStoryPage.team.roles.ops, image: 'Ops' },
        { name: 'Marcus Chen', role: t.ourStoryPage.team.roles.cellar, image: 'Cellar' },
    ];

    return (
        <main className="bg-black min-h-screen">
            <Hero
                title={t.ourStoryPage.title}
                subtitle={t.ourStoryPage.subtitle}
            />

            {/* The Beginning */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] bg-white/5 border border-white/10">
                        {/* Placeholder Image */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl italic p-8 text-center">
                            {t.ourStoryPage.beginning.imageLabel}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="font-display text-4xl text-white">{t.ourStoryPage.beginning.title}</h2>
                        <div className="w-20 h-1 bg-gold"></div>
                        <p className="text-gray-400 font-sans leading-relaxed text-lg">
                            {t.ourStoryPage.beginning.text1}
                        </p>
                        <p className="text-gray-400 font-sans leading-relaxed text-lg">
                            {t.ourStoryPage.beginning.text2}
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-obsidian border-y border-white/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="font-display text-4xl text-white mb-12">{t.ourStoryPage.philosophy.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-gold font-display text-6xl mb-4">01</div>
                            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-4">{t.ourStoryPage.philosophy.p1.title}</h3>
                            <p className="text-gray-500 font-sans">{t.ourStoryPage.philosophy.p1.desc}</p>
                        </div>
                        <div>
                            <div className="text-gold font-display text-6xl mb-4">02</div>
                            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-4">{t.ourStoryPage.philosophy.p2.title}</h3>
                            <p className="text-gray-500 font-sans">{t.ourStoryPage.philosophy.p2.desc}</p>
                        </div>
                        <div>
                            <div className="text-gold font-display text-6xl mb-4">03</div>
                            <h3 className="text-white font-sans font-bold uppercase tracking-widest mb-4">{t.ourStoryPage.philosophy.p3.title}</h3>
                            <p className="text-gray-500 font-sans">{t.ourStoryPage.philosophy.p3.desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 px-4 container mx-auto">
                <h2 className="font-display text-4xl text-white mb-16 text-center">{t.ourStoryPage.team.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="group">
                            <div className="aspect-square bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-2xl">
                                    {member.image}
                                </div>
                                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <h3 className="text-white font-display text-2xl mb-1">{member.name}</h3>
                            <p className="text-gold font-sans text-xs uppercase tracking-widest">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
