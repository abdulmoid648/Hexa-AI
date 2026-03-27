import React, { useState } from 'react';
import ProductHeroImg from '../../assets/ProductHero.gif';

const ProductHero = () => {
    const [showTransfer, setShowTransfer] = useState(false);

    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl">
                        <span className="text-gray-400 font-medium mb-4 md:-mt-40 block tracking-wider uppercase text-xs">Build</span>
                        <h1 className="text-5xl sm:text-6xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Power your AI Agent <br />
                            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-500">Call Transfer</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
                            Streamline customer calls with Hexa AI's fast, context-rich, and personalized AI-powered call transfer options.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Main Container */}
                        <div className="rounded-xl p-8 sm:p-12 h-[350px] sm:h-[480px] md:h-[450px] flex items-center justify-center relative overflow-hidden transition-all duration-500">

                            {/* Background Layer with Filters (isolated from cards) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${ProductHeroImg})`,
                                }}
                            />

                            {/* Lightening Overlay */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />

                            {/* Content Layer (Cards) */}
                            <div className="relative z-10 flex items-center justify-center -translate-y-8 -translate-x-4 md:-translate-y-12 md:-translate-x-12 lg:-translate-y-20 lg:-translate-x-15">

                                {/* Functions Card */}
                                <div
                                    onClick={() => !showTransfer && setShowTransfer(true)}
                                    className={` absolute  origin-top-left  transition-all duration-700 ease-in-out bg-white rounded-2xl shadow-xl p-5 z-10 cursor-pointer 
                                ${showTransfer ? 'w-64 sm:w-72 transform rotate-0 scale-90' : 'w-64 sm:w-72 transform rotate-0 scale-50 hover:scale-90'}`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-gray-600 font-semibold text-xs tracking-tight">Functions</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevent double toggle
                                                setShowTransfer(!showTransfer)
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

                                {/* Transfer Call Card */}
                                {showTransfer && (
                                    <div className="relative w-70  md:2-96  bg-white rounded-xl shadow-2xl border border-gray-100 p-5 z-20 
                                    animate-in fade-in zoom-in-50 slide-in-from-right-12 duration-500 ease-out transform
                                    translate-x-40 translate-y-20
                                    sm:translate-x-28 sm:translate-y-30
                                    md:translate-x-52 md:translate-y-38
                                    scale-45 sm:scale-55 md:scale-70 origin-top-left">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-sm font-bold text-gray-900 tracking-tight">Transfer Call</h3>
                                            <button
                                                onClick={() => setShowTransfer(false)}
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
                                                    <div className="w-3 h-3 rounded-full border-2 border-gray-200"></div>
                                                </div>
                                                <div className="bg-white border-2 border-blue-500 rounded-2xl p-3 flex items-center justify-between shadow-sm">
                                                    <div className="space-y-1">
                                                        <span className="text-[10px] font-bold text-gray-900 block">Warm Transfer</span>
                                                        <span className="text-[8px] text-gray-400 block leading-[1.2]">AI briefs the next agent after transfer</span>
                                                    </div>
                                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
