"use client";

import { Search, Zap, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { ClickableCard } from "@/components/ui/ClickableCard";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: Search,
            title: "Understand",
            description: "Ingest context, history, and real-time availability.",
            href: "/features/understand"
        },
        {
            number: "02",
            icon: Zap,
            title: "Act",
            description: "AI executes booking logic via voice or API.",
            href: "/features/act"
        },
        {
            number: "03",
            icon: ShieldCheck,
            title: "Escalate",
            description: "Nuance is detected and routed to human experts.",
            href: "/features/escalate"
        },
        {
            number: "04",
            icon: TrendingUp,
            title: "Learn",
            description: "Outcomes feed back into the preference engine.",
            href: "/features/learn"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <p className="text-amber-400 text-sm font-medium mb-3">How It Works</p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-white tracking-tight">System Architecture</h2>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {steps.map((step, index) => (
                        <ClickableCard
                            key={step.href}
                            href={step.href}
                            className="relative p-6 text-center"
                            showArrow={false}
                        >
                            <div className="text-xs font-mono text-amber-500/60 mb-4">{step.number}</div>
                            <div className="icon-accent mb-4 mx-auto">
                                <step.icon className="w-5 h-5 text-amber-400" />
                            </div>
                            <h3 className="font-serif text-lg text-white mb-2">{step.title}</h3>
                            <p className="text-xs text-zinc-500 mb-3">{step.description}</p>
                            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Details</span>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[1px] bg-amber-500/20 z-10"></div>
                            )}
                        </ClickableCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
