"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import StoryOverlay from "../StoryOverlay/StoryOverlay";
import { useLanguage } from "@/context/LanguageContext";

const TOTAL_FRAMES = 224; // Assuming 224 frames as per file list
const IMAGES_FOLDER = "/sequence";

export default function ScrollSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                // Construct filename: ezgif-frame-001.jpg, etc.
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `${IMAGES_FOLDER}/ezgif-frame-${paddedIndex}.jpg`;

                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                }).catch((e) => console.error("Failed to load image", i, e));

                loadedImages.push(img);
                loadedCount++;
                setLoadingProgress((loadedCount / TOTAL_FRAMES) * 100);
            }
            setImages(loadedImages);

            // Render first frame
            if (canvasRef.current && loadedImages[0]) {
                renderFrame(0, loadedImages);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
        const canvas = canvasRef.current;
        if (!canvas || !imgs[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions to match image if not set (or fixed)
        // We assume 1920x1080 based on specs, but let's read from image or CSS
        if (canvas.width !== imgs[index].width) {
            canvas.width = imgs[index].width;
            canvas.height = imgs[index].height;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgs[index], 0, 0, canvas.width, canvas.height);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        const frameIndex = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.floor(latest))
        );
        if (images.length > 0) {
            renderFrame(frameIndex, images);
        }
    });

    const { t } = useLanguage();

    // ... (existing code)

    return (
        <div ref={containerRef} className="h-[800vh] relative bg-black">
            <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />
                {/* Overlays */}
                <Hero
                    title={t.hero.title}
                    subtitle={t.hero.subtitle}
                    ctaText={t.hero.cta}
                    ctaLink="/shop"
                />
                <StoryOverlay containerRef={containerRef} />
            </div>
            {/* Loading Indicator - only show if really needed, minimal style */}
            {loadingProgress < 100 && (
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold text-2xl font-bold z-50">
                    {Math.round(loadingProgress)}%
                </div>
            )}
        </div>
    );
}
