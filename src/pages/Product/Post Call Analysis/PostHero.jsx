import React, { useState, useEffect } from 'react';
import PostHeroImg from '../../../assets/Product/Post Call Analysis/PostHero.gif';
import CallHistoryImg from '../../../assets/Product/Post Call Analysis/Call History.png';
import NavigateBadge from '../../../assets/Product/Post Call Analysis/navigate.png';
import logo from "../../../assets/logo.png";

const PostHero = () => {
    const [step, setStep] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isBadgeHovered, setIsBadgeHovered] = useState(false);

    useEffect(() => {
        // Step 0: Shrunk (initial)
        // Step 1: Call History scales up
        // Step 2: Navigate appears (at small size)
        // Step 3: Navigate grows bigger
        // Step 4: Hold
        const timings = [1500, 800, 600, 800, 3000];

        const timeout = setTimeout(() => {
            setStep((prev) => (prev + 1) % 5);
        }, timings[step]);

        return () => clearTimeout(timeout);
    }, [step]);

    return (
        <section className="relative pt-20 lg:pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-12 lg:mb-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Logo above title on mobile */}
                        <img src={logo} alt="Hexa AI Logo" className="h-16 w-auto mb-8 lg:hidden" />

                        <span className="hidden lg:block text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">Build</span>

                        <h1 className="text-3xl sm:text-5xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Turn Every Call Into Actionable Insights  <br className='hidden lg:block' />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F7AFF] to-[#FE49FF]">Post Call Analysis</span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                            Unlock the power of your customer conversations with Retell AI's Post-Call Analysis feature. Automatically analyze calls to uncover valuable insights, optimize performance, and make data-driven decisions.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Large Purple Gradient Container */}
                        <div className="rounded-[40px] w-full h-[320px] sm:h-[500px] flex items-center justify-center relative overflow-hidden">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
                                style={{
                                    backgroundImage: `url(${PostHeroImg})`,
                                    transform: step >= 1 ? 'scale(1.1)' : 'scale(1)',
                                }}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E1F5]/80 via-transparent to-[#E8E1F5]/80 pointer-events-none" />

                            {/* Widgets Container - Positioned and Scaling Together */}
                            <div
                                className="absolute left-10 top-10 z-10 origin-top-left cursor-pointer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    transform: (isHovered || step >= 1) ? 'scale(0.7)' : 'scale(0.3)',
                                }}
                            >
                                <div className="relative">
                                    {/* Main Widget: Call History */}
                                    <img
                                        src={CallHistoryImg}
                                        alt="Call History"
                                        className="w-full max-w-[600px] h-auto rounded-2xl shadow-2xl"
                                    />

                                    {/* Secondary Widget: Navigate - appears after delay */}
                                    <div
                                        className="absolute bottom-[-20%] right-[-10%] w-[58%] z-20 cursor-pointer transition-transform duration-300 origin-top-left"
                                        onMouseEnter={() => setIsBadgeHovered(true)}
                                        onMouseLeave={() => setIsBadgeHovered(false)}
                                        style={{
                                            transition: 'opacity 0.8s ease-out, transform 0.3s ease-out',
                                            transitionDelay: (isHovered || step >= 1) ? '0.4s' : '0s',
                                            opacity: (isHovered || step >= 2) ? 1 : 0,
                                            transform: (isBadgeHovered || step >= 3) ? 'scale(1.5)' : 'scale(0.9)',
                                        }}
                                    >
                                        <img
                                            src={NavigateBadge}
                                            alt="Analysis Results"
                                            className="w-full h-auto rounded-2xl shadow-2xl"
                                        />
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

export default PostHero;
