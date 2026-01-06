"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="#" className="text-white font-semibold tracking-tighter text-lg block mb-4">PRV8</Link>
                        <p className="text-xs text-zinc-600">
                            San Francisco • New York<br />
                            © 2024 PRV8 Inc.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium text-xs mb-4">Product</h4>
                        <ul className="space-y-3 text-xs text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Concierge API</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium text-xs mb-4">Company</h4>
                        <ul className="space-y-3 text-xs text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium text-xs mb-4">Legal</h4>
                        <ul className="space-y-3 text-xs text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Section */}
                <div id="request" className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-zinc-400">Ready to modernize your concierge operations?</p>
                    <div className="flex items-center gap-4">
                        <a href="mailto:partners@prv8.com" className="text-xs text-zinc-500 hover:text-white transition-colors">partners@prv8.com</a>
                        <button className="px-5 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-zinc-200 transition-colors">
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
