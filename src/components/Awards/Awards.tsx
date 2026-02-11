"use client";
import { motion } from "framer-motion";

const awards = [
    { name: "World Beer Cup '25", title: "Gold Medal" },
    { name: "Brewmaster's Choice", title: "Best Innovation" },
    { name: "Nordic Design Awards", title: "Packaging Excellence" },
];

export default function Awards() {
    return (
        <section className="py-24 bg-black text-center border-t border-white/5">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-16 uppercase tracking-widest">Acclaim</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {awards.map((award, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="border border-white/20 p-8 transition-all duration-300 hover:border-gold hover:-translate-y-2 bg-white/5"
                    >
                        <div className="text-sm text-gold mb-4 font-sans font-bold">2025</div>
                        <h3 className="text-2xl text-white mb-2 font-display">{award.name}</h3>
                        <p className="text-gray-400 font-sans">{award.title}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
