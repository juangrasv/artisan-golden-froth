"use client";

import { products } from '@/lib/data';
import ProductCard from '../ProductCard/ProductCard';
import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedBeers() {
    const { t } = useLanguage();
    const featuredProducts = products.filter(p => p.is_featured).slice(0, 3);

    return (
        <section className="py-24 bg-obsidian border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">{t.featured.title}</h2>
                        <p className="font-sans text-white/60 max-w-xl">
                            {t.featured.subtitle}
                        </p>
                    </div>
                    <a href="/shop" className="text-white hover:text-gold font-sans uppercase tracking-widest text-sm border-b border-gold pb-1 transition-colors">
                        {t.featured.viewAll}
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
