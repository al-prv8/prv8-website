"use client";

import Link from "next/link";
import { Sparkles, Target, Users, Loader2, CalendarCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function DifferenceSection() {
    const features = [
        {
            icon: Sparkles,
            title: "AI Outbound & Inbound",
            description: "Not just a chatbot. Our infrastructure can place calls, negotiate reservations, and confirm details autonomously.",
            href: "/features/ai-outbound"
        },
        {
            icon: Target,
            title: "Intent Before Friction",
            description: "Predictive modeling captures user intent before they articulate a full request, reducing cognitive load.",
            href: "/features/intent-prediction"
        },
        {
            icon: Users,
            title: "Human Escalation",
            description: "We don't replace humans; we elevate them. Complex edge cases are seamlessly handed off to expert operators.",
            href: "/features/human-escalation"
        }
    ];

    return (
        <section id="product" className="py-32 bg-zinc-900/10 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-amber-400 text-sm font-medium mb-3">The Solution</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight mb-10">The PRV8 Difference</h2>
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.href}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={feature.href}
                                    className="group flex gap-5 items-start p-4 -m-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="icon-accent">
                                        <feature.icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-serif text-lg text-white">{feature.title}</h3>
                                            <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </div>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* UI Abstraction/Visual */}
                <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-1 shadow-2xl shadow-black/40">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="bg-zinc-950/80 backdrop-blur-md rounded-xl overflow-hidden p-6 space-y-4 min-h-[320px]">
                        {/* Fake Chat UI */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start gap-3"
                        >
                            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs text-white">U</div>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-zinc-300">
                                I need a table for 4 in SoHo tonight, quiet atmosphere.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex items-center gap-3 text-xs text-zinc-600 pl-12 py-1"
                        >
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>PRV8 AI calling restaurant...</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                            className="flex items-start gap-3 flex-row-reverse"
                        >
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 text-xs text-black font-bold">P</div>
                            <div className="bg-white/10 border border-white/10 rounded-2xl rounded-tr-none px-4 py-2 text-sm text-white">
                                Confirmed at Raoul&apos;s, 8:30 PM. I&apos;ve noted your preference for a corner booth.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 3.5 }}
                            className="mt-4 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded bg-zinc-800 flex items-center justify-center">
                                    <CalendarCheck className="w-4 h-4 text-zinc-400" />
                                </div>
                                <div className="text-xs">
                                    <div className="text-white font-medium">Reservation Confirmed</div>
                                    <div className="text-zinc-500">Raoul&apos;s • 8:30 PM • 4 Guests</div>
                                </div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
