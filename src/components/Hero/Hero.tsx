'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]); // Parallax effect

    return (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" ref={container}>
            <motion.div className="text-center flex flex-col items-center gap-6 mix-blend-difference" style={{ y }}>
                <motion.h1
                    className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight text-gold uppercase"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="font-sans text-lg md:text-xl text-white/90 tracking-widest uppercase max-w-lg"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
                >
                    {subtitle}
                </motion.p>
                {ctaText && ctaLink && (
                    <motion.a
                        href={ctaLink}
                        className="pointer-events-auto mt-8 px-8 py-4 bg-gold text-black font-sans font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.6 }}
                    >
                        {ctaText}
                    </motion.a>
                )}
            </motion.div>
        </div>
    );
}
