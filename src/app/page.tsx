"use client";

import ScrollSequence from "@/components/ScrollSequence/ScrollSequence";
import Awards from "@/components/Awards/Awards";
import FeaturedBeers from "@/components/FeaturedBeers/FeaturedBeers";
import ShopCategories from "@/components/ShopCategories/ShopCategories";
import Newsletter from "@/components/Newsletter/Newsletter";
import BrandStoryTeaser from "@/components/BrandStoryTeaser/BrandStoryTeaser";
import BrewingProcessTeaser from "@/components/BrewingProcessTeaser/BrewingProcessTeaser";
import EventsTeaser from "@/components/EventsTeaser/EventsTeaser";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="flex flex-col w-full">
        <ScrollSequence />
        <FeaturedBeers />
        <BrandStoryTeaser />
        <BrewingProcessTeaser />
        <ShopCategories />
        <EventsTeaser />
        <div className="py-24 flex flex-col items-center justify-center gap-8 bg-black border-t border-white/5">
          <Awards />
          <h2 className="font-display text-5xl text-gold text-center">{t.story.title}</h2>
          <Link href="/our-story" className="px-8 py-4 border border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-black transition-colors duration-300">
            {t.story.title}
          </Link>
        </div>
        <Newsletter />
      </main>
    </div>
  );
}
