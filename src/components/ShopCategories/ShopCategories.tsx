"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ShopCategories() {
    const { t } = useLanguage();

    const categories = [
        {
            name: t.shopCategories.beers.name,
            subtitle: t.shopCategories.beers.subtitle,
            image: 'bg-[url("/images/category-beers.jpg")]', // Placeholder class
            link: '/shop',
        },
        {
            name: t.shopCategories.limited.name,
            subtitle: t.shopCategories.limited.subtitle,
            image: 'bg-[url("/images/category-limited.jpg")]', // Placeholder class
            link: '/shop',
        },
        {
            name: t.shopCategories.merch.name,
            subtitle: t.shopCategories.merch.subtitle,
            image: 'bg-[url("/images/category-merch.jpg")]', // Placeholder class
            link: '/shop',
        },
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{t.shopCategories.title}</h2>
                    <div className="w-24 h-1 bg-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            href={cat.link}
                            className="group relative h-[400px] overflow-hidden border border-white/10"
                        >
                            {/* Background Image Placeholder */}
                            <div className={`absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500`} />
                            {/* ${cat.image} bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 */}

                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500 p-8 text-center">
                                <h3 className="font-display text-3xl text-gold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.name}</h3>
                                <p className="font-sans text-sm tracking-widest text-white uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {cat.subtitle}
                                </p>
                                <div className="mt-8 px-6 py-3 border border-white text-white font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200 hover:bg-white hover:text-black">
                                    {t.shopCategories.explore}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
