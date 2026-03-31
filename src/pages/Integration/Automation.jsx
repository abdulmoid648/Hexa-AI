import React from "react";
import zapierLogo from "../../assets/Zappier.png";
import makeLogo from "../../assets/Make.png";
import n8nLogo from "../../assets/I.png";
import automationBg from "../../assets/Integration/Automation.gif";

const automationData = [
    { name: "Zapier", description: "Turn your voice AI agents into action-driven assistants that execute real-world tasks across thousands of apps without custom coding.", icon: zapierLogo },
    { name: "n8n", description: "Build real-time AI voice agents that execute workflows across your entire tech stack - no code required.", icon: n8nLogo, color: "bg-white" },
    { name: "Make", description: "Empower your AI voice agents to orchestrate complex workflows across any system through natural conversation.", icon: makeLogo, color: "bg-white" },
];

const Automation = ({ activeTab }) => {
    // Only show if the active tab is "Automation" or "All"
    if (activeTab !== "Automation" && activeTab !== "All") return null;

    return (
        <div className="relative mt-8 lg:mt-12">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left Side: Content from Landing Page Integration */}
                <div className="max-w-xl text-left">
                    <h2 className="text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-bold">
                        Seamlessly Integrate with your tech stack
                    </h2>
                    <p className="mt-6 text-base leading-7 text-slate-500 sm:text-lg lg:max-w-md">
                        With native and external connectivity to any CRM, telephony, automation platform, and database, building and
                        deploying phone agents has never been easier.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-800 px-8 py-4 text-base font-medium text-white transition hover:bg-slate-700 shadow-lg hover:shadow-xl active:scale-95"
                    >
                        See All Integrations
                    </button>
                </div>

                {/* Right Side: Visual Cards Grid */}
                <div className="relative">
                    <div className="grid grid-cols-1 gap-4 relative z-10 w-full">
                        {automationData.map((int) => (
                            <div
                                key={int.name}
                                className="group flex items-center bg-white/80 backdrop-blur-sm p-6 rounded-[1.25rem] border border-blue-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 text-left w-full hover:-translate-y-1"
                            >
                                <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-50 p-2 group-hover:scale-110 transition-transform duration-500">
                                    {int.icon ? (
                                        <img
                                            src={int.icon}
                                            alt={int.name}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="w-full h-full rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-400">
                                            {int.name[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold text-slate-800 mb-1">{int.name}</h3>
                                    <p className="text-slate-500 text-[11px] leading-relaxed max-w-[300px]">
                                        {int.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Automation;
