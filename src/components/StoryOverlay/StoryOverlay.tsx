"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface StoryOverlayProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

export default function StoryOverlay({ containerRef }: StoryOverlayProps) {
    const { t } = useLanguage();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Text 1: "Explosive Freshness" appears near the end of scroll
    const opacity1 = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.7, 0.9], [50, -50]);

    // Text 2: "Brewed. Bottled. Unleashed." appears at the freeze, then fades out for content
    const opacity2 = useTransform(scrollYProgress, [0.85, 0.9, 0.95, 1], [0, 1, 1, 0]);
    const scale2 = useTransform(scrollYProgress, [0.85, 1], [0.9, 1]);

    return (
        <div className="absolute inset-0 pointer-events-none z-20 flex flex-col items-center justify-center">
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full" style={{ opacity: opacity1, y: y1 }}>
                <h2 className="font-display text-5xl md:text-7xl text-white font-bold tracking-tight">{t.storyOverlay.freshness}</h2>
            </motion.div>

            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full" style={{ opacity: opacity2, scale: scale2 }}>
                <h2 className="font-display text-4xl md:text-8xl text-gold font-bold tracking-tighter uppercase whitespace-normal md:whitespace-nowrap drop-shadow-lg px-4">{t.storyOverlay.unleashed}</h2>
            </motion.div>
        </div>
    );
}
