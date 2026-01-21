"use client";

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic } from 'lucide-react';

interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}

// Context to share demo step between Chat and Dashboard
interface DemoContextType {
    demoStep: number;
    setDemoStep: (step: number) => void;
}

const DemoContext = createContext<DemoContextType>({ demoStep: 0, setDemoStep: () => { } });

export const useDemoContext = () => useContext(DemoContext);

// Complete demo script exactly like visit-dubai (all 8 steps)
// Step 0: Initial greeting
// Step 1: Dates confirmed - Calendar appears
// Step 2: Flight confirmed - Flight widget appears
// Step 3: Hotel confirmed - Stay widget appears
// Step 4: Ride confirmed - Ride widget appears
// Step 5: Dining confirmed - Dining widget appears
// Step 6: Shopping confirmed - Shopping widget appears
// Step 7: Experience confirmed - Experience widget appears
// Step 8: All done - Everything visible

const DEMO_SCRIPT: ChatMessage[] = [
    {
        sender: 'user',
        text: "I'm planning a trip to Dubai."
    },
    {
        sender: 'ai',
        text: "Excellent choice. When are you planning to travel?"
    },
    {
        sender: 'user',
        text: "June 5th to 9th."
    },
    {
        sender: 'ai',
        text: "Noted. Weather is expected to be 95° and sunny. Let's start with flights. I found an early AM departure from SFO on your preferred carrier, Emirates, Business Class, nonstop. Want me to hold seats?"
    },
    {
        sender: 'user',
        text: "Yes."
    },
    {
        sender: 'ai',
        text: "Done. I'd recommend The Royal Mirage for your stay. Arabian Court Suite with Sea View. Secure it?"
    },
    {
        sender: 'user',
        text: "Secure it."
    },
    {
        sender: 'ai',
        text: "Locked in. Complimentary Chauffeur-drive service is included with your flight. Shall I schedule the pickup?"
    },
    {
        sender: 'user',
        text: "Yes, schedule it."
    },
    {
        sender: 'ai',
        text: "Confirmed. For dining, I've found a table at Ossiano — underwater fine dining. Friday at 8pm?"
    },
    {
        sender: 'user',
        text: "That sounds amazing. Book it."
    },
    {
        sender: 'ai',
        text: "Reserved. Also — high SPF sunscreen is recommended for the desert sun. Shall I have SunSport SPF 50 waiting in your suite?"
    },
    {
        sender: 'user',
        text: "Yes please."
    },
    {
        sender: 'ai',
        text: "Added. Finally, a private desert safari with vintage Land Rovers is highly rated. Shall I add this experience?"
    },
    {
        sender: 'user',
        text: "Yes, add it."
    },
    {
        sender: 'ai',
        text: "Done. Your Dubai itinerary is fully organized. Please review the summary below and complete your checkout."
    }
];

// Map message index to demo step for widget visibility (matching visit-dubai DemoCard.tsx)
// Step 0: Initial (no widgets)
// Step 1: After dates confirmed (messages 2-3) - Calendar, Weather, Flight appear
// Step 2: After flight confirmed (messages 4-5) - Flight becomes completed
// Step 3: After hotel confirmed (messages 6-7) - Stay widget appears
// Step 4: After ride confirmed (messages 8-9) - Ride widget appears
// Step 5: After dining confirmed (messages 10-11) - Dining widget appears
// Step 6: After shopping confirmed (messages 12-13) - Shopping widget appears
// Step 7: After experience confirmed (messages 14-15) - Experience widget appears
const getStepFromMessageIndex = (index: number): number => {
    if (index < 3) return 0;      // Before dates AI response
    if (index < 5) return 1;      // After dates, during flight
    if (index < 7) return 2;      // After flight confirmed
    if (index < 9) return 3;      // After hotel confirmed
    if (index < 11) return 4;     // After ride confirmed
    if (index < 13) return 5;     // After dining confirmed
    if (index < 15) return 6;     // After shopping confirmed
    return 7;                     // After experience confirmed
};

export function DemoProvider({ children }: { children: React.ReactNode }) {
    const [demoStep, setDemoStep] = useState(0);
    return (
        <DemoContext.Provider value={{ demoStep, setDemoStep }}>
            {children}
        </DemoContext.Provider>
    );
}

export function ChatDemoPreview() {
    const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { setDemoStep } = useDemoContext();

    // Detect when component is visible in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            { threshold: 0.3 } // Start when 30% of the component is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Auto-scroll to bottom of chat container only (not the whole page)
    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        // Use setTimeout to ensure DOM has updated before scrolling
        const timer = setTimeout(scrollToBottom, 50);
        return () => clearTimeout(timer);
    }, [visibleMessages]);

    // Auto-play the demo conversation - only when visible
    useEffect(() => {
        if (!hasStarted) return;
        if (currentIndex >= DEMO_SCRIPT.length) {
            // Reset after a pause
            const resetTimer = setTimeout(() => {
                setVisibleMessages([]);
                setCurrentIndex(0);
                setDemoStep(0);
            }, 5000);
            return () => clearTimeout(resetTimer);
        }

        const timer = setTimeout(() => {
            setVisibleMessages(prev => [...prev, DEMO_SCRIPT[currentIndex]]);
            // Update demo step for widget visibility
            setDemoStep(getStepFromMessageIndex(currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
        }, currentIndex === 0 ? 1000 : 1800);

        return () => clearTimeout(timer);
    }, [currentIndex, hasStarted, setDemoStep]);

    return (
        <div ref={containerRef} className="h-full flex flex-col bg-zinc-950/90 backdrop-blur-xl overflow-hidden">
            {/* Header */}
            <div className="h-14 bg-zinc-900/50 border-b border-white/5 flex items-center justify-between px-5 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="font-bold text-black text-xs">V</span>
                    </div>
                    <div>
                        <h4 className="text-white font-medium text-sm">Val8</h4>
                        <p className="text-amber-500 text-[9px] uppercase tracking-widest font-medium">Powered by Prv8</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-emerald-400 text-[10px] uppercase tracking-widest">Live</span>
                </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 px-5 py-4 overflow-y-auto space-y-4 no-scrollbar">
                <AnimatePresence>
                    {visibleMessages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                        >
                            <div
                                className={`max-w-[85%] p-3 rounded-2xl ${msg.sender === 'user'
                                    ? 'bg-white/10 text-white rounded-tr-sm border border-white/5'
                                    : 'bg-amber-500/10 text-white rounded-tl-sm border border-amber-500/20'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed font-light">{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {currentIndex < DEMO_SCRIPT.length && visibleMessages.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-white/40 text-xs pl-2"
                    >
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                        <span>{DEMO_SCRIPT[currentIndex]?.sender === 'ai' ? 'AI is thinking...' : 'User is typing...'}</span>
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-zinc-900/50 border-t border-white/5">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tell me anything..."
                        disabled
                        className="w-full bg-black/40 text-white placeholder-white/30 rounded-xl pl-4 pr-20 py-3 text-sm focus:outline-none border border-white/5 cursor-not-allowed"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40">
                            <Mic className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-black">
                            <Send className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
