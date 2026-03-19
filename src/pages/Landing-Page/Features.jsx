import { useState, useEffect } from "react";
import featureImg from "../../assets/Feature.png";

const features = [
    {
        title: "Auto-Sync Knowledge Base",
        description:
            "Your AI agents stay up-to-date effortlessly by syncing directly with your company's knowledge base. No manual updates required.",
    },
    {
        title: "Powerful Call Transfer Feature",
        description:
            "Intelligently route calls to human agents or specific departments when complex issues arise, maintaining high service standards.",
    },
    {
        title: "Easy Appointment Booking",
        description: "Automate your scheduling process with AI agents that can check availability and book meetings directly into your CRM.",
    },
    {
        title: "Navigate IVR",
        description: "Enable your AI to handle outbound and inbound calls that require navigating complex phone trees and menu systems.",
    },
];

function FileShareIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <circle cx="18" cy="16" r="1.5" />
            <circle cx="12" cy="20" r="1.5" />
            <circle cx="12" cy="13" r="1.5" />
            <line x1="16.5" y1="16.5" x2="13.5" y2="19.5" />
            <line x1="16.5" y1="15.5" x2="13.5" y2="13.5" />
        </svg>
    );
}

function PlusIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 5v14" />
            <path d="M5 12h14" />
        </svg>
    );
}

function CloseIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m18 6-12 12" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

function KnowledgeBaseBadge({ selected, label, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${selected ? "border-slate-200 bg-slate-50 text-slate-700" : "border-slate-100 bg-white text-slate-400 hover:bg-slate-50"}`}
        >
            <FileShareIcon className={`h-4 w-4 ${selected ? "text-slate-500" : "text-slate-300"}`} />
            <span className="text-xs font-semibold sm:text-sm">{label}</span>
        </button>
    );
}

const Features = () => {
    const [selectedDoc, setSelectedDoc] = useState("terms");
    const [showValues, setShowValues] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);

    useEffect(() => {
        if (!selectedDoc) {
            setShowValues(false);
        }
    }, [selectedDoc]);

    const activeDocLabel = selectedDoc === "terms" ? "Terms & Conditions" : selectedDoc === "privacy" ? "Privacy Policy" : "";

    return (
        <section id="product" className="bg-[#f0f2f5] py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-left ml-5">
                    <h2 className="max-w-none whitespace-nowrap text-base tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
                        Powerful AI Voice Agent Creation Features
                    </h2>
                </div>

                <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
                    <div className="space-y-0 lg:mt-6 self-start">
                        {features.map((feature, index) => {
                            const isActive = activeFeature === index;

                            return (
                                <div key={feature.title}>
                                    <button
                                        type="button"
                                        onMouseEnter={() => setActiveFeature(index)}
                                        onMouseLeave={() => setActiveFeature(null)}
                                        onFocus={() => setActiveFeature(index)}
                                        onBlur={() => setActiveFeature(null)}
                                        className="block w-full text-left"
                                    >
                                        <div
                                            className={`overflow-hidden rounded-[1.75rem] px-4 py-6 transition-all duration-300 sm:px-6 md:max-w-[450px] ${isActive ? "bg-white shadow-[0_18px_50px_rgba(59,130,246,0.12)] ring-1 ring-blue-50" : "bg-transparent"}`}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <span
                                                    className={`text-2xl font-semibold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-700"}`}
                                                >
                                                    {feature.title}
                                                </span>
                                            </div>
                                            <div
                                                className={`overflow-hidden transition-all duration-700 ease-in-out ${isActive ? "mt-4 max-h-[150px] opacity-100" : "max-h-0 opacity-0"}`}
                                            >
                                                <p className="max-w-xl text-md leading-6 text-slate-500">{feature.description}</p>
                                            </div>
                                        </div>
                                    </button>
                                    {index < features.length - 1 && (
                                        <div className="h-px bg-sky-400 opacity-60 w-[70%] ml-4 mt-3 mb-3" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div
                        className="relative overflow-hidden rounded-[1rem] p-6 shadow-[0_18px_60px_rgba(99,102,241,0.16)] sm:p-8 lg:min-h-[440px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${featureImg})` }}
                    >
                        <div className="relative grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-start lg:gap-3">
                            {/* Left Card */}
                            <div
                                className={`w-[260px] h-fit mt-16 ml-4 rounded-xl border border-white/60 bg-white p-4 shadow-xl transition-all duration-500 origin-top-left hover:scale-[1] sm:p-5 ${showValues && selectedDoc ? "scale-[1]" : "scale-50 opacity-80"}`}
                            >
                                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                    <div className="grid h-7 w-7 place-items-center">
                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Knowledge Base</span>
                                    <button
                                        type="button"
                                        onClick={() => selectedDoc && setShowValues(true)}
                                        className="ml-auto grid h-6 w-6 place-items-center rounded-md bg-amber-400 text-slate-900 transition hover:bg-amber-300"
                                        aria-label="Open extracted values"
                                    >
                                        <PlusIcon className="h-3.5 w-3.5 text-white" />
                                    </button>
                                </div>

                                <div className="space-y-3  ">
                                    <KnowledgeBaseBadge
                                        label="Terms & Conditions"
                                        selected={selectedDoc === "terms"}
                                        onClick={() => setSelectedDoc((current) => (current === "terms" ? null : "terms"))}
                                    />
                                    <KnowledgeBaseBadge
                                        label="Privacy Policy"
                                        selected={selectedDoc === "privacy"}
                                        onClick={() => setSelectedDoc((current) => (current === "privacy" ? null : "privacy"))}
                                    />
                                </div>
                            </div>

                            <div
                                className={`h-[205px] lg:w-[240px] mt-12 lg:mt-24 lg:translate-x-5 rounded-lg border border-slate-100 bg-white p-4 shadow-xl transition-all duration-500 ease-out sm:p-5 origin-top-left ${showValues && selectedDoc ? "translate-y-0 translate-x-0 opacity-100 scale-100" : "translate-y-4 -translate-x-12 opacity-0 scale-50 pointer-events-none lg:translate-y-8"}`}
                            >
                                <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                    <div className="grid h-6 w-6 place-items-center rounded-sm border border-slate-100 bg-white shadow-sm transition">
                                        <FileShareIcon className="h-3.5 w-3.5 text-slate-500" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                        {activeDocLabel || "Extracted Values"}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setShowValues(false)}
                                        className="ml-auto grid h-6 w-6 place-items-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                                        aria-label="Close extracted values"
                                    >
                                        <CloseIcon className="h-3.5 w-3.5" />
                                    </button>
                                </div>

                                <div className="space-y-3 px-1">
                                    {[
                                        { label: "Sales Policy" },
                                        { label: "Customer Service" },
                                        { label: "Leaves Policy" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-100 bg-white shadow-sm ">
                                                <FileShareIcon className="h-3.5 w-3.5 text-slate-500" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-500">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
