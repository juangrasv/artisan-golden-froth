import Hero from '@/components/Hero/Hero';

export default function Collection() {
    return (
        <main>
            <Hero
                title="The Collection"
                subtitle="Exquisite varieties for the discerning palate"
            />
            <section style={{
                padding: 'var(--spacing-lg) var(--spacing-container)',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-md)'
            }}>
                {/* Placeholder for product grid */}
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                        height: '400px',
                        background: 'var(--color-obsidian)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-display)',
                        fontSize: '2rem'
                    }}>
                        Edition {i}
                    </div>
                ))}
            </section>
        </main>
    );
}
