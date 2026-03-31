import React, { useState, useEffect } from 'react';
import KnowledgeHeroImg from '../../../assets/Product/Knowledge Base/KnowledgeHero.gif';
import KnowledgeBaseImg from '../../../assets/Product/Knowledge Base/Knowledge Base.png';
import CustomerServiceImg from '../../../assets/Product/Knowledge Base/Customer Service.png';
import HandIcon from '../../../assets/Product/Knowledge Base/HandIcon.png';
import logo from "../../../assets/logo.png";

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
        <section className="relative pt-20 lg:pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-12 lg:mb-0 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Logo above title on mobile */}
                        <img src={logo} alt="Hexa AI Logo" className="h-16 w-auto mb-8 lg:hidden" />

                        <span className="hidden lg:block text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">Build</span>

                        <h1 className="text-2xl md:text-4xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Power your AI Agent <br /> with
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F7AFF] to-[#FE49FF]"> Knowledge Base</span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                            Ensure your AI agent delivers precise, up-to-date responses every time. Hexa Ai Knowledge Base feature seamlessly integrates webpages, documents, and custom content to keep your agent informed and efficient.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative lg:col-span-7">
                        {/* Large Purple Gradient Container */}
                        <div className="rounded-[40px] w-full max-w-4xl h-[320px] sm:h-[500px] flex items-center justify-center relative overflow-hidden">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${KnowledgeHeroImg})`,
                                }}
                            />
                            {/* Overlays */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E1F5]/80 via-transparent to-[#E8E1F5]/80 pointer-events-none" />

                            {/* Content wrapper */}
                            <div className="relative z-10 -translate-x-20 sm:-translate-x-32 -translate-y-6">
                                {/* Knowledge Base Card */}
                                <div className="relative">
                                    <div className={`transform transition-all duration-700 origin-top-left
                                        ${phase === 0 ? 'scale-[0.30] opacity-0' : 'scale-[1.15] opacity-100'}`}>
                                        <img
                                            src={KnowledgeBaseImg}
                                            alt="Knowledge Base"
                                            className="w-[160px] sm:w-[240px] h-auto rounded-xl "
                                        />
                                    </div>

                                    {/* Animated Hand Cursor */}
                                    <div
                                        className={`absolute pointer-events-none z-20 transform transition-all origin-top-left
                                            ${phase >= 2
                                                ? 'top-[20px] right-[-15px] opacity-100 scale-100'
                                                : 'top-[20px] right-[-80px] opacity-0 scale-100'
                                            }`}
                                        style={{
                                            transitionDuration: phase >= 2 ? '1000ms' : '700ms',
                                            transitionTimingFunction: 'ease-in-out',
                                        }}
                                    >
                                        <img src={HandIcon} alt="Pointer" className="w-8 h-8 object-contain drop-shadow-lg" />
                                    </div>
                                </div>

                                {/* Customer Service Card - appears after hand click */}
                                <div
                                    className={`absolute left-[130px] sm:left-[230px] top-[40px] sm:top-[50px] transition-all origin-top-left
                                        ${phase >= 4 && phase <= 5
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-[0.40] pointer-events-none'
                                        }`}
                                    style={{
                                        transitionDuration: '500ms',
                                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    }}
                                >
                                    <img
                                        src={CustomerServiceImg}
                                        alt="Customer Service"
                                        className="w-[180px] sm:w-[280px] max-w-none h-auto rounded-xl "
                                    />
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
