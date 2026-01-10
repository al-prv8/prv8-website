"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

export function VisionSection() {
    return (
        <section className="relative py-32 border-t border-white/5 overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-30"></div>

            <div className="relative max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center mb-8"
                    >
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm shadow-xl shadow-amber-500/10">
                            <Workflow className="w-8 h-8 text-amber-400" />
                        </div>
                    </motion.div>

                    {/* Section Label */}
                    <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-4">Our Vision</p>

                    {/* Main Heading */}
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8 leading-tight">
                        Trust as Infrastructure
                    </h2>

                    {/* Vision Statement - 2-3 lines max */}
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        We envision a future where secure interactions happen invisibly.
                        Where friction dissolves and trust becomes the foundation—not the barrier—of every experience.
                    </p>

                    {/* Visual divider with flowing lines */}
                    <div className="relative h-24 flex items-center justify-center">
                        <motion.div
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="relative z-10 px-6 py-2 bg-black"
                        >
                            <div className="flex items-center gap-3 text-zinc-600 text-sm">
                                <div className="h-2 w-2 rounded-full bg-amber-500/50"></div>
                                <span>Seamless by design</span>
                                <div className="h-2 w-2 rounded-full bg-amber-500/50"></div>
                                <span>Private by default</span>
                                <div className="h-2 w-2 rounded-full bg-amber-500/50"></div>
                                <span>Intelligent always</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
