"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getFeatureBySlug, featuresData } from "@/lib/features-data";

export default function FeatureDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const feature = getFeatureBySlug(slug);

    if (!feature) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-white mb-4">Feature Not Found</h1>
                    <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = feature.icon;
    const currentIndex = featuresData.findIndex(f => f.slug === slug);
    const prevFeature = currentIndex > 0 ? featuresData[currentIndex - 1] : null;
    const nextFeature = currentIndex < featuresData.length - 1 ? featuresData[currentIndex + 1] : null;

    return (
        <div className="pt-24 pb-20">
            {/* Back Navigation */}
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-6 mb-20"
            >
                <div className="flex items-start gap-6 mb-8">
                    <div className="icon-accent scale-125">
                        <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                        <p className="text-amber-400 text-sm font-medium mb-2 capitalize">{feature.category}</p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4">
                            {feature.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400">
                            {feature.valueStatement}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* What It Does Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-4xl mx-auto px-6 mb-16"
            >
                <div className="border-l-2 border-amber-500/30 pl-8">
                    <h2 className="font-serif text-2xl text-white mb-4">What It Does</h2>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </motion.section>

            {/* Why It Matters Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto px-6 mb-20"
            >
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div className="relative p-8 rounded-2xl bg-red-500/5 border border-red-500/10">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-black text-red-400 text-xs font-medium rounded-full border border-red-500/20">
                            The Problem
                        </div>
                        <p className="text-zinc-400 leading-relaxed mt-2">
                            {feature.problemStatement}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="relative p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-black text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
                            The Solution
                        </div>
                        <p className="text-zinc-400 leading-relaxed mt-2">
                            {feature.solutionStatement}
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Visual Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-4xl mx-auto px-6 mb-20"
            >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                    <div className="absolute inset-0 bg-grid opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm shadow-xl shadow-amber-500/10 mx-auto mb-6">
                                <Icon className="w-12 h-12 text-amber-400" />
                            </div>
                            <p className="text-zinc-500 text-sm">Visual representation coming soon</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl mx-auto px-6 mb-20"
            >
                <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent border border-amber-500/20">
                    <h2 className="font-serif text-3xl text-white mb-4">Ready to transform your operations?</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                        See how PRV8 can bring intelligent automation to your concierge services.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={feature.ctaLink}
                            className="group w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
                        >
                            {feature.ctaText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* Navigation to Other Features */}
            <section className="max-w-4xl mx-auto px-6">
                <div className="border-t border-white/10 pt-12">
                    <div className="flex justify-between items-center">
                        {prevFeature ? (
                            <Link
                                href={`/features/${prevFeature.slug}`}
                                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <div className="text-left">
                                    <p className="text-xs text-zinc-600 mb-1">Previous</p>
                                    <p className="font-medium">{prevFeature.title}</p>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextFeature ? (
                            <Link
                                href={`/features/${nextFeature.slug}`}
                                className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-right"
                            >
                                <div>
                                    <p className="text-xs text-zinc-600 mb-1">Next</p>
                                    <p className="font-medium">{nextFeature.title}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>
        </div>
    );
}
