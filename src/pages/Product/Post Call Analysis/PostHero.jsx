import React from 'react';
import { Plus, FileText } from 'lucide-react';
import PostHeroImg from '../../../assets/Product/Post Call Analysis/PostHero.gif';

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

const PostHero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-20">
                        <span className="text-gray-400 font-medium mb-4 block tracking-wider uppercase text-sm">Build</span>
                        <h1 className="text-5xl sm:text-4xl  text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Turn Every Call Into <br />
                            Actionable Insights <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F7AFF] to-[#FE49FF]"> Post Call Analysis</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                            Unlock the power of your customer conversations with Retell AI’s Post-Call Analysis feature. Automatically analyze calls to uncover valuable insights, optimize performance, and make data-driven decisions.                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Large Purple Gradient Container */}
                        <div className="rounded-[40px] w-full h-[500px] flex items-center justify-center relative overflow-hidden">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${PostHeroImg})`,
                                }}
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E1F5]/80 via-transparent to-[#E8E1F5]/80 pointer-events-none" />

                            {/* Center-Left Content Card */}
                            <div className="relative z-10 -translate-x-24 -translate-y-10 group transition-all duration-700">
                                <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100/50 p-4 w-[240px] transform scale-[1.15]">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostHero;
