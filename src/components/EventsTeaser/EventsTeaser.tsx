"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function EventsTeaser() {
    const { t } = useLanguage();

    const events = [
        { date: 'OCT 15', title: 'Harvest Festival', time: '12:00 PM - 10:00 PM', location: 'Taproom' },
        { date: 'OCT 22', title: 'Stout Release Party', time: '5:00 PM - 11:00 PM', location: 'Brewhouse' },
        { date: 'NOV 05', title: 'Brewery Tour & Tasting', time: '2:00 PM - 4:00 PM', location: 'Main Hall' },
    ];

    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">{t.eventsTeaser.title}</h2>
                    <p className="font-sans text-white/60">{t.eventsTeaser.subtitle}</p>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col gap-4">
                    {events.map((event) => (
                        <div key={event.title} className="flex flex-col md:flex-row items-center justify-between p-6 border border-white/10 bg-white/5 hover:border-gold/30 transition-colors duration-300 group cursor-pointer">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="font-display text-2xl text-gold border-b-2 border-gold pb-1">{event.date}</div>
                                <div>
                                    <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors">{event.title}</h3>
                                    <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">{event.time} • {event.location}</p>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="px-6 py-2 border border-white/20 text-white font-sans text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                                    {t.eventsTeaser.rsvp}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/events" className="text-white hover:text-gold font-sans uppercase tracking-widest text-sm border-b border-gold pb-1 transition-colors">
                        {t.eventsTeaser.viewAll}
                    </Link>
                </div>
            </div>
        </section>
    );
}
