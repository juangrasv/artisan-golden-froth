"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();
    const { footer } = t;

    const footerLinks = [
        {
            title: footer.cols.shop.title,
            links: [
                { name: footer.cols.shop.links.all, path: '/shop' },
                { name: footer.cols.shop.links.limited, path: '/shop?category=limited' },
                { name: footer.cols.shop.links.merch, path: '/shop?category=merch' },
                { name: footer.cols.shop.links.cards, path: '/shop/gift-cards' },
            ],
        },
        {
            title: footer.cols.about.title,
            links: [
                { name: footer.cols.about.links.story, path: '/our-story' },
                { name: footer.cols.about.links.brewery, path: '/visit' },
                { name: footer.cols.about.links.sustainability, path: '/sustainability' },
                { name: footer.cols.about.links.careers, path: '/careers' },
            ],
        },
        {
            title: footer.cols.support.title,
            links: [
                { name: footer.cols.support.links.contact, path: '/contact' },
                { name: footer.cols.support.links.shipping, path: '/shipping' },
                { name: footer.cols.support.links.faq, path: '/faq' },
                { name: footer.cols.support.links.privacy, path: '/privacy' },
            ],
        },
    ];

    return (
        <footer className="bg-obsidian text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link href="/">
                            <span className="font-display font-bold text-3xl tracking-wider text-gold uppercase">GOLDEN FROTH</span>
                        </Link>
                        <p className="font-sans text-gray-400 max-w-xs">
                            {footer.brandDesc}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-black transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-display text-lg text-gold mb-6">{column.title}</h3>
                            <ul className="flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="font-sans text-sm text-gray-400 hover:text-gold transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-xs text-gray-500">
                        © {new Date().getFullYear()} Artisan Golden Froth. {footer.rights}
                    </p>
                    <div className="flex gap-6">
                        <p className="font-sans text-xs text-gray-500">
                            {footer.responsible}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
