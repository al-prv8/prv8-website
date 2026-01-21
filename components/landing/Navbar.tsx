"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity"
                >
                    <div className="relative h-9 w-36">
                        <Image
                            src="/logo new.png"
                            alt="PRV8"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/#product" className="hover:text-white transition-colors">
                        Product
                    </Link>
                    <Link href="/explore" className="hover:text-white transition-colors">
                        Explore PRV8
                    </Link>
                    <Link href="/#enterprise" className="hover:text-white transition-colors">
                        Enterprise
                    </Link>
                </div>

                {/* CTA */}
                <Link
                    href="/request"
                    className="group flex items-center gap-2 text-xs font-medium text-white border border-white/10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                    <span>Request Access</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
        </nav>
    );
}
