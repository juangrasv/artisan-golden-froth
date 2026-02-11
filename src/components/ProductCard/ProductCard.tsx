"use client";

import Link from 'next/link';
import { Product } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { t } = useLanguage();

    return (
        <div className="group relative bg-white/5 border border-white/10 hover:border-gold/50 transition-colors duration-300 p-6 flex flex-col gap-4">
            {/* Image Placeholder */}
            <div className="aspect-[3/4] bg-black/50 relative overflow-hidden flex items-center justify-center">
                <span className="text-white/20 font-display text-4xl">?</span>
                {/* <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors">{product.name}</h3>
                    <p className="font-sans text-xs text-white/60 uppercase tracking-wider">{product.style}</p>
                </div>
                <div className="text-right">
                    <p className="font-sans text-sm text-gold font-bold">${product.price}</p>
                </div>
            </div>

            <div className="flex gap-4 text-xs font-sans text-white/50 border-t border-white/10 pt-4">
                <span>{t.product.abv}: {product.abv}%</span>
                <span>{t.product.ibu}: {product.ibu}</span>
            </div>

            <div className="flex flex-wrap gap-2">
                {product.tasting_notes.map(note => (
                    <span key={note} className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded-full">{note}</span>
                ))}
            </div>

            <Link href={`/shop/product/${product.slug}`} className="mt-auto w-full py-3 bg-white/10 text-white font-sans font-bold uppercase tracking-wider text-center hover:bg-gold hover:text-black transition-colors duration-300">
                {t.product.view}
            </Link>
        </div>
    );
}
