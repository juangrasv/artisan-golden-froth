"use client";

import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { cartCount, setIsCartOpen } = useCart();
    const { t } = useLanguage();

    const links = [
        { name: t.nav.shop, href: '/shop' },
        { name: t.nav.story, href: '/our-story' },
        { name: t.nav.visit, href: '/visit' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b border-white/5",
                isScrolled ? "bg-black/95 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-display text-2xl md:text-3xl text-white tracking-wider z-50 relative">
                    GOLDEN <span className="text-gold">FROTH</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-sans uppercase tracking-widest hover:text-gold transition-colors relative group",
                                pathname === link.href ? "text-gold" : "text-white/80"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full",
                                pathname === link.href ? "w-full" : ""
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <LanguageSwitcher />

                    <button className="text-white/80 hover:text-gold transition-colors flex items-center gap-2 group">
                        <MapPin size={18} />
                        <span className="text-xs font-sans uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            {t.nav.findUs}
                        </span>
                    </button>

                    <button
                        className="text-white/80 hover:text-gold transition-colors relative"
                        onClick={() => setIsCartOpen(true)}
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-black text-[10px] font-bold flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <Link href="/shop" className="px-6 py-2 border border-white/20 text-white font-sans text-xs uppercase tracking-wider hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                        {t.nav.shopNow}
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        className="text-white z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-display text-4xl text-white hover:text-gold transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <button
                    className="text-white hover:text-gold transition-colors flex items-center gap-2 text-xl"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsCartOpen(true);
                    }}
                >
                    <ShoppingBag size={24} />
                    {t.nav.cart} ({cartCount})
                </button>
            </div>
        </motion.nav>
    );
}
