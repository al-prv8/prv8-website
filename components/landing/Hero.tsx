"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid pointer-events-none mask-image-gradient"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-500"></span>
                    </span>
                    Infrastructure for Modern Travel
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8"
                >
                    AI-powered concierge infrastructure for <span className="text-zinc-500">premium travel.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Proactive, intent-driven assistance combining AI precision with human expertise. The operating layer for the next generation of luxury.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#request"
                        className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Request Access
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="w-full sm:w-auto px-8 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                    >
                        See How It Works
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
