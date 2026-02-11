import Hero from '@/components/Hero/Hero';

const steps = [
    {
        number: '01',
        title: 'Sourcing the Finest',
        description: 'We partner with sustainable farms in the Pacific Northwest and Hallertau, Germany to source hops that are aromatic and distinct. Our malts come from artisan maltsters who understand the nuance of kiln roasting.',
    },
    {
        number: '02',
        title: ' The Mash',
        description: 'Crushed grains meet hot water in our copper-clad mash tun. Here, enzymes convert starches into fermentable sugars, creating a sweet liquid known as wort. We monitor temperature with obsessive precision.',
    },
    {
        number: '03',
        title: 'The Boil',
        description: 'The wort is boiled vigorously. Hops are added at specific intervals—early for bitterness, late for aroma. This is where the beer gets its soul.',
    },
    {
        number: '04',
        title: 'Fermentation',
        description: 'Yeast is introduced. For our lagers, it\'s a cold, slow slumber. For ales, a warmer, more vigorous activity. The yeast consumes the sugar, creating alcohol and carbon dioxide.',
    },
    {
        number: '05',
        title: 'Aging & Conditioning',
        description: 'Most breweries rush this step. We don\'t. Our beers rest in conditioning tanks, allowing flavors to meld and mature. Some go into oak barrels for months or even years.',
    },
    {
        number: '06',
        title: 'Packaging',
        description: 'Whether in kegs, cans, or bottles, we ensure minimal oxygen exposure to preserve freshness. The final product is a testament to the journey it has taken.',
    },
];

export default function ProcessPage() {
    return (
        <main className="bg-black min-h-screen">
            <Hero
                title="The Process"
                subtitle="Where Art Meets Science"
            />

            <section className="py-24 px-4 container mx-auto max-w-4xl relative">
                {/* Connecting Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent hidden md:block"></div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={step.number} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                            {/* Visual/Number */}
                            <div className="flex-1 w-full text-center md:text-right relative">
                                <div className={`aspect-video bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group ${index % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
                                    <span className="font-display text-8xl text-white/5 font-bold absolute z-0">{step.number}</span>
                                    <span className="font-sans text-xs uppercase tracking-widest text-gold relative z-10 border border-gold px-4 py-2">Step {step.number}</span>
                                </div>
                            </div>

                            {/* Center Dot (Desktop) */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-gold hidden md:block z-10"></div>

                            {/* Content */}
                            <div className="flex-1 w-full text-center md:text-left">
                                <h2 className="font-display text-3xl text-white mb-4">{step.title}</h2>
                                <p className="font-sans text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-obsidian text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl text-white mb-8">Taste the Result</h2>
                    <p className="text-gray-400 font-sans max-w-2xl mx-auto mb-12">
                        Understanding the process is one thing. Experiencing it is another.
                        Visit our taproom to sample our latest small-batch creations directly from the source.
                    </p>
                    <a href="/visit" className="inline-block px-8 py-4 bg-transparent border border-gold text-gold font-sans font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-colors duration-300">
                        Visit The Taproom
                    </a>
                </div>
            </section>
        </main>
    );
}
