"use client";

import Hero from '@/components/Hero/Hero';
import { MapPin, Clock, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function VisitUs() {
    const { t } = useLanguage();
    const { visitPage } = t;

    return (
        <main className="bg-black min-h-screen">
            <Hero
                title={visitPage.title}
                subtitle={visitPage.subtitle}
            />

            <section className="py-24 px-4 container mx-auto text-center">
                <p className="font-display text-2xl text-white max-w-3xl mx-auto mb-16 leading-relaxed">
                    {visitPage.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Location Card */}
                    <div className="bg-obsidian border border-white/10 p-12 flex flex-col items-center">
                        <MapPin className="text-gold mb-6" size={48} />
                        <h2 className="font-display text-2xl text-white mb-4">{visitPage.location.title}</h2>
                        <address className="not-italic text-gray-400 font-sans mb-8">
                            {visitPage.location.address}
                        </address>
                        {/* Fake Map */}
                        <div className="w-full aspect-video bg-white/5 border border-white/5 flex items-center justify-center text-white/20 font-sans text-sm">
                            {visitPage.location.placeholder}
                        </div>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-obsidian border border-white/10 p-12 flex flex-col items-center">
                        <Clock className="text-gold mb-6" size={48} />
                        <h2 className="font-display text-2xl text-white mb-4">{visitPage.hours.title}</h2>
                        <ul className="text-gray-400 font-sans space-y-4">
                            <li className="flex justify-between w-full max-w-[200px] border-b border-white/5 pb-2">
                                <span>{visitPage.hours.monWed}</span>
                                <span>{visitPage.hours.closed}</span>
                            </li>
                            <li className="flex justify-between w-full max-w-[200px] border-b border-white/5 pb-2">
                                <span>{visitPage.hours.thuFri}</span>
                                <span>4pm - 11pm</span>
                            </li>
                            <li className="flex justify-between w-full max-w-[200px] border-b border-white/5 pb-2">
                                <span>{visitPage.hours.sat}</span>
                                <span>12pm - 12am</span>
                            </li>
                            <li className="flex justify-between w-full max-w-[200px]">
                                <span>{visitPage.hours.sun}</span>
                                <span>12pm - 9pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ / Info */}
            <section className="py-24 bg-white/5 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-display text-3xl text-white mb-12 text-center">{visitPage.faq.title}</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="flex gap-4">
                            <Info className="text-gold flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-sans font-bold uppercase tracking-wider mb-2">{visitPage.faq.dogs.q}</h3>
                                <p className="text-gray-400 font-sans text-sm">{visitPage.faq.dogs.a}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Info className="text-gold flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-sans font-bold uppercase tracking-wider mb-2">{visitPage.faq.food.q}</h3>
                                <p className="text-gray-400 font-sans text-sm">{visitPage.faq.food.a}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Info className="text-gold flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-sans font-bold uppercase tracking-wider mb-2">{visitPage.faq.kids.q}</h3>
                                <p className="text-gray-400 font-sans text-sm">{visitPage.faq.kids.a}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Info className="text-gold flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-sans font-bold uppercase tracking-wider mb-2">{visitPage.faq.tours.q}</h3>
                                <p className="text-gray-400 font-sans text-sm">{visitPage.faq.tours.a}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
