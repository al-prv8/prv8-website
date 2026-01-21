"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Building2, Mail, User, MessageSquare, Send } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function RequestPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Back link */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Back to Home</span>
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Left: Info */}
                            <div>
                                <p className="text-amber-400 text-sm font-medium mb-3">Get Started</p>
                                <h1 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                                    Request Access
                                </h1>
                                <p className="text-zinc-400 text-lg mb-10">
                                    Join the waitlist to experience PRV8's AI-powered concierge infrastructure.
                                    We'll reach out to discuss your needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Priority Access</h3>
                                            <p className="text-zinc-500 text-sm">Early access to new features and capabilities</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Custom Integration</h3>
                                            <p className="text-zinc-500 text-sm">Tailored solutions for your business needs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium mb-1">Dedicated Support</h3>
                                            <p className="text-zinc-500 text-sm">Direct line to our engineering team</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Form */}
                            <div>
                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-white/10 bg-zinc-900/50">
                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-white/80 text-sm font-medium mb-2">
                                                    <User className="w-4 h-4 inline mr-2 opacity-60" />
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/80 text-sm font-medium mb-2">
                                                    <Mail className="w-4 h-4 inline mr-2 opacity-60" />
                                                    Work Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/80 text-sm font-medium mb-2">
                                                    <Building2 className="w-4 h-4 inline mr-2 opacity-60" />
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                                                    placeholder="Acme Inc."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white/80 text-sm font-medium mb-2">
                                                    <MessageSquare className="w-4 h-4 inline mr-2 opacity-60" />
                                                    Use Case (Optional)
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                                                    placeholder="Tell us about your project..."
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full px-6 py-4 bg-white text-black font-medium rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <span>Submit Request</span>
                                                <Send className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                        </div>
                                        <h3 className="text-white font-serif text-2xl mb-3">Request Received!</h3>
                                        <p className="text-zinc-400 mb-6">
                                            Thank you for your interest. We'll be in touch within 24 hours.
                                        </p>
                                        <Link
                                            href="/"
                                            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Back to Home
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
