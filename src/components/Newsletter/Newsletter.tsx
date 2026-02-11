"use client";

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const { t } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement newsletter signup
        console.log('Newsletter signup:', email);
        alert('Thank you for signing up!');
        setEmail('');
    };

    return (
        <section className="py-24 bg-gold relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 pattern-grid-lg opacity-20" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="font-display text-4xl md:text-5xl text-black mb-4">{t.newsletter.title}</h2>
                <p className="font-sans text-black/80 max-w-2xl mx-auto mb-8 text-lg">
                    {t.newsletter.description}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder={t.newsletter.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 px-6 py-4 bg-white/90 border border-black/10 focus:outline-none focus:ring-2 focus:ring-black/20 text-black placeholder:text-black/50 font-sans"
                    />
                    <button
                        type="submit"
                        className="px-8 py-4 bg-black text-gold font-sans font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        {t.newsletter.button}
                    </button>
                </form>

                <p className="mt-4 text-xs text-black/60 font-sans">
                    {t.newsletter.disclaimer}
                </p>
            </div>
        </section>
    );
}
