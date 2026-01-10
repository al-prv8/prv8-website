import {
    PhoneOff, FileClock, BrainCircuit, Sparkles, Target, Users,
    Search, Zap, ShieldCheck, TrendingUp, CreditCard, Plane, Building2
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface FeatureData {
    slug: string;
    title: string;
    valueStatement: string;
    description: string;
    problemStatement: string;
    solutionStatement: string;
    icon: LucideIcon;
    ctaText: string;
    ctaLink: string;
    category: "problem" | "solution" | "process" | "enterprise";
}

export const featuresData: FeatureData[] = [
    // Problem Section Cards
    {
        slug: "phone-friction",
        title: "Runs on Phone Calls",
        valueStatement: "Eliminate the friction of synchronous communication",
        description: "Current concierge services rely heavily on phone calls, creating delays and requiring real-time availability from both parties. This synchronous dependency creates friction at every touchpoint.",
        problemStatement: "Async communication is non-existent. Simple requests require holding times and verbal confirmation loops. Every interaction demands your immediate attention.",
        solutionStatement: "PRV8 enables fully asynchronous interactions. Submit requests through any channel, receive confirmations when you're ready, and never wait on hold again.",
        icon: PhoneOff,
        ctaText: "See How We Solve This",
        ctaLink: "#request",
        category: "problem"
    },
    {
        slug: "manual-workflows",
        title: "Manual Workflows",
        valueStatement: "Transform reactive operations into intelligent automation",
        description: "Traditional concierge teams operate reactively, handling each request from scratch without leveraging historical context or predictive capabilities.",
        problemStatement: "Agents operate reactively with zero foresight. Preferences are lost in unstructured notes. Every interaction starts from zero context.",
        solutionStatement: "Our AI continuously learns your preferences, anticipates needs, and pre-populates solutions before you even ask. Context is never lost.",
        icon: FileClock,
        ctaText: "Learn About Our Automation",
        ctaLink: "#request",
        category: "problem"
    },
    {
        slug: "unintelligent-service",
        title: "Unintelligent High-Touch",
        valueStatement: "Redirect human effort from logistics to curation",
        description: "Human operators spend the majority of their time on repetitive booking logistics instead of high-value relationship management and curation.",
        problemStatement: "Human effort is wasted on booking logistics instead of curation and relationship management. The service layer lacks intelligence.",
        solutionStatement: "PRV8 handles the logistics autonomously, freeing human experts to focus on what they do best: crafting exceptional, personalized experiences.",
        icon: BrainCircuit,
        ctaText: "Discover Intelligent Service",
        ctaLink: "#request",
        category: "problem"
    },

    // Solution Section Cards
    {
        slug: "ai-outbound",
        title: "AI Outbound & Inbound",
        valueStatement: "Autonomous voice and API-driven execution",
        description: "PRV8's AI infrastructure can initiate outbound calls, negotiate reservations, confirm details, and handle inbound queries—all without human intervention.",
        problemStatement: "Traditional systems require human agents to make every call, creating bottlenecks and limiting scalability.",
        solutionStatement: "Not just a chatbot. Our infrastructure can place calls, negotiate reservations, and confirm details autonomously, 24/7, in any language.",
        icon: Sparkles,
        ctaText: "Request a Demo",
        ctaLink: "#request",
        category: "solution"
    },
    {
        slug: "intent-prediction",
        title: "Intent Before Friction",
        valueStatement: "Anticipate needs before they're articulated",
        description: "Our predictive modeling captures user intent from subtle signals, reducing the cognitive load of articulating full requests and accelerating resolution.",
        problemStatement: "Users must fully articulate every request, even when patterns are obvious. This creates unnecessary friction.",
        solutionStatement: "Predictive modeling captures user intent before they articulate a full request, reducing cognitive load and delivering faster outcomes.",
        icon: Target,
        ctaText: "See Prediction in Action",
        ctaLink: "#request",
        category: "solution"
    },
    {
        slug: "human-escalation",
        title: "Human Escalation",
        valueStatement: "Expert humans for complex edge cases",
        description: "Complex situations that require nuance, judgment, or relationship management are seamlessly handed off to experienced human operators.",
        problemStatement: "Fully automated systems fail on edge cases. Fully manual systems don't scale.",
        solutionStatement: "We don't replace humans; we elevate them. Complex edge cases are seamlessly handed off to expert operators who add genuine value.",
        icon: Users,
        ctaText: "Learn About Our Team",
        ctaLink: "#request",
        category: "solution"
    },

    // Process Section Cards
    {
        slug: "understand",
        title: "Understand",
        valueStatement: "Contextual intelligence from day one",
        description: "PRV8 ingests context from your history, preferences, real-time availability data, and environmental factors to build a complete picture before taking action.",
        problemStatement: "Systems that don't understand context make poor recommendations and require constant correction.",
        solutionStatement: "We ingest context, history, and real-time availability to understand not just what you want, but why you want it.",
        icon: Search,
        ctaText: "Learn More",
        ctaLink: "#request",
        category: "process"
    },
    {
        slug: "act",
        title: "Act",
        valueStatement: "Autonomous execution at scale",
        description: "Once intent is understood, our AI executes the required actions through voice calls, API integrations, or direct platform connections—automatically.",
        problemStatement: "Manual execution creates delays and errors. Every handoff is a potential failure point.",
        solutionStatement: "AI executes booking logic via voice or API. No delays, no errors, no waiting on human availability.",
        icon: Zap,
        ctaText: "See It Work",
        ctaLink: "#request",
        category: "process"
    },
    {
        slug: "escalate",
        title: "Escalate",
        valueStatement: "Nuance detection and expert routing",
        description: "Our system recognizes situations requiring human judgment and routes them to the right expert with full context—no repetition required.",
        problemStatement: "AI systems that can't recognize their limits create poor experiences. Blind escalation wastes expert time.",
        solutionStatement: "Nuance is detected and routed to human experts with full context. The right person, the right problem, zero repetition.",
        icon: ShieldCheck,
        ctaText: "Understand Our Process",
        ctaLink: "#request",
        category: "process"
    },
    {
        slug: "learn",
        title: "Learn",
        valueStatement: "Continuous preference refinement",
        description: "Every interaction feeds back into the preference engine, making future interactions smoother, faster, and more personalized.",
        problemStatement: "Static systems don't improve. You end up repeating preferences endlessly.",
        solutionStatement: "Outcomes feed back into the preference engine. PRV8 gets smarter with every interaction, building a living profile of your needs.",
        icon: TrendingUp,
        ctaText: "Explore Our AI",
        ctaLink: "#request",
        category: "process"
    },

    // Enterprise Section Cards
    {
        slug: "card-programs",
        title: "Premium Card Programs",
        valueStatement: "Enhance cardholder retention with intelligent concierge",
        description: "Financial institutions can white-label PRV8 to offer differentiated concierge services that actually work, improving cardholder satisfaction and retention.",
        problemStatement: "Traditional card concierge services underwhelm. Cardholders rarely use them, providing no retention value.",
        solutionStatement: "Enhance cardholder retention with a concierge that actually works. Deliver experiences that make your premium tier worth paying for.",
        icon: CreditCard,
        ctaText: "Partner With Us",
        ctaLink: "#request",
        category: "enterprise"
    },
    {
        slug: "travel-platforms",
        title: "Travel & Lifestyle Platforms",
        valueStatement: "Embed high-touch service into your digital product",
        description: "Travel and lifestyle companies can integrate PRV8's capabilities directly into their platforms, offering concierge-level service at scale.",
        problemStatement: "Digital platforms lack the high-touch feel of traditional concierge. Users feel like they're talking to a system.",
        solutionStatement: "Embed high-touch service capabilities directly into your digital product. Make every user feel like they have a personal assistant.",
        icon: Plane,
        ctaText: "Integrate PRV8",
        ctaLink: "#request",
        category: "enterprise"
    },
    {
        slug: "enterprise-concierge",
        title: "Enterprise Concierge Operators",
        valueStatement: "Operational leverage for high-volume teams",
        description: "Existing concierge operations can use PRV8 to handle routine requests automatically, letting their teams focus on high-value interactions.",
        problemStatement: "Concierge teams are overwhelmed with routine requests. High-value work gets crowded out.",
        solutionStatement: "Operational leverage for existing teams handling thousands of requests. Let AI handle the routine so your experts can excel.",
        icon: Building2,
        ctaText: "Scale Your Operations",
        ctaLink: "#request",
        category: "enterprise"
    }
];

export function getFeatureBySlug(slug: string): FeatureData | undefined {
    return featuresData.find(f => f.slug === slug);
}

export function getFeaturesByCategory(category: FeatureData["category"]): FeatureData[] {
    return featuresData.filter(f => f.category === category);
}
