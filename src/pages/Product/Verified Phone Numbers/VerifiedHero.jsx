import React, { useState, useEffect } from 'react';
import MobileImg from '../../../assets/Product/Verified Phone Numbers/Mobile.png';
import VerifiedImg from '../../../assets/Product/Verified Phone Numbers/VerifiedHero.gif';
import SpamBadge from '../../../assets/Product/Verified Phone Numbers/Spam Tag.png';
import TrustBadge from '../../../assets/Product/Verified Phone Numbers/Improve Trust.png';
import logo from "../../../assets/logo.png";

const VerifiedHero = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Animation sequence:
        // step 0: nothing visible
        // step 1: "Spam Likely" appears blurred
        // step 2: "California, USA" appears clear
        // step 3: badges appear + "Spam Likely" clears up simultaneously
        const timings = [800, 1000, 1200, 3000]; // pause at end before reset
        let currentStep = 0;

        const advance = () => {
            currentStep++;
            if (currentStep > 3) {
                currentStep = 0;
                setStep(0);
            } else {
                setStep(currentStep);
            }
            timeout = setTimeout(advance, timings[currentStep] || 1000);
        };

        let timeout = setTimeout(advance, timings[0]);

        return () => clearTimeout(timeout);
    }, []);

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
                            Ensure Your Calls Get Answered with <br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-500">Verified Phone Numbers</span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
                            Boost trust and credibility in your call campaigns with Retell AI's Verified Phone Numbers. Reduce the chances of your calls being flagged as spam and improve answer rates to make every outreach effort count.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative flex justify-center">
                        {/* Container Stage with gradient background */}
                        <div className="rounded-[1rem] w-full max-w-[600px] h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden relative shadow-2xl"
                            style={{ background: 'linear-gradient(135deg, #e0c3fc 0%, #d5c5f5 25%, #c9d6f7 50%, #bfe6f9 75%, #c5e8f9 100%)' }}
                        >
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${VerifiedImg})` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(224,195,252,0.6) 0%, rgba(213,197,245,0.6) 25%, rgba(201,214,247,0.6) 50%, rgba(191,230,249,0.6) 75%, rgba(197,232,249,0.6) 100%)' }} />

                            {/* Floating Badge: Spam Tag (Top Left) */}
                            <div
                                className="absolute top-[30%] sm:top-[30%] left-[-3%] sm:left-[1%] z-20 px-4 mb-4"
                                style={{
                                    opacity: step >= 3 ? 1 : 0,
                                    transform: step >= 3 ? 'translateX(0)' : 'translateX(-30px)',
                                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                                }}
                            >
                                <img
                                    src={SpamBadge}
                                    alt="Remove Spam Tag"
                                    className="w-34 sm:w-48 h-auto drop-shadow-lg"
                                />
                            </div>

                            {/* Floating Badge: Improve Trust (Bottom Right) */}
                            <div
                                className="absolute sm:bottom-[12%] bottom-[12%] right-[2%] sm:right-[2%] z-20"
                                style={{
                                    opacity: step >= 3 ? 1 : 0,
                                    transform: step >= 3 ? 'translateX(0)' : 'translateX(30px)',
                                    transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
                                }}
                            >
                                <img
                                    src={TrustBadge}
                                    alt="Improve Trust"
                                    className="w-34 sm:w-48 h-auto drop-shadow-lg"
                                />
                            </div>

                            {/* Phone with Caller Screen */}
                            <div className="relative z-10 flex justify-center items-end w-full h-full pt-8 sm:pt-12">
                                <div className="relative">
                                    <img
                                        src={MobileImg}
                                        alt="Phone showing Spam Likely caller"
                                        className="w-[250px] sm:w-[300px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                                        style={{ transform: 'translateY(35%)' }}
                                    />
                                    {/* On-screen content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[40px] sm:translate-y-10" >
                                        {/* Spam Likely - appears at step 1 blurred, clears at step 3 */}
                                        <h2
                                            className="text-white text-2xl sm:text-3xl font-bold tracking-tight"
                                            style={{
                                                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                                opacity: step >= 1 ? 1 : 0,
                                                filter: step >= 3 ? 'blur(0px)' : 'blur(6px)',
                                                transition: 'opacity 0.5s ease, filter 0.8s ease',
                                            }}
                                        >
                                            Spam Likely
                                        </h2>
                                        {/* California, USA - appears at step 2, always clear */}
                                        <p
                                            className="text-gray-300 text-sm sm:text-base mt-1"
                                            style={{
                                                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                                                opacity: step >= 2 ? 1 : 0,
                                                transition: 'opacity 0.5s ease',
                                            }}
                                        >
                                            California, USA
                                        </p>
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

export default VerifiedHero;
