import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.png";
import Automation from "./Automation";
import automationBg from "../../assets/Integration/Automation.gif";

const categories = [
    "All",
    "Retail",
    "Scheduling & Communication",
    "Telephony",
    "Automation",
    "CRM",
    "Customer Support & CX",
    "Data",
];

const categoryDescriptions = {
    "All": "Connect Hexa AI to your favorite tools and automate your entire business workflow.",
    "Retail": "Manage your e-commerce store with AI-powered customer service and order tracking.",
    "Scheduling & Communication": "Automate your calendar and stay connected with your customers on their favorite platforms.",
    "Telephony": "High-performance voice infrastructure for your AI agents to dial and receive calls globally.",
    "Automation": "Automate repetitive tasks and streamline workflows with pre-built integrations.",
    "CRM": "Keep your customer data in sync and manage leads effortlessly with direct CRM connectivity.",
    "Customer Support & CX": "Deliver exceptional customer experiences with AI agents that handle support tickets and inquiries.",
    "Data": "Store and analyze your call data with ease using our data integrations.",
};

const integrationsData = [
];

const IntegrationsHero = () => (
    <div className="max-w-4xl mx-auto text-center pt-16 md:pt-24 px-4 pb-16">
        <div className="flex justify-center mb-6">
            <img src={logoImg} alt="Hexa AI" className="w-20 h-20 object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Integrations
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Build AI agents in seconds to automate workflows, save time, and grow your business.
        </p>
        <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search Here"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all text-gray-600"
            />
        </div>
    </div>
);

const IntegrationsGrid = () => {
    const [activeTab, setActiveTab] = useState("Automation");
    return (
        <div className="relative bg-sky-100 border-t border-sky-100/50 overflow-hidden">
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${automationBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1
                }}
            />
            <div className="absolute inset-0 z-0 bg-white/60 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none z-[1]" />
            <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-3 pt-4 pb-8 border-b border-gray-200/60">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`whitespace-nowrap px-8 py-3.5 rounded-2xl transition-all duration-200 text-[15px] font-semibold
                ${activeTab === category
                                    ? "text-cyan-600 bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] scale-105 z-10 relative"
                                    : "text-gray-500 bg-white/50 hover:bg-white hover:text-slate-700 hover:shadow-sm"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {activeTab !== "Automation" && (
                    <div className="mt-16 text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {activeTab === "All" ? "Featured Integrations" : activeTab}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                            {categoryDescriptions[activeTab]}
                        </p>
                    </div>
                )}

                <div className="relative mt-10">
                    <Automation activeTab={activeTab} />
                </div>

                {activeTab !== "Automation" && activeTab !== "All" && integrationsData.filter(item => activeTab === "All" || item.category === activeTab).length === 0 && (
                    <div className="mt-16 py-12 px-4 rounded-[2rem] bg-white/50 border border-dashed border-gray-200">
                        <p className="text-gray-500 text-center">No integrations found for this category yet. Coming soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const IntegrationsSection = () => {
    return (
        <>
            <IntegrationsHero />
            <IntegrationsGrid />
        </>
    );
};

export default IntegrationsSection;
