"use client";

import Hero from '@/components/Hero/Hero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();
    const { contactPage } = t;

    return (
        <main className="bg-black min-h-screen">
            <Hero
                title={contactPage.title}
                subtitle={contactPage.subtitle}
            />

            <section className="py-24 px-4 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-display text-3xl text-white mb-8">{contactPage.getInTouch.title}</h2>
                            <p className="text-gray-400 font-sans text-lg mb-8">
                                {contactPage.getInTouch.desc}
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold bg-white/5">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-white mb-2">{contactPage.info.visit.title}</h3>
                                    <p className="text-gray-400 font-sans">123 Artisan Avenue<br />Brooklyn, NY 11211</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold bg-white/5">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-white mb-2">{contactPage.info.email.title}</h3>
                                    <p className="text-gray-400 font-sans">hello@artisangoldenfroth.com<br />events@artisangoldenfroth.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold bg-white/5">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-white mb-2">{contactPage.info.call.title}</h3>
                                    <p className="text-gray-400 font-sans">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold bg-white/5">
                                    <Clock />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl text-white mb-2">{contactPage.info.hours.title}</h3>
                                    <p className="text-gray-400 font-sans">
                                        Thu - Fri: 4pm - 11pm<br />
                                        Sat: 12pm - 12am<br />
                                        Sun: 12pm - 9pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12">
                        <h3 className="font-display text-2xl text-white mb-8">{contactPage.form.title}</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-gray-500">{contactPage.form.firstName}</label>
                                    <input type="text" id="firstName" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-gray-500">{contactPage.form.lastName}</label>
                                    <input type="text" id="lastName" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-500">{contactPage.form.email}</label>
                                <input type="email" id="email" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none transition-colors" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-500">{contactPage.form.message}</label>
                                <textarea id="message" rows={5} className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none transition-colors"></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gold text-black font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                {contactPage.form.send}
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}
