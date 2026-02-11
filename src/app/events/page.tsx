"use client";

import Hero from '@/components/Hero/Hero';
import { useLanguage } from '@/context/LanguageContext';

const events = [
    {
        id: 1,
        date: 'OCT 15',
        title: 'Harvest Festival',
        time: '12:00 PM - 10:00 PM',
        location: 'Taproom & Garden',
        description: 'Celebrate the season with fresh hop releases, pumpkin carving, and live folk music. Family friendly until 6 PM.',
    },
    {
        id: 2,
        date: 'OCT 22',
        title: 'Stout Release Party',
        time: '5:00 PM - 11:00 PM',
        location: 'Brewhouse',
        description: 'Be the first to taste our award-winning Obsidian Stout. Ticket includes a flight and a commemorative glass.',
    },
    {
        id: 3,
        date: 'NOV 05',
        title: 'Brewery Tour & Tasting',
        time: '2:00 PM - 4:00 PM',
        location: 'Main Hall',
        description: 'An in-depth look at our brewing process led by our Master Brewer. Includes 4 guided tastings.',
    },
    {
        id: 4,
        date: 'NOV 12',
        title: 'Vinyl Night',
        time: '7:00 PM - 11:00 PM',
        location: 'Lounge',
        description: 'Bring your own records or listen to our curated selection. Craft cocktails and small bites available.',
    },
];

export default function EventsPage() {
    const { t } = useLanguage();
    const { eventsPage } = t;

    return (
        <main className="bg-black min-h-screen">
            <Hero
                title={eventsPage.title}
                subtitle={eventsPage.subtitle}
            />

            <section className="py-24 px-4 container mx-auto max-w-5xl">
                <div className="grid gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="group relative border border-white/10 bg-white/5 p-8 md:p-12 transition-all duration-300 hover:border-gold/30 hover:bg-white/10">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                                {/* Date Box */}
                                <div className="flex-shrink-0 w-24 h-24 border border-gold/50 flex flex-col items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                    <span className="font-display text-3xl font-bold leading-none">{event.date.split(' ')[1]}</span>
                                    <span className="font-sans text-xs uppercase tracking-wider">{event.date.split(' ')[0]}</span>
                                </div>

                                {/* Details */}
                                <div className="flex-grow">
                                    <h3 className="font-display text-3xl text-white mb-2 group-hover:text-gold transition-colors">{event.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm font-sans text-gray-400 uppercase tracking-wider mb-4">
                                        <span>{event.time}</span>
                                        <span className="text-gold">•</span>
                                        <span>{event.location}</span>
                                    </div>
                                    <p className="font-sans text-gray-400 leading-relaxed max-w-2xl">{event.description}</p>
                                </div>

                                {/* CTA */}
                                <div className="flex-shrink-0 mt-4 md:mt-0">
                                    <button className="px-8 py-3 border border-white text-white font-sans text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                        {eventsPage.rsvp}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-white/60 font-sans mb-6">{eventsPage.interested}</p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-gold text-black font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                        {eventsPage.inquire}
                    </a>
                </div>
            </section>
        </main>
    );
}
