"use client";

import { Search, Zap, ShieldAlert, BarChart3 } from "lucide-react";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">System Architecture</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <div className="relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left">
                        <div className="text-xs font-mono text-zinc-600 mb-4">01</div>
                        <div className="mb-3 text-white"><Search className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Understand</h3>
                        <p className="text-xs text-zinc-500">Ingest context, history, and real-time availability.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left">
                        <div className="text-xs font-mono text-zinc-600 mb-4">02</div>
                        <div className="mb-3 text-white"><Zap className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Act</h3>
                        <p className="text-xs text-zinc-500">AI executes booking logic via voice or API.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left">
                        <div className="text-xs font-mono text-zinc-600 mb-4">03</div>
                        <div className="mb-3 text-white"><ShieldAlert className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Escalate</h3>
                        <p className="text-xs text-zinc-500">Nuance is detected and routed to human experts.</p>
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-zinc-800 z-10"></div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative p-6 border border-white/5 rounded-xl bg-zinc-900/20 text-center md:text-left">
                        <div className="text-xs font-mono text-zinc-600 mb-4">04</div>
                        <div className="mb-3 text-white"><BarChart3 className="w-6 h-6" /></div>
                        <h3 className="text-white font-medium mb-1">Learn</h3>
                        <p className="text-xs text-zinc-500">Outcomes feed back into the preference engine.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
