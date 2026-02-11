import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton';

// Force dynamic rendering for this route for now, or use generateStaticParams
export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.id === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="bg-black min-h-screen pt-[var(--nav-height)]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="relative aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
                        {/* Placeholder for actual image */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl">
                            {product.name}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-6">
                        <div className="border-b border-white/10 pb-6">
                            <h2 className="text-gold font-sans text-sm tracking-widest uppercase mb-2">{product.style}</h2>
                            <h1 className="text-4xl md:text-5xl text-white font-display mb-4">{product.name}</h1>
                            <p className="text-2xl text-white font-sans">${product.price.toFixed(2)}</p>
                        </div>

                        <p className="text-gray-400 font-sans leading-relaxed text-lg">
                            {product.description}
                        </p>

                        <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 my-2">
                            <div className="text-center">
                                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">ABV</div>
                                <div className="text-white font-display text-xl">{product.abv}</div>
                            </div>
                            <div className="text-center border-l border-white/10">
                                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">IBU</div>
                                <div className="text-white font-display text-xl">{product.ibu}</div>
                            </div>
                            <div className="text-center border-l border-white/10">
                                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Volume</div>
                                <div className="text-white font-display text-xl">473ml</div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <AddToCartButton product={product} />
                        </div>

                        {/* Tasting Notes */}
                        {product.tasting_notes && (
                            <div className="mt-8">
                                <h3 className="text-white font-display text-xl mb-4">Tasting Notes</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.tasting_notes.map(note => (
                                        <span key={note} className="px-3 py-1 bg-white/5 border border-white/10 text-gold text-sm font-sans rounded-full">
                                            {note}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
