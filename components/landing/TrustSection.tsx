"use client";

export function TrustSection() {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-xl md:text-2xl font-normal text-white tracking-tight mb-8">
                    &quot;The only infrastructure capable of handling the complexity of modern high-net-worth travel.&quot;
                </h2>
                <div className="flex justify-center gap-8 opacity-40 grayscale">
                    {/* Using text representation for logos to keep it minimal and compliant */}
                    <span className="text-lg font-bold font-sans tracking-widest">ATLAS</span>
                    <span className="text-lg font-bold font-serif tracking-widest">NOIR</span>
                    <span className="text-lg font-bold font-mono tracking-widest">VECTOR</span>
                </div>
            </div>
        </section>
    );
}
