import React from 'react';
import { Plus, FileText } from 'lucide-react';
import NavigateeHeroImg from '../../../assets/Product/Navigate IVR/NavigateHero.gif';
import logo from "../../../assets/logo.png";

const BulbIcon = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rays */}
        <path d="M12 1V3M4.22 4.22L5.64 5.64M1 12H3M4.22 19.78L5.64 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.78 4.22L18.36 5.64M23 12H21M19.78 19.78L18.36 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Bulb Base */}
        <path d="M9 20H15M10 22H14" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Bulb Body */}
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#FBBF24" />
        {/* Gear inside */}
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white" />
        <path d="M12 9V10M12 14V15M9 12H10M14 12H15M9.88 9.88L10.59 10.59M13.41 13.41L14.12 14.12M9.88 14.12L10.59 13.41M13.41 10.59L14.12 9.88" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
);

const NavigateHero = () => {
    return (
        <section className="relative pt-20 lg:pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-12 lg:mb-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Logo above title on mobile */}
                        <img src={logo} alt="Hexa AI Logo" className="h-16 w-auto mb-8 lg:hidden" />

                        <span className="hidden lg:block text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">Build</span>

                        <h1 className="text-3xl sm:text-6xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Effortlessly
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F7AFF] to-[#FE49FF]"> Navigate  IVR Systems  </span>
                            with Hexa AI
                        </h1>

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                            Ensure your AI agent can handle IVR systems like a pro. Retell AI’s Navigate IVR feature allows your agent to press digits automatically, routing calls to the right department without delays.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Container with responsive height */}
                        <div className="rounded-[20px] w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center relative overflow-hidden bg-gray-50/50">
                            {/* Background GIF - using contain to ensure it's fully visible */}
                            <div
                                className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${NavigateeHeroImg})`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavigateHero;
