"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#"
                    className="text-white font-semibold tracking-tighter text-lg hover:opacity-80 transition-opacity"
                >
                    PRV8
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="#product" className="hover:text-white transition-colors">
                        Product
                    </Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">
                        How It Works
                    </Link>
                    <Link href="#enterprise" className="hover:text-white transition-colors">
                        Enterprise
                    </Link>
                </div>

                {/* CTA */}
                <Link
                    href="#request"
                    className="group flex items-center gap-2 text-xs font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                    <span>Request Access</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </nav>
    );
}
