"use client";

import { CreditCard, Plane, Building2, Lock } from "lucide-react";

export function EnterpriseSection() {
    return (
        <section id="enterprise" className="py-24 border-t border-white/5 bg-zinc-900/10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">Built for High-Expectation Ecosystems</h2>
                        <p className="text-zinc-500 mb-8 leading-relaxed">
                            PRV8 is the white-label infrastructure layer for organizations that demand discretion, reliability, and speed.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <CreditCard className="w-4 h-4 text-white mt-1" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">Premium Card Programs</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Enhance cardholder retention with a concierge that actually works.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Plane className="w-4 h-4 text-white mt-1" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">Travel &amp; Lifestyle Platforms</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Embed high-touch service capabilities directly into your digital product.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Building2 className="w-4 h-4 text-white mt-1" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">Enterprise Concierge Operators</h4>
                                    <p className="text-xs text-zinc-500 mt-1">Operational leverage for existing teams handling thousands of requests.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-800 rounded-2xl blur opacity-20"></div>
                        <div className="relative rounded-xl bg-zinc-950 border border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                            <Lock className="w-12 h-12 text-zinc-700 mb-4" />
                            <h3 className="text-white font-medium text-lg mb-2">Private by Design</h3>
                            <p className="text-sm text-zinc-500 max-w-xs">
                                We don't sell data. We protect it. Our infrastructure is built for clients who value discretion above all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
