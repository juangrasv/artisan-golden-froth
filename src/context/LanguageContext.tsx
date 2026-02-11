"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en, Dictionary } from '@/locales/en';
import { es } from '@/locales/es';
import { de } from '@/locales/de';

type Language = 'en' | 'es' | 'de';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = {
    en,
    es,
    de,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    // Load language from local storage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && dictionaries[savedLang]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguage(savedLang);
        }
    }, []);

    // Save language to local storage and update document language whenever it changes
    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: dictionaries[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
