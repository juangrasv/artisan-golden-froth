"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerification() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage
        const isVerified = localStorage.getItem("age-verified");
        if (!isVerified) {
            // Small delay to ensure client-side hydration doesn't conflict
            const timer = setTimeout(() => setIsVisible(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleVerify = () => {
        localStorage.setItem("age-verified", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        window.location.href = "https://www.google.com"; // Redirect if under age
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
                >
                    <div className="relative max-w-md w-full p-8 text-center border border-gold/30 bg-black/80 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                        <h2 className="font-display text-4xl text-gold mb-6">Age Verification</h2>
                        <p className="font-sans text-gray-300 mb-8">
                            You must be of legal drinking age to enter this site.
                            <br />
                            Are you 21 years of age or older?
                        </p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleVerify}
                                className="w-full py-4 bg-gold text-black font-sans font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
                            >
                                Yes, I am 21+
                            </button>
                            <button
                                onClick={handleReject}
                                className="w-full py-4 border border-white/20 text-gray-400 font-sans uppercase tracking-wider hover:text-white hover:border-white transition-colors duration-300"
                            >
                                No, I am not
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
