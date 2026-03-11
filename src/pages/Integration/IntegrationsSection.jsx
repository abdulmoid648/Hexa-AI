import React, { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.png";
import zapierLogo from "../../assets/Zappier.png";
import makeLogo from "../../assets/Make.png";
import n8nLogo from "../../assets/I.png";

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
    { name: "Zapier", category: "All", description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", icon: zapierLogo },
    { name: "n8n", category: "Retail", description: "Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.", icon: n8nLogo },
    { name: "Make", category: "Scheduling", description: "Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.", icon: makeLogo },
    { name: "Zapier", category: "Telephony", description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", icon: zapierLogo },
    { name: "n8n", category: "CRM", description: "Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.", icon: n8nLogo },
    { name: "Make", category: "Customer Support & CX", description: "Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.", icon: makeLogo },
    { name: "Zapier", category: "Automation", description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", icon: zapierLogo },
    { name: "n8n", category: "Automation", description: "Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.", icon: n8nLogo },
    { name: "Make", category: "Automation", description: "Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.", icon: makeLogo },
    { name: "Zapier", category: "Data", description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", icon: zapierLogo },
    { name: "n8n", category: "Data", description: "Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.", icon: n8nLogo },
    { name: "Make", category: "Telephony", description: "Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.", icon: makeLogo },
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
        <div className="relative bg-[#f0f9ff]/50 border-t border-gray-100/50">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-3 pb-8 border-b border-gray-200/60">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium
                ${activeTab === category
                                    ? "border-cyan-400 text-cyan-600 bg-white shadow-sm"
                                    : "border-gray-200/50 text-gray-500 bg-white/50 hover:bg-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-16 text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {activeTab === "All" ? "Featured Integrations" : activeTab}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                        {categoryDescriptions[activeTab]}
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:-mr-20 md:-ml-3">
                    {integrationsData
                        .filter(item => activeTab === "All" || item.category === activeTab)
                        .map((int) => (
                            <div
                                key={int.name}
                                className="group flex flex-col items-start bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left w-full max-w-[650px] min-h-[100px]"
                            >
                                <h3 className="text-2xl md:text-xl font-bold text-slate-800 ml-25">{int.name}</h3>
                                <div className="flex items-start gap-5 w-full">
                                    <div className={`shrink-0 w-20 h-20 rounded-2xl ${int.color || ""} flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-white overflow-hidden -ml-4 -mt-6`}>
                                        {int.icon ? (
                                            <img src={int.icon} alt={int.name} className="w-full h-full object-cover p-1" />
                                        ) : (
                                            int.name[0]
                                        )}
                                    </div>
                                    <p className="text-slate-500 text-[12px] leading-snug">
                                        {int.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

                {integrationsData.filter(item => activeTab === "All" || item.category === activeTab).length === 0 && (
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
