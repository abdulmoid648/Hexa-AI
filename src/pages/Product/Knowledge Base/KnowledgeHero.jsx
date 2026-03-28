import React, { useState, useEffect } from 'react';
import { Plus, FileText } from 'lucide-react';
import KnowledgeHeroImg from '../../../assets/Product/Knowledge Base/KnowledgeHero.gif';

const BulbIcon = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1V3M4.22 4.22L5.64 5.64M1 12H3M4.22 19.78L5.64 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.78 4.22L18.36 5.64M23 12H21M19.78 19.78L18.36 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 20H15M10 22H14" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#FBBF24" />
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white" />
        <path d="M12 9V10M12 14V15M9 12H10M14 12H15M9.88 9.88L10.59 10.59M13.41 13.41L14.12 14.12M9.88 14.12L10.59 13.41M13.41 10.59L14.12 9.88" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
);

const KnowledgeHero = () => {
    const [phase, setPhase] = useState(0);
    // Phase 0: Card starts shrunken
    // Phase 1: Card scales up to full size
    // Phase 2: Hand cursor slides in from right toward the plus sign
    // Phase 3: Hand reaches the plus sign (click effect)
    // Phase 4: Customer Service card appears
    // Phase 5: Hold the view, then reset back to 0

    useEffect(() => {
        const timings = [1500, 800, 1000, 400, 2000, 1000];
        let timeout;
        const advance = () => {
            setPhase(prev => (prev + 1) % 6);
        };
        timeout = setTimeout(advance, timings[phase]);
        return () => clearTimeout(timeout);
    }, [phase]);

    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-20">
                        <span className="text-gray-400 font-medium mb-4 block tracking-wider uppercase text-sm">Build</span>
                        <h1 className="text-5xl sm:text-5xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Power your AI Agent <br />
                            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F7AFF] to-[#FE49FF]">Knowledge Base</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                            Ensure your AI agent delivers precise, up-to-date responses every time. Hexa Ai Knowledge Base feature seamlessly integrates webpages, documents, and custom content to keep your agent informed and efficient.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Large Purple Gradient Container */}
                        <div className="rounded-[40px] w-full h-[500px] flex items-center justify-center relative overflow-hidden">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${KnowledgeHeroImg})`,
                                }}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E1F5]/80 via-transparent to-[#E8E1F5]/80 pointer-events-none" />

                            {/* Content wrapper */}
                            <div className="relative z-10 -translate-x-16 -translate-y-6">
                                {/* Knowledge Base Card (original widget) */}
                                <div className="relative">
                                    <div className={`bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100/50 p-4 w-[240px] transform transition-all duration-700 origin-top-left
                                        ${phase === 0 ? 'scale-[0.30]' : 'scale-[1.15]'}`}>
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="grid h-7 w-7 place-items-center">
                                                    <BulbIcon className="h-6 w-6" />
                                                </div>
                                                <span className="text-[12px] font-bold text-gray-800 tracking-tight">Knowledge Base</span>
                                            </div>
                                            <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                                <Plus className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                            </div>
                                        </div>

                                        {/* List Items */}
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-50">
                                                <FileText className="w-3.5 h-3.5 text-blue-500 opacity-60" strokeWidth={2} />
                                                <span className="text-[10px] font-medium text-gray-500">Terms & Conditions</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-50">
                                                <FileText className="w-3.5 h-3.5 text-blue-500 opacity-60" strokeWidth={2} />
                                                <span className="text-[10px] font-medium text-gray-500">Privacy Policy</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Hand Cursor */}
                                    <div
                                        className={`absolute text-2xl pointer-events-none z-20 transition-all
                                            ${phase <= 1
                                                ? 'top-[-5px] right-[-80px] opacity-0'
                                                : phase === 2
                                                    ? 'top-[-5px] right-[-15px] opacity-100'
                                                    : phase === 3
                                                        ? 'top-[-2px] right-[-12px] opacity-100 scale-90'
                                                        : phase === 4
                                                            ? 'top-[-2px] right-[-12px] opacity-0 scale-90'
                                                            : 'top-[-5px] right-[-80px] opacity-0'
                                            }`}
                                        style={{
                                            transitionDuration: phase === 2 ? '1000ms' : phase === 3 ? '200ms' : '400ms',
                                            transitionTimingFunction: 'ease-in-out',
                                        }}
                                    >
                                        👆
                                    </div>
                                </div>

                                {/* Customer Service Card - appears after hand click */}
                                <div
                                    className={`absolute left-[190px] top-[50px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100/50 p-4 w-[220px] transition-all origin-top-left
                                        ${phase >= 4 && phase <= 5
                                            ? 'opacity-100 scale-100 translate-y-0'
                                            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
                                        }`}
                                    style={{
                                        transitionDuration: '500ms',
                                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    {/* Card Header */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <FileText className="w-4 h-4 text-blue-500 opacity-60" strokeWidth={2} />
                                        <span className="text-[12px] font-bold text-gray-800 tracking-tight">Customer Service</span>
                                    </div>

                                    {/* List Items */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-50">
                                            <FileText className="w-3.5 h-3.5 text-blue-500 opacity-60" strokeWidth={2} />
                                            <span className="text-[10px] font-medium text-gray-500">Sales Policy</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-50">
                                            <FileText className="w-3.5 h-3.5 text-blue-500 opacity-60" strokeWidth={2} />
                                            <span className="text-[10px] font-medium text-gray-500">Customer Service</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-gray-50/50 p-2.5 rounded-lg border border-gray-50">
                                            <FileText className="w-3.5 h-3.5 text-blue-500 opacity-60" strokeWidth={2} />
                                            <span className="text-[10px] font-medium text-gray-500">Leaves Policy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeHero;
