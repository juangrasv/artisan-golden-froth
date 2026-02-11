"use client";

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cart, cartTotal } = useCart();
    const [step] = useState(1); // 1: Info, 2: Payment, 3: Review

    if (cart.length === 0) {
        return (
            <main className="bg-black min-h-screen pt-[var(--nav-height)] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-4xl text-white mb-4">Your Cart is Empty</h1>
                    <Link href="/shop" className="text-gold underline underline-offset-4">Return to Shop</Link>
                </div>
            </main>
        )
    }

    return (
        <main className="bg-black min-h-screen pt-[var(--nav-height)]">
            <div className="container mx-auto px-4 py-12">
                <h1 className="font-display text-4xl mb-12 text-white">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Steps Section */}
                        <div className="flex items-center gap-4 text-sm font-sans uppercase tracking-wider mb-8">
                            <span className={step === 1 ? "text-gold" : "text-gray-500"}>1. Information</span>
                            <span className="text-gray-700">/</span>
                            <span className={step === 2 ? "text-gold" : "text-gray-500"}>2. Payment</span>
                            <span className="text-gray-700">/</span>
                            <span className={step === 3 ? "text-gold" : "text-gray-500"}>3. Review</span>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8">
                            <h2 className="text-white font-display text-2xl mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <input type="email" placeholder="Email" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                    <input type="text" placeholder="Last Name" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                </div>
                                <input type="text" placeholder="Address" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="City" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                    <input type="text" placeholder="Postal Code" className="w-full bg-black/50 border border-white/20 p-4 text-white focus:border-gold outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 opacity-50 pointer-events-none">
                            <h2 className="text-white font-display text-2xl mb-6">Payment Details</h2>
                            <p className="text-gray-400">Complete contact information to proceed.</p>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 p-8 sticky top-32">
                            <h2 className="text-white font-display text-2xl mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-start">
                                        <div>
                                            <p className="text-white font-sans text-sm">{item.name} x {item.quantity}</p>
                                            <p className="text-gray-500 text-xs">{item.style}</p>
                                        </div>
                                        <p className="text-white font-sans text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-4 space-y-2">
                                <div className="flex justify-between text-gray-400 text-sm">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-sm">
                                    <span>Shipping</span>
                                    <span>Calculated at next step</span>
                                </div>
                                <div className="flex justify-between text-white font-display text-xl pt-4 border-t border-white/10">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-4 bg-gold text-black font-sans font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                                Continue to Payment
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
