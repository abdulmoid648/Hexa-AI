import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gradientGif from "../../assets/gradient.gif";

const departments = ["Receptionist", "Appointment", "Customer Service", "Survey", "Queries", "Leads"];

const avatarUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
];

const voices = [
    {
        name: "Roger",
        description: "Laid-Back, Casual",
        longDescription: "A smooth tenor pitch from a man in his 40s – perfect for agentic use cases.",
        tags: ["Male", "American"],
        accent: "bg-sky-500",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        star: true,
    },
    {
        name: "Sarah",
        description: "Mature, Reassuring",
        longDescription: "A sophisticated and calm voice with a hint of authority.",
        tags: ["Female", "British"],
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    {
        name: "Laura",
        description: "Enthusiast, Quirky",
        longDescription: "Energetic and friendly voice that keeps customers engaged.",
        tags: ["Female", "Australian"],
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop",
    },
    {
        name: "Charlie",
        description: "Deep, Confident",
        longDescription: "A resonant and powerful voice that commands attention.",
        tags: ["Male", "American"],
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
];

function ChevronDownIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}
function Waveform({ color = "bg-slate-400", scale = 0.38, className = "" }) {
    return (
        <div className={`flex h-8 items-center gap-[2px] ${className}`}>
            {[
                [28, 1.10, 0.00], [52, 0.90, 0.08], [70, 1.30, 0.16], [44, 1.00, 0.24], [80, 0.80, 0.32],
                [58, 1.20, 0.40], [90, 1.00, 0.48], [36, 1.40, 0.56], [74, 0.90, 0.64], [62, 1.10, 0.72],
                [86, 0.85, 0.80], [48, 1.30, 0.88], [76, 1.00, 0.96], [40, 1.20, 0.60], [66, 0.95, 0.44],
                [84, 1.15, 0.28], [54, 1.35, 0.12], [72, 0.88, 0.52], [42, 1.05, 0.36], [68, 1.25, 0.20],
            ].map(([h, dur, delay], i) => (
                <span
                    key={i}
                    className={`min-w-0 flex-1 rounded-full ${color}`}
                    style={{
                        height: `${Math.round(h * scale)}px`,
                        transformOrigin: 'center',
                        animation: `pulseBar ${dur}s ease-in-out ${delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}

function PlayIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .7.76 1.14 1.37.8l10.67-6.86a.95.95 0 0 0 0-1.6L9.37 4.34A.92.92 0 0 0 8 5.14Z" />
        </svg>
    );
}

const LiveDemo = () => {
    const [expandedVoice, setExpandedVoice] = useState(null);
    const toggleVoice = (name) => setExpandedVoice(prev => prev === name ? null : name);

    return (
        <section
            id="call"
            style={{
                backgroundImage: `url(${gradientGif})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="relative py-16 sm:py-20 lg:py-24"
        >
            {/* Overlay to reduce GIF opacity */}
            <div className="absolute inset-0 bg-white/80"></div>
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center ">
                    <h2 className="relative inline-block text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
                        Try Our Live Demo
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-900 sm:text-lg">
                        Discover how our AI caller transforms customer conversations.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr_1.05fr_0.95fr] xl:items-start">
                    <div className="space-y-5 mt-10 ">
                        <h3 className="text-xl font-bold text-slate-800">Select Department</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
                            {departments.map((department) => (
                                <a
                                    key={department}
                                    href="#call"
                                    className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-4 text-center text-sm font-medium text-slate-900 ring-1 ring-slate-100 transition hover:text-cyan-500 hover:ring-cyan-200"
                                >
                                    {department}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10  bg-transparent p-6  ">
                        <h3 className="text-2xl font-semibold text-slate-800 ">Choose Voice</h3>
                        <div className="space-y-4">
                            {voices.map((voice, index) => {
                                const isOpen = expandedVoice === voice.name;
                                return (
                                    <div
                                        key={voice.name}
                                        onClick={() => toggleVoice(voice.name)}
                                        className={`flex flex-col overflow-hidden rounded-2xl bg-white ring-1 transition-all cursor-pointer shadow-[0_4px_16px_rgba(6,182,212,0.15)] ${isOpen ? "ring-cyan-300" : "ring-slate-100 hover:ring-cyan-200"}`}
                                    >
                                        {/* ── Closed row (always visible) ── */}
                                        <div className="flex items-center gap-3 px-3 py-3">
                                            {/* Play button */}
                                            <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl text-white ${voice.accent}`}>
                                                <div className="grid h-6 w-6 place-items-center rounded-full border-2 border-white/90">
                                                    <PlayIcon className="h-3 w-3" />
                                                </div>
                                            </div>

                                            {/* Name + description */}
                                            <div className="min-w-0 flex-shrink-0 w-28">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-sm font-bold text-slate-900 truncate">{voice.name}</span>
                                                    {voice.star && (
                                                        <svg className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <p className="text-xs text-slate-400 truncate">{voice.description}</p>
                                            </div>

                                            {/* Waveform — only visible when collapsed */}
                                            {!isOpen && (
                                                <div className="min-w-0 flex-1 flex items-center pr-2">
                                                    <Waveform className="w-full" color="bg-slate-400" />
                                                </div>
                                            )}

                                            {/* Chevron */}
                                            <ChevronDownIcon className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                        </div>

                                        {/* ── Expanded content ── */}
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    key="expanded"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.28, ease: "easeInOut" }}
                                                    className="overflow-hidden border-t border-slate-100"
                                                >
                                                    <div className="px-5 pt-4 pb-5 flex flex-col gap-4">
                                                        {/* Full name + star */}
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-lg font-bold text-slate-900">
                                                                {voice.name} – {voice.description}
                                                            </span>
                                                            {voice.star && (
                                                                <svg className="h-5 w-5 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                                                                </svg>
                                                            )}
                                                        </div>

                                                        {/* Long description */}
                                                        <p className="text-sm text-slate-500 leading-relaxed">{voice.longDescription}</p>

                                                        {/* Waveform — exactly alike the closed one */}
                                                        <div className="flex items-center">
                                                            <div className="w-[110px]">
                                                                <Waveform className="w-full" color="bg-slate-400" />
                                                            </div>
                                                        </div>

                                                        {/* Tags */}
                                                        <div className="flex flex-wrap gap-2">
                                                            {voice.tags && voice.tags.map(tag => (
                                                                <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-800 text-white text-xs font-semibold">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="xl:-mt-3 w-[290px] lg:h-[450px]  xs:w-[340px] md:w-[290px] lg:w-[400px] rounded-[12px] lg:rounded-[16px] 4xl:rounded-[20px] bg-text-dark p-4 lg:p-6 4xl:p-8 flex flex-col gap-4 lg:gap-6 shadow-2xl" style={{ colorScheme: 'dark' }}>
                        <h3 className="text-2xl font-bold mt-2 text-white">Enter Details</h3>

                        <div className="space-y-5">
                            <input
                                type="text"
                                placeholder="123-456-7890"
                                className="h-16 w-full rounded-2xl border border-white/30 bg-white/5 px-6 text-base text-white placeholder:text-slate-500 focus:border-white/20 focus:outline-none transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Wilson"
                                className="h-16 w-full rounded-2xl border border-white/30 bg-white/5 px-6 text-base text-white placeholder:text-slate-500 focus:border-white/20 focus:outline-none transition-all"
                            />
                            <input
                                type="email"
                                placeholder="wilson@company.com"
                                className="h-16 w-full rounded-2xl border border-white/30 bg-white/5 px-6 text-base text-white placeholder:text-slate-500 focus:border-white/20 focus:outline-none transition-all"
                            />
                        </div>

                        <a
                            href="#call"
                            className="inline-flex h-16 w-full items-center justify-center rounded-lg bg-white text-lg  text-black transition hover:bg-slate-100 shadow-lg"
                        >
                            Get a Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveDemo;
