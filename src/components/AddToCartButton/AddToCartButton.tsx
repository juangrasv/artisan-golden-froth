"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/data';

export default function AddToCartButton({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        addToCart(product);

        // Simulate loading/feedback
        setTimeout(() => {
            setIsAdding(false);
        }, 500);
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="w-full py-4 bg-gold text-black font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
    );
}
