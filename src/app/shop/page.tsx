"use client";

import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard/ProductCard';
import Hero from '@/components/Hero/Hero';
import { useLanguage } from '@/context/LanguageContext';

export default function ShopPage() {
    const { t } = useLanguage();
    const { filters } = t.shopPage;

    return (
        <main className="bg-black min-h-screen pt-[var(--nav-height)]">
            {/* Use a simplified Hero or just a Header for the shop */}
            <div className="relative h-[40vh] flex items-center justify-center bg-obsidian border-b border-white/10">
                <Hero
                    title={t.shopPage.title}
                    subtitle={t.shopPage.subtitle}
                />
            </div>

            <section className="py-24 px-4 container mx-auto">
                {/* Filters (Mock UI) */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {[filters.all, filters.lagers, filters.ales, filters.stouts, filters.merch].map((filter) => (
                        <button key={filter} className="px-6 py-2 border border-white/20 text-white font-sans text-sm uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 first:bg-gold first:text-black first:border-gold">
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}
