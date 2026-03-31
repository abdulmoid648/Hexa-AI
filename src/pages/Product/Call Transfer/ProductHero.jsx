import React, { useState, useEffect } from 'react';
import ProductHeroImg from '../../../assets/ProductHero.gif';
import logo from "../../../assets/logo.png";
import HandIcon from '../../../assets/Product/Knowledge Base/HandIcon.png';

const ProductHero = () => {
    const [phase, setPhase] = useState(0);
    // Phase 0: Card small, Hand out
    // Phase 1: Card scaling up
    // Phase 2: Hand slides in
    // Phase 3: Hand on plus (click)
    // Phase 4: Transfer card appears
    // Phase 5: Hold view
    // Phase 6: Hand slides out
    // Phase 7: Card shrinks

    const showTransfer = phase >= 1 && phase <= 6;
    const showHand = phase >= 2 && phase <= 3 || phase === 5; 
    
    const handActive = phase >= 2 && phase <= 5;
    const showTransferCard = phase >= 4 && phase <= 6;

    useEffect(() => {
        const timings = [1500, 800, 1000, 400, 2000, 1000, 800, 800];
        const timeout = setTimeout(() => {
            setPhase(prev => (prev + 1) % 8);
        }, timings[phase]);
        return () => clearTimeout(timeout);
    }, [phase]);

    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
                        {/* Logo above title on mobile */}
                        <img src={logo} alt="Hexa AI Logo" className="h-14 w-auto mb-8 lg:hidden" />

                        <span className="text-gray-400 font-medium mb-4 md:-mt-40 block tracking-wider uppercase text-xs">Build</span>
                        <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Power your AI Agent <br />
                            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-500">Call Transfer</span>
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
                            Streamline customer calls with Hexa AI's fast, context-rich, and personalized AI-powered call transfer options.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative flex flex-col items-center">
                        {/* Main Container */}
                        <div className="w-full bg-[#E9E9FF] rounded-[2.5rem] p-8 sm:p-12 h-[380px] sm:h-[480px] md:h-[450px] flex items-center justify-center relative transition-all duration-500">

                            {/* Background Layer (Hidden on mobile for the purple design) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                                style={{
                                    backgroundImage: `url(${ProductHeroImg})`,
                                }}
                            />

                            {/* Lightening Overlay (Hidden on mobile) */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none hidden md:block" />

                            {/* Content Layer (Cards) */}
                            <div className="relative z-10 flex items-center justify-center w-full h-full lg:-translate-y-20 lg:-translate-x-15">

                                {/* Functions Card */}
                                <div className="relative">
                                    <div
                                        onClick={() => setPhase(1)}
                                        className={` origin-top-left transition-all duration-700 ease-in-out bg-white rounded-2xl shadow-xl p-5 z-10 cursor-pointer 
                                    ${showTransfer 
                                        ? 'w-64 sm:w-72 transform rotate-0 scale-60 sm:scale-70 md:scale-90' 
                                        : 'w-64 sm:w-72 transform rotate-0 scale-30 md:scale-50 hover:scale-90'
                                    }`}>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-gray-600 font-semibold text-xs tracking-tight">Functions</span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // prevent double toggle
                                                }}
                                                className="bg-amber-400 p-1 rounded hover:bg-amber-300 transition-colors"
                                            >
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-[9px] text-gray-400 mb-5 leading-relaxed pr-6">
                                            Enable your agent with capabilities such as calendar bookings, call termination...
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2.5 bg-[#F4F4F5] p-2.5 rounded-lg">
                                                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                                <span className="text-[10px] font-medium text-gray-600">Phone call</span>
                                            </div>
                                            <div className="flex items-center gap-2.5 bg-[#F4F4F5] p-2.5 rounded-lg">
                                                <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-[10px] font-medium text-gray-600">Calendar</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Hand Cursor (Sibling of scaled card, so it doesn't shrink) */}
                                    <div
                                        className={`absolute pointer-events-none z-30 transform transition-all origin-top-left
                                            ${handActive
                                                ? 'top-[22px] right-[22px] sm:top-[12px] sm:right-[12px] opacity-100 scale-75 md:scale-110'
                                                : 'top-[30px] right-[-60px] opacity-0 scale-75 md:scale-100'
                                            }`}
                                        style={{
                                            transitionDuration: (phase === 2 || phase === 6) ? '800ms' : '400ms',
                                            transitionTimingFunction: 'ease-in-out',
                                        }}
                                    >
                                        <img src={HandIcon} alt="Pointer" className={`w-8 h-8 object-contain drop-shadow-lg transition-transform duration-200 ${phase === 3 ? 'scale-90' : 'scale-100'}`} />
                                    </div>
                                </div>

                                {/* Transfer Call Card */}
                                <div className={`absolute w-72 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-20 
                                    transition-all duration-[1000ms] ease-in-out
                                    translate-x-4 translate-y-20
                                    sm:translate-x-28 sm:translate-y-30
                                    md:translate-x-52 md:translate-y-38
                                    scale-75 sm:scale-55 md:scale-70 origin-top-left hover:scale-90
                                    ${showTransferCard ? 'opacity-100 translate-y-16' : 'opacity-0 translate-y-28 pointer-events-none'}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-bold text-gray-900 tracking-tight">Transfer Call</h3>
                                        <button
                                            onClick={() => setPhase(0)}
                                            className="w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center text-white hover:bg-amber-300 transition-colors"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Transfer to</label>
                                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-between">
                                            <span className="text-xs font-medium text-gray-500">+ 571 1234 2345</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-3">Type</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-bold text-gray-900 block">Cold Transfer</span>
                                                    <span className="text-[8px] text-gray-400 block leading-[1.2]">AI transfers without speaking</span>
                                                </div>
                                                <div className="w-3 h-3 rounded-full border-2 border-gray-200 flex-shrink-0"></div>
                                            </div>
                                            <div className="bg-white border-2 border-blue-500 rounded-2xl p-3 flex items-center justify-between shadow-sm">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-bold text-gray-900 block">Warm Transfer</span>
                                                    <span className="text-[8px] text-gray-400 block leading-[1.2]">AI briefs the next agent after transfer</span>
                                                </div>
                                                <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Handoff Message</label>
                                        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 min-h-[80px]">
                                            <span className="text-[10px] text-gray-400 leading-relaxed italic">
                                                Say hello to the agent and summarize the user problem to him.
                                            </span>
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

export default ProductHero;
