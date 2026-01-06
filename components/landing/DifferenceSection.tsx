"use client";

import { Sparkles, Target, Users, Loader2, CalendarCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function DifferenceSection() {
    return (
        <section id="product" className="py-24 bg-zinc-900/10 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">The PRV8 Difference</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">AI Outbound &amp; Inbound</h3>
                                <p className="text-sm text-zinc-500">Not just a chatbot. Our infrastructure can place calls, negotiate reservations, and confirm details autonomously.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Intent Before Friction</h3>
                                <p className="text-sm text-zinc-500">Predictive modeling captures user intent before they articulate a full request, reducing cognitive load.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Human Escalation</h3>
                                <p className="text-sm text-zinc-500">We don't replace humans; we elevate them. Complex edge cases are seamlessly handed off to expert operators.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* UI Abstraction/Visual */}
                <div className="relative rounded-2xl border border-white/10 bg-black p-1 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/20 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="bg-zinc-950 rounded-xl overflow-hidden p-6 space-y-4 min-h-[320px]">
                        {/* Fake Chat UI */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start gap-3"
                        >
                            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 text-xs text-white">U</div>
                            <div className="bg-zinc-900 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-zinc-300">
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
                            className="mt-4 p-3 bg-zinc-900/50 border border-white/5 rounded-lg flex items-center justify-between"
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
