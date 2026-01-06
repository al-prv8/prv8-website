"use client";

import { PhoneOff, FileClock, BrainCircuit } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ProblemSection() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">The Friction in Luxury</h2>
                    <p className="text-zinc-500 max-w-lg">Current concierge services are high-touch but low-intelligence.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <SpotlightCard className="group p-8 transition-colors hover:border-white/10">
                        <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
                            <PhoneOff className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Runs on Phone Calls</h3>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Async communication is non-existent. Simple requests require holding times and verbal confirmation loops.
                        </p>
                    </SpotlightCard>

                    {/* Card 2 */}
                    <SpotlightCard className="group p-8 transition-colors hover:border-white/10">
                        <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
                            <FileClock className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Manual Workflows</h3>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Agents operate reactively with zero foresight. Preferences are lost in unstructured notes rather than structured data.
                        </p>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard className="group p-8 transition-colors hover:border-white/10">
                        <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors">
                            <BrainCircuit className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Unintelligent High-Touch</h3>
                        <p className="text-sm leading-relaxed text-zinc-500">
                            Human effort is wasted on booking logistics instead of curation and relationship management.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}
