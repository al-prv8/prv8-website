"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plane, Hotel, Car, Utensils, ShoppingBag, Compass, CheckCircle2, MessageSquare, Zap, Shield, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { DashboardPreview } from '@/components/landing/DashboardPreview';
import { ClickableCard } from '@/components/ui/ClickableCard';

const steps = [
    {
        icon: Plane,
        title: "Flight Booking",
        description: "AI finds and secures the best flights based on your preferences"
    },
    {
        icon: Hotel,
        title: "Accommodation",
        description: "Curated hotel selections matched to your style and needs"
    },
    {
        icon: Car,
        title: "Ground Transport",
        description: "Seamless airport transfers and luxury car services"
    },
    {
        icon: Utensils,
        title: "Dining Reservations",
        description: "Tables at exclusive restaurants, reserved automatically"
    },
    {
        icon: ShoppingBag,
        title: "Essentials",
        description: "Travel essentials delivered to your accommodation"
    },
    {
        icon: Compass,
        title: "Experiences",
        description: "Unique activities and adventures curated for you"
    }
];

const howItWorksSteps = [
    {
        number: "01",
        title: "Natural Conversation",
        description: "Simply tell Val8 what you need in plain language. No forms, no menus—just conversation.",
        icon: MessageSquare
    },
    {
        number: "02",
        title: "Intelligent Processing",
        description: "Val8 understands context, preferences, and constraints to find the best options.",
        icon: Zap
    },
    {
        number: "03",
        title: "Secure Execution",
        description: "Every booking is executed securely with real-time confirmation and updates.",
        icon: Shield
    }
];

export default function ExplorePage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/demo/flight-business.png"
                        alt="Luxury travel"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                                <span className="font-bold text-black text-lg">V</span>
                            </div>
                            <div>
                                <h3 className="text-white font-medium">Val8</h3>
                                <p className="text-amber-500 text-xs uppercase tracking-widest">Powered by PRV8</p>
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">
                            Experience AI-Powered<br />
                            <span className="text-white/60">Travel Concierge</span>
                        </h1>

                        <p className="text-lg text-zinc-400 max-w-xl mb-8">
                            Watch how Val8 orchestrates your entire travel experience through natural conversation.
                            From flights to dining, everything handled seamlessly.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Real-time booking</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>Personalized recommendations</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                <span>End-to-end orchestration</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works Explanation */}
            <section className="py-32 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="mb-16">
                        <p className="text-amber-400 text-sm font-medium mb-3">How It Works</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">
                            Three Simple Steps
                        </h2>
                        <p className="text-zinc-500 max-w-lg">
                            From conversation to confirmation, Val8 handles the complexity so you don't have to.
                        </p>
                    </div>

                    {/* Bento Grid matching ProblemSection */}
                    <div className="grid md:grid-cols-3 gap-4">
                        {howItWorksSteps.map((step) => (
                            <ClickableCard key={step.number} href="#" showArrow={false} className="p-8">
                                <div className="icon-accent mb-6">
                                    <step.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <h3 className="font-serif text-xl font-medium text-white mb-3">{step.title}</h3>
                                <p className="text-sm leading-relaxed text-zinc-500">{step.description}</p>
                            </ClickableCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section */}
            <section className="py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Demo Header with Explanation */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-amber-400 text-sm font-medium mb-3">Live Demo</p>
                            <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                                See Val8 in Action
                            </h2>
                            <p className="text-zinc-400 mb-6">
                                Watch the conversation unfold as Val8 books a complete Dubai trip in real-time.
                                The demo shows how each component of your trip gets confirmed as the conversation progresses.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                                        <ArrowRight className="w-3 h-3 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">Left Panel: AI Conversation</h4>
                                        <p className="text-zinc-500 text-sm">Natural dialogue between user and Val8</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                                        <ArrowRight className="w-3 h-3 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm">Right Panel: Live Widgets</h4>
                                        <p className="text-zinc-500 text-sm">Bookings appear as they're confirmed</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-3 gap-3"
                        >
                            {steps.slice(0, 6).map((step, index) => (
                                <div key={step.title} className="p-4 rounded-xl border border-white/10 bg-zinc-900/50 text-center">
                                    <step.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                                    <p className="text-white text-xs font-medium">{step.title}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Main Demo */}
                    <DashboardPreview />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
                            PRV8's infrastructure powers intelligent concierge systems like Val8.
                            Let's discuss how we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#request"
                                className="px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-50 transition-colors flex items-center gap-2"
                            >
                                Request Access
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/"
                                className="px-8 py-4 border border-white/20 text-white/80 text-sm font-medium rounded-full hover:bg-white/5 transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
