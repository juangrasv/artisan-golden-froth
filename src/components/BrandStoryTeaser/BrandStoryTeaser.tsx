"use client";

import Link from 'next/link';
import { Settings, Award, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BrandStoryTeaser() {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 relative">
                        {/* Placeholder for Story Image */}
                        <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
                            <span className="text-white/20 font-display text-6xl italic">{t.brandStory.legacy}</span>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                            {t.brandStory.titlePart1} <span className="text-gold">{t.brandStory.titlePart2}</span>. <br />
                            {t.brandStory.titlePart3} <span className="text-gold">{t.brandStory.titlePart4}</span>.
                        </h2>
                        <p className="font-sans text-gray-400 mb-8 leading-relaxed text-lg">
                            {t.brandStory.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="flex flex-col gap-2">
                                <Settings className="text-gold mb-2" size={32} />
                                <h3 className="font-display text-lg text-white">{t.brandStory.precision.title}</h3>
                                <p className="font-sans text-xs text-gray-500">{t.brandStory.precision.desc}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Award className="text-gold mb-2" size={32} />
                                <h3 className="font-display text-lg text-white">{t.brandStory.excellence.title}</h3>
                                <p className="font-sans text-xs text-gray-500">{t.brandStory.excellence.desc}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Users className="text-gold mb-2" size={32} />
                                <h3 className="font-display text-lg text-white">{t.brandStory.community.title}</h3>
                                <p className="font-sans text-xs text-gray-500">{t.brandStory.community.desc}</p>
                            </div>
                        </div>

                        <Link href="/about" className="inline-block px-8 py-4 border border-white text-white font-sans font-bold uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                            {t.brandStory.button}
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
