import { useEffect, useMemo, useRef, useState } from "react";
import mobileMockup from "../assets/Mobile.png";
import qrCode from "../assets/CallQR.png";
import Voicebars from "@/components/Voicabars";
import { PhoneCall } from "lucide-react";
import gradientGif from "../assets/gradient.gif";
import uaeFlag from "../assets/UAE.gif";
import germanyFlag from "../assets/Germany.gif";
import brazilFlag from "../assets/Brazil.gif";
import logoImg from "../assets/logo.png";
import arrowsIcon from "../assets/Arrows.png";
import vIcon from "../assets/v.png";
import gptIcon from "../assets/Gpt.png";
import iIcon from "../assets/I.png";
import circleIcon from "../assets/Circle.png";

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

const departments = ["Receptionist", "Appointment", "Customer Service", "Survey", "Queries", "Lead"];

const voices = [
    {
        name: "Voice 01",
        accent: "bg-sky-500",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        active: true,
    },
    {
        name: "Voice 02",
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        active: false,
    },
    {
        name: "Voice 03",
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop",
        active: false,
    },
    {
        name: "Voice 04",
        accent: "bg-slate-500",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        active: false,
    },
];

const avatarUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
];

const heroWave = [48, 72, 58, 88, 64, 96, 54, 78, 50, 70, 56, 82, 46, 66, 52, 74, 60, 90];
const denseWave = [45, 60, 78, 56, 84, 72, 54, 68, 44, 76, 64, 58, 86, 62, 48, 73, 59, 80, 66, 52];
const passiveWave = [32, 46, 55, 38, 50, 42, 48, 36, 52, 40, 58, 44, 34, 49, 53, 41, 47, 37, 56, 43];
const qrPattern = [
    [1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 1, 0, 1],
];



function PhoneIcon({ className = "h-4 w-4" }) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.25a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92Z" />
        </svg>
    );
}

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

function CheckIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="m20 6-11 11-5-5" />
        </svg>
    );
}

function PlayIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .7.76 1.14 1.37.8l10.67-6.86a.95.95 0 0 0 0-1.6L9.37 4.34A.92.92 0 0 0 8 5.14Z" />
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

function BrandLockup({ compact = false }) {
    return (
        <div className="inline-flex items-center gap-3">
            <div
                className={
                    compact
                        ? "grid h-10 w-10 place-items-center rounded-2xl bg-slate-900"
                        : "grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 shadow-lg shadow-slate-200"
                }
            >
                <div className="relative h-6 w-6">
                    <div className="absolute inset-y-0 left-0 w-2 rounded-full bg-cyan-400" />
                    <div className="absolute inset-y-0 right-0 w-2 rounded-full bg-fuchsia-500" />
                    <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 rounded-full bg-blue-500" />
                </div>
            </div>
            <div className="flex flex-col leading-none">
                <span
                    className={
                        compact
                            ? "text-lg font-semibold tracking-tight text-slate-900"
                            : "text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
                    }
                >
                    Hexa AI
                </span>
            </div>
        </div>
    );
}

function QrGraphic() {
    return (
        <div className="grid grid-cols-7 gap-1 rounded-[1.25rem] bg-white p-4 shadow-[0_18px_48px_rgba(56,189,248,0.22)] ring-1 ring-cyan-100">
            {qrPattern.flatMap((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <span key={`${rowIndex}-${cellIndex}`} className={`h-3.5 w-3.5 rounded-[3px] ${cell ? "bg-slate-900" : "bg-slate-100"}`} />
                )),
            )}
        </div>
    );
}

function VoiceBarField() {
    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-x-0 top-[15%] flex justify-center gap-2 opacity-60 sm:gap-3">
                {heroWave.map((height, index) => (
                    <span
                        key={`top-${index}`}
                        className="voice-bar h-14 w-1.5 rounded-full bg-gradient-to-b from-cyan-300/20 via-cyan-300/80 to-cyan-300/10 sm:w-2"
                        style={{ height: `${height + 10}px`, animationDelay: `${index * 0.08}s` }}
                    />
                ))}
            </div>
            <div className="absolute inset-x-0 bottom-[18%] flex justify-center gap-2 opacity-60 sm:gap-3">
                {heroWave.map((height, index) => (
                    <span
                        key={`bottom-${index}`}
                        className="voice-bar h-14 w-1.5 rounded-full bg-gradient-to-t from-fuchsia-300/10 via-fuchsia-300/80 to-fuchsia-300/20 sm:w-2"
                        style={{ height: `${height}px`, animationDelay: `${index * 0.06 + 0.2}s` }}
                    />
                ))}
            </div>
        </div>
    );
}

function PhoneMockup() {
    return (
        <div className="relative mx-auto w-full max-w-[560px] px-4">
            <VoiceBarField />
            <div className="absolute left-1/2 top-14 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-3xl sm:h-56 sm:w-56" />
            <div className="absolute bottom-10 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.35),_rgba(59,130,246,0.25),_transparent_72%)] blur-2xl" />
            <div className="relative mx-auto w-full max-w-[320px] rounded-[2.4rem] bg-slate-950 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:max-w-[360px]">
                <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_26%,#f5f3ff_100%)]">
                    <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-slate-900/10" />
                    <div className="px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">Live Call</p>
                                <h3 className="mt-1 text-xl font-semibold text-slate-900">Gaia</h3>
                            </div>
                            <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                                Connected
                            </div>
                        </div>
                        <div className="rounded-[1.75rem] bg-slate-900 p-5 text-white shadow-[0_16px_40px_rgba(15,23,42,0.2)]">
                            <div className="mb-5 flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Enterprise-Ready</p>
                                    <p className="mt-2 text-lg font-semibold">Voice AI Agent</p>
                                </div>
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                                    <PhoneIcon className="h-5 w-5 text-cyan-300" />
                                </div>
                            </div>
                            <div className="flex-1 w-full flex items-center justify-center hidden sm:flex">
                                {/* Fake waveform */}
                                <div className="flex items-center justify-between h-10 w-full px-2">
                                    {[...Array(35)].map((_, i) => (
                                        <div
                                            key={`live-${i}`}
                                            className="voice-bar w-2 bg-slate-900 rounded-full shrink-0"
                                            style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 0.07}s` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid gap-3 text-sm text-slate-200">
                                <div className="rounded-2xl bg-white/8 px-4 py-3">
                                    Unlock the power of AI-driven voice synthesis and agent management.
                                </div>
                                <div className="rounded-2xl bg-white/8 px-4 py-3 text-slate-300">
                                    Automated phone calls with fast routing, call transfer, and scheduling.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/95 to-transparent" />
        </div>
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

function FlagCircle({ country }) {
    let flagSrc = "";
    if (country === "uae") flagSrc = uaeFlag;
    else if (country === "germany") flagSrc = germanyFlag;
    else if (country === "brazil") flagSrc = brazilFlag;

    return (
        <div className="relative h-14 w-14 overflow-hidden rounded-full border-2  shadow-2xl sm:h-16 sm:w-16 flex items-center justify-center bg-black/10">
            <img src={flagSrc} alt={`${country} flag`} className="w-full h-full object-cover" />
        </div>
    );
}

function ComplianceBadge({ label, variant }) {
    if (variant === "hipaa") {
        return (
            <div className="grid h-18 w-18 place-items-center rounded-full bg-white text-center shadow-lg shadow-slate-900/10 sm:h-20 sm:w-20">
                <div>
                    <div className="text-xs font-bold text-cyan-500">HIPAA</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">Ready</div>
                </div>
            </div>
        );
    }

    if (variant === "soc2") {
        return (
            <div className="grid h-18 w-18 place-items-center rounded-full border-4 border-white text-center shadow-lg shadow-slate-900/10 sm:h-20 sm:w-20">
                <div>
                    <div className="text-[10px] font-medium text-white">AICPA</div>
                    <div className="text-xs font-semibold text-white">SOC 2</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative grid h-18 w-18 place-items-center rounded-full border border-indigo-400 bg-indigo-950 text-center shadow-lg shadow-slate-900/10 sm:h-20 sm:w-20">
            {/* Stars ring */}
            <div className="absolute inset-1.5 flex items-center justify-center">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute h-full w-0.5"
                        style={{ transform: `rotate(${i * 30}deg)` }}
                    >
                        <div className="h-1.5 w-1.5 translate-y-[-1px]">
                            <svg viewBox="0 0 24 24" fill="white" className="h-full w-full opacity-60">
                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.165-7.335-3.857-7.335 3.857 1.401-8.165-5.934-5.787 8.2-1.192z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative z-10 text-sm font-bold text-white tracking-widest">{label}</div>
        </div>
    );
}

function IntegrationNode({ label, icon, accent, x, y }) {
    return (
        <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
            <div className="rounded-[1.05rem] border border-cyan-200 bg-white/80 p-2 shadow-[0_8px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-3">
                <div
                    className={`grid h-12 w-12 place-items-center rounded-[0.9rem] bg-gradient-to-br ${accent} text-sm font-semibold text-slate-900 shadow-inner sm:h-14 sm:w-14`}
                >
                    {icon ? <img src={icon} alt="" className="h-7 w-7 object-contain" /> : label}
                </div>
            </div>
        </div>
    );
}

const Landing = () => {
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);

    const [card4InView, setCard4InView] = useState(false);
    const [card5InView, setCard5InView] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState("terms");
    const [showValues, setShowValues] = useState(false);
    const [showQr, setShowQr] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);

    const integrationNodes = useMemo(
        () => [
            { icon: vIcon, x: "10%", y: "62.5%" },
            { icon: gptIcon, x: "30%", y: "37.5%" },
            { icon: arrowsIcon, x: "50%", y: "12.5%" },
            { icon: iIcon, x: "70%", y: "37.5%" },
            { icon: circleIcon, x: "90%", y: "62.5%" },
        ],
        [],
    );

    useEffect(() => {
        if (!selectedDoc) {
            setShowValues(false);
        }
    }, [selectedDoc]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === card4Ref.current) {
                            setCard4InView(true);
                        }

                        if (entry.target === card5Ref.current) {
                            setCard5InView(true);
                        }
                    }
                });
            },
            { threshold: 0.3 },
        );

        const card4 = card4Ref.current;
        const card5 = card5Ref.current;

        if (card4) {
            observer.observe(card4);
        }

        if (card5) {
            observer.observe(card5);
        }

        return () => {
            if (card4) {
                observer.unobserve(card4);
            }

            if (card5) {
                observer.unobserve(card5);
            }
        };
    }, []);

    const activeDocLabel = selectedDoc === "terms" ? "Terms & Conditions" : selectedDoc === "privacy" ? "Privacy Policy" : "";

    return (
        <>
            <style>{`
        .voice-bar {
          animation: pulseBar 1.8s ease-in-out infinite;
          transform-origin: center center;
        }

        .floating-orb {
          animation: floatOrb 8s ease-in-out infinite;
        }

        .floating-orb-delayed {
          animation: floatOrb 8s ease-in-out infinite 1.8s;
        }

        .slide-in {
          animation: slideInLeft 0.8s ease-out both;
        }

        .line-in {
          animation: fadeLine 0.9s ease-out both;
        }

        .uptime-badge {
          animation: expandBadge 6s ease-in-out infinite;
        }

        .uptime-text {
          animation: typeText 6s ease-in-out infinite;
        }

        @keyframes pulseBar {
          0%, 100% { transform: scaleY(0.15); opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeLine {
          from { opacity: 0; stroke-dashoffset: 28; }
          to { opacity: 0.6; stroke-dashoffset: 0; }
        }

        @keyframes expandBadge {
          0%, 10% { width: 64px; }
          25%, 80% { width: min(100%, 320px); }
          90%, 100% { width: 64px; }
        }

        @keyframes typeText {
          0%, 30% { max-width: 0; opacity: 0; margin-left: 0; }
          45%, 80% { max-width: 220px; opacity: 1; margin-left: 12px; }
          90%, 100% { max-width: 0; opacity: 0; margin-left: 0; }
        }
      `}</style>

            <div className="bg-white text-slate-900">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center min-h-screen lg:min-h-[125vh] text-center px-4 pt-10 md:pt-20 pb-16 bg-white overflow-hidden gap-7 mb-10 relative">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-4xl lg:text-6xl  text-gray-900 leading-[1.1] max-w-4xl mt-10 md:mt-20">
                        Enterprise-Ready{" "}
                        <span
                            className="font-semibold"
                            style={{
                                background: "linear-gradient(90deg, #ef4444 0%, #a855f7 50%, #3b82f6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Voice AI Agents
                        </span>
                        <br />
                        for Automated Phone Calls
                    </h1>

                    {/* Subheading */}
                    <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed">
                        Unlock the power of AI-driven voice synthesis
                        <span className="hidden md:inline">
                            <br />
                        </span>{" "}
                        and agent management.
                    </p>

                    {/* Buttons Container */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-12 z-30">
                        {/* Primary Button + QR Logic */}
                        <div className="relative" onMouseEnter={() => setShowQr(true)} onMouseLeave={() => setShowQr(false)}>
                            {/* QR Code Popup - Hidden on small mobile for better UX, or scaled */}
                            {showQr && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-48 h-auto bg-white rounded-[2rem] p-5 shadow-[0_20px_50px_rgba(59,130,246,0.2)] z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 hidden md:block">
                                    <div className="flex flex-col items-center">
                                        <div className="aspect-square w-32 h-32 bg-white rounded-2xl border-[4px] border-cyan-400 flex items-center justify-center mb-3 overflow-hidden">
                                            <img src={qrCode} alt="Scan to call" className="w-24 h-24 object-contain" />
                                        </div>
                                        <p className="text-gray-500 text-xs font-medium leading-tight text-center">
                                            Scan the QR code to <br /> call Hexa AI
                                        </p>
                                    </div>
                                </div>
                            )}

                            <a
                                href="#call"
                                className="flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg text-sm h-12 w-44 md:h-10 md:w-40 font-semibold hover:bg-gray-800 transition shadow-lg"
                            >
                                <PhoneCall className="w-4 h-4" />
                                CALL GAIA
                            </a>
                        </div>

                        {/* Secondary Button */}
                        <a
                            href="#signup"
                            className="flex items-center justify-center h-12 w-44 md:h-10 md:w-40 rounded-lg text-sm font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition"
                        >
                            TRY FOR FREE
                        </a>
                    </div>

                    {/* Phone Image Container */}
                    <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto mt-10 md:mt-0">
                        <Voicebars />

                        {/* Decorative Glows */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 h-64 md:h-80 bg-cyan-400 blur-[80px] opacity-20 md:opacity-30 rounded-full z-0" />

                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-48 rounded-full blur-3xl opacity-25 md:opacity-35"
                            style={{ background: "radial-gradient(ellipse, #a855f7 0%, #3b82f6 60%, transparent 100%)" }}
                        />

                        {/* Mockup Image */}
                        <img
                            src={mobileMockup}
                            alt="Hexa AI Mobile Interface"
                            className="relative z-10 w-full max-w-[260px] md:max-w-[320px] h-auto drop-shadow-2xl"
                        />

                        {/* Bottom Fade out effect */}
                        <div className="absolute bottom-[-2px] left-0 w-full h-32 md:h-60 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
                    </div>

                    {/* Spacer for next section */}
                    <div className="h-20 md:h-40"></div>
                </section>

                {/* Features Section */}
                <section className="bg-[#f0f2f5] py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-left ml-5">
                            <h2 className="max-w-none whitespace-nowrap text-base tracking-tight text-slate-900 sm:text-3xl lg:text-5xl">
                                Powerful AI Voice Agent Creation Features
                            </h2>
                        </div>

                        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
                            <div className="space-y-0">
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
                                                    className={`overflow-hidden rounded-[1.75rem] px-4 py-6  transition duration-300 sm:px-6 md:max-w-[430px] ${isActive ? "bg-white shadow-[0_18px_50px_rgba(59,130,246,0.12)] ring-1 ring-blue-50" : "bg-transparent"}`}
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <span
                                                            className={`text-lg font-semibold transition ${isActive ? "text-slate-900" : "text-slate-700"}`}
                                                        >
                                                            {feature.title}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={`overflow-hidden transition-all duration-500 ${isActive ? "mt-2 max-h-10 max-w-md opacity-100" : "max-h-0 opacity-0"}`}
                                                    >
                                                        <p className="max-w-xl text-sm leading-5 text-slate-500">{feature.description}</p>
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

                            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#4f9cf9_0%,#a78bfa_55%,#c084fc_100%)] p-6 shadow-[0_18px_60px_rgba(99,102,241,0.16)] sm:p-8 lg:min-h-[440px]">
                                <div className="floating-orb absolute -left-10 top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                                <div className="floating-orb-delayed absolute -right-4 bottom-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                                <div className="relative grid gap-5 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-start lg:gap-3">
                                    {/* Left Card */}
                                    <div
                                        className={`w-[260px] h-fit mt-6 rounded-[1.35rem] border border-white/60 bg-white p-4 shadow-xl transition-all duration-500 origin-top-left hover:scale-[1] sm:p-5 ${showValues && selectedDoc ? "scale-[1]" : "scale-50 opacity-80"}`}
                                    >
                                        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                            <div className="grid h-6 w-6 place-items-center rounded-md bg-amber-400 text-slate-900">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 18h6" />
                                                    <path d="M10 22h4" />
                                                    <path d="M12 2a7 7 0 0 1 7 7c0 2.6-1.4 4.9-3.5 6.2-.5.3-.5.8-.5 1.3V17H9v-.5c0-.5 0-1-.5-1.3A7 7 0 0 1 12 2Z" />
                                                </svg>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Knowledge Base</span>
                                            <button
                                                type="button"
                                                onClick={() => selectedDoc && setShowValues(true)}
                                                className="ml-auto grid h-6 w-6 place-items-center rounded-md bg-amber-400 text-slate-900 transition hover:bg-amber-300"
                                                aria-label="Open extracted values"
                                            >
                                                <PlusIcon className="h-3.5 w-3.5" />
                                            </button>
                                        </div>

                                        <div className="space-y-3">
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
                                        className={`h-[200px] mt-12 rounded-[1.35rem] border border-slate-100 bg-white p-4 shadow-xl transition-all duration-300 sm:p-5 ${showValues && selectedDoc ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none lg:translate-y-8"}`}
                                    >
                                        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                                            <div className="grid h-6 w-6 place-items-center rounded-md bg-amber-400 text-slate-900">
                                                <FileShareIcon className="h-3.5 w-3.5" />
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

                                        <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                                            <div className="text-sm font-semibold text-slate-700">{activeDocLabel || "Select a document"}</div>
                                            <div className="mt-1 text-xs font-medium text-slate-400">
                                                {selectedDoc ? "Added to KB • Ready" : "Waiting for a file selection"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enterprise Section */}
                <section className="bg-white py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="max-w-none whitespace-nowrap text-base tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                            Build Enterprise-grade AI Voice Agents At scale
                        </h2>

                        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
                            {/* Card 1 */}
                            <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#3b82f6_0%,#a855f7_60%,#8b5cf6_100%)] p-6 shadow-[0_18px_60px_rgba(99,102,241,0.18)] sm:p-8 lg:col-span-2">
                                <h3 className="text-xl font-medium text-white sm:text-2xl">Fully Complaint Platform</h3>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-blue-50/90 sm:text-lg">
                                    Hexa Ai is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                                    <ComplianceBadge label="HIPAA" variant="hipaa" />
                                    <ComplianceBadge label="SOC 2" variant="soc2" />
                                    <ComplianceBadge label="GDPR" variant="gdpr" />
                                </div>
                            </div>

                            {/* Card 2 */}

                            <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#60a5fa_0%,#3b82f6_100%)] p-6 text-white shadow-[0_18px_60px_rgba(59,130,246,0.16)] sm:p-8">
                                <h3 className="text-2xl font-semibold">Voice AI API</h3>
                                <p className="mt-3 max-w-sm text-base leading-7 text-blue-50/95">
                                    Natural, smooth and empathetic AI conversations with only 500ms latency.
                                </p>
                                <div className="mt-10 flex h-20 items-center justify-center gap-[3px] px-2">
                                    {[
                                        [28, 1.1, 0.00], [52, 0.9, 0.08], [70, 1.3, 0.16], [44, 1.0, 0.24], [80, 0.8, 0.32],
                                        [58, 1.2, 0.40], [90, 1.0, 0.48], [36, 1.4, 0.56], [74, 0.9, 0.64], [62, 1.1, 0.72],
                                        [86, 0.85, 0.80], [48, 1.3, 0.88], [76, 1.0, 0.96], [40, 1.2, 0.60], [66, 0.95, 0.44],
                                        [84, 1.15, 0.28], [54, 1.35, 0.12], [72, 0.88, 0.52], [42, 1.05, 0.36], [68, 1.25, 0.20], [56, 0.92, 0.68],
                                    ].map(([h, dur, delay], i) => (
                                        <div
                                            key={`api-${i}`}
                                            className="w-1.5 flex-shrink-0 rounded-full"
                                            style={{
                                                height: `${h}%`,
                                                backgroundColor: 'black',
                                                transformOrigin: 'center center',
                                                animation: `pulseBar ${dur}s ease-in-out ${delay}s infinite`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Card 3 */}

                            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#1e293b_0%,#0f172a_100%)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:min-h-[360px] sm:p-8">
                                <div className="relative z-10 max-w-sm">
                                    <h3 className="text-xl font-semibold text-white sm:text-2xl">Multilingual Support</h3>
                                    <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                                        Support 18+ languages, can dial to any countries phone numbers.
                                    </p>
                                </div>

                                <div className="pointer-events-none absolute inset-0 opacity-25">
                                    <svg viewBox="0 0 400 400" className="h-full w-full">
                                        <circle cx="70" cy="400" r="120" fill="none" stroke="white" strokeWidth="1" />
                                        <circle cx="60" cy="400" r="205" fill="none" stroke="white" strokeWidth="1" />
                                        <circle cx="50" cy="400" r="310" fill="none" stroke="white" strokeWidth="1" />
                                    </svg>
                                </div>

                                {/* Desktop flags — absolutely positioned, hidden on mobile */}
                                <div className="absolute bottom-10 left-8 sm:left-[10%] sm:bottom-[31%] hidden sm:block">
                                    <FlagCircle country="uae" />
                                </div>
                                <div className="absolute right-10 top-20 sm:right-[29%] sm:top-[65%] hidden sm:block">
                                    <FlagCircle country="germany" />
                                </div>
                                <div className="absolute bottom-20 right-6 sm:bottom-[3%] sm:right-[5%] hidden sm:block">
                                    <FlagCircle country="brazil" />
                                </div>

                                {/* Mobile flags — row with dotted connecting lines, visible only on mobile */}
                                <div className="relative mt-8 flex items-center justify-center sm:hidden">
                                    <FlagCircle country="uae" />
                                    <svg className="flex-1 h-6 pointer-events-none" viewBox="0 0 60 10" preserveAspectRatio="none">
                                        <line x1="0" y1="5" x2="60" y2="5" stroke="white" strokeWidth="2" strokeDasharray="4 5" opacity="0.6" />
                                    </svg>
                                    <FlagCircle country="germany" />
                                    <svg className="flex-1 h-6 pointer-events-none" viewBox="0 0 60 10" preserveAspectRatio="none">
                                        <line x1="0" y1="5" x2="60" y2="5" stroke="white" strokeWidth="2" strokeDasharray="4 5" opacity="0.6" />
                                    </svg>
                                    <FlagCircle country="brazil" />
                                </div>
                            </div>

                            <div
                                ref={card4Ref}
                                className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#d946ef_0%,#a855f7_50%,#6366f1_100%)] p-6 shadow-[0_18px_60px_rgba(168,85,247,0.2)] sm:min-h-[420px] sm:p-8"
                            >
                                <div className="relative z-10 max-w-md">
                                    <h3 className="text-xl font-semibold text-white sm:text-2xl">Effortless Scalability</h3>
                                    <p className="mt-4 text-base leading-7 text-purple-50/95 sm:text-lg">
                                        Effortlessly handle millions of calls with scalable concurrent calling.
                                    </p>
                                </div>

                                <div className="relative mt-10 grid grid-cols-[1fr_44px_36px] gap-0 items-start md:grid-cols-[minmax(0,1fr)_minmax(0,84px)] md:items-center md:gap-6">
                                    <div className="relative">
                                        <div className="grid gap-3 sm:max-w-[280px]">
                                            {[5, 30, 80, 130, 45].map((num, index) => (
                                                <div
                                                    key={num}
                                                    className="flex items-center gap-3 ml-4 w-25 rounded-2xl border border-white/20 bg-white/95 px-3 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10"
                                                    style={{
                                                        opacity: card4InView ? 1 : 0,
                                                        animation: card4InView ? `slideInLeft 0.8s ease-out both ${index * 0.1}s` : "none",
                                                    }}
                                                >
                                                    <div className="flex items-center justify-center p-1 opacity-80">
                                                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.25a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z"></path>
                                                            <path className="ring-phone" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                                                            <path className="ring-phone" d="M14.05 6A5 5 0 0 1 18 10"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-base font-medium text-slate-900">{num}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <svg
                                            className="pointer-events-none absolute left-32 top-0 hidden h-full w-[calc(100%-8rem)] md:block z-0"
                                            viewBox="0 0 400 240"
                                            preserveAspectRatio="none"
                                            style={{ overflow: "visible" }}
                                        >
                                            {[
                                                { y1: 10, y2: -10 },
                                                { y1: 15, y2: 15 },
                                                { y1: 20, y2: 43 },
                                                { y1: 25, y2: 66 },
                                                { y1: 30, y2: 95 },
                                            ].map((line, index) => (
                                                <line
                                                    key={index}
                                                    x1="-30"
                                                    y1={line.y1}
                                                    x2="570"
                                                    y2={line.y2}
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeDasharray="4 6"
                                                    style={{
                                                        opacity: card4InView ? 0.6 : 0,
                                                        animation: card4InView ? `fadeLine 0.9s ease-out both ${index * 0.12}s` : "none",
                                                    }}
                                                />
                                            ))}
                                        </svg>
                                    </div>

                                    <div className="absolute right-5   bottom-35  pr-4 py-8 flex flex-col justify-between items-end z-20 pointer-events-none hidden md:flex gap-1 ">
                                        {avatarUrls.map((url, index) => (
                                            <div
                                                key={url}
                                                className="h-6 w-6 overflow-hidden  rounded-full border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:h-8 sm:w-8 pointer-events-none"
                                                style={{
                                                    opacity: card4InView ? 1 : 0,
                                                    animation: card4InView ? `slideInLeft 0.8s ease-out both ${index * 0.15 + 0.5}s` : "none",
                                                }}
                                            >
                                                <img src={url} alt="Person" className="h-full w-full object-cover" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mobile dotted lines — only visible on mobile, connects cards to avatars */}
                                    <svg
                                        className="block md:hidden self-stretch w-full pointer-events-none z-0"
                                        viewBox="0 0 44 240"
                                        preserveAspectRatio="none"
                                        style={{ overflow: "visible" }}
                                    >
                                        {[20, 68, 116, 164, 212].map((y, index) => (
                                            <line
                                                key={index}
                                                x1="0"
                                                y1={y}
                                                x2="44"
                                                y2={y}
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeDasharray="4 6"
                                                style={{
                                                    opacity: card4InView ? 0.6 : 0,
                                                    animation: card4InView ? `fadeLine 0.9s ease-out both ${index * 0.12}s` : "none",
                                                }}
                                            />
                                        ))}
                                    </svg>

                                    {/* Mobile avatars — vertical column on right, connected via dots */}
                                    <div className="flex flex-col justify-start items-center gap-3 md:hidden pointer-events-none pt-[6px]">
                                        {avatarUrls.map((url, index) => (
                                            <div
                                                key={`mobile-${url}`}
                                                className="h-8 w-8 overflow-hidden rounded-full border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] pointer-events-none flex-shrink-0"
                                                style={{
                                                    opacity: card4InView ? 1 : 0,
                                                    animation: card4InView ? `slideInLeft 0.8s ease-out both ${index * 0.15 + 0.5}s` : "none",
                                                }}
                                            >
                                                <img src={url} alt="Person" className="h-full w-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                ref={card5Ref}
                                className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-sm sm:min-h-[320px] sm:p-8"
                            >
                                <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                                    Reliable and Stable Platform <br /> You can trust
                                </h3>
                                <p className="mt-4 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                                    With average 99.99% uptime and effortless fallback, Hexa AI ensures your phone callers are always
                                    production-ready.
                                </p>

                                <div className="mt-10 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src={logoImg} alt="Hexa AI" className="h-10 w-auto" />
                                        <span className="text-2xl font-bold text-slate-900">Hexa AI</span>
                                    </div>

                                    <div className="flex min-h-[110px] items-center justify-center rounded-[1.75rem] bg-white px-4">
                                        <div
                                            className="uptime-badge flex h-[64px] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-sky-100 to-fuchsia-100 px-4 shadow-sm"
                                            style={{ animation: card5InView ? "expandBadge 6s ease-in-out infinite" : "none" }}
                                        >
                                            <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-emerald-500 text-emerald-500">
                                                <CheckIcon className="h-5 w-5" />
                                            </div>
                                            <span
                                                className="uptime-text overflow-hidden whitespace-nowrap text-base font-medium text-slate-800"
                                                style={{ animation: card5InView ? "typeText 6s ease-in-out infinite" : "none" }}
                                            >
                                                All Systems Operational
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integrations Section */}
                <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
                    <div className="absolute bottom-0 left-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,_rgba(239,246,255,0.9),_transparent_68%)] blur-3xl" />
                    <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(250,245,255,0.9),_transparent_70%)] blur-3xl" />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
                            <div className="max-w-xl">
                                <h2 className="text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                    Seamlessly Integrate with your tech stack
                                </h2>
                                <p className="mt-6 text-base leading-7 text-slate-500 sm:text-lg">
                                    With native and external connectivity to any CRM, telephony, automation platform, and database, building and
                                    deploying phone agents has never been easier.
                                </p>
                                <a
                                    href="#call"
                                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-800 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-700"
                                >
                                    See All Integrations
                                </a>
                            </div>

                            <div className="relative mx-auto w-full max-w-[34rem] aspect-[5/4]">
                                {/* 
                                    To move the ENTIRE structure (nodes + lines) together:
                                    Adjust the 'translate-x' and 'translate-y' classes or add 'top-[...]' / 'left-[...]' to this div:
                                */}
                                <div className="relative h-full w-full md:translate-y-70">
                                    <svg viewBox="0 0 500 400" className="absolute inset-0 h-full w-full">
                                        <path d="M 250 350 L 70 350 A 20 20 0 0 1 50 330 L 50 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                        <path d="M 250 350 L 430 350 A 20 20 0 0 0 450 330 L 450 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                        <path d="M 50 250 L 50 170 A 20 20 0 0 1 70 150 L 150 150" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                        <path d="M 150 150 L 150 70 A 20 20 0 0 1 170 50 L 250 50" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                        <path d="M 250 50 L 330 50 A 20 20 0 0 1 350 70 L 350 150" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                        <path d="M 350 150 L 430 150 A 20 20 0 0 1 450 170 L 450 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                    </svg>

                                    {integrationNodes.map((node) => (
                                        <IntegrationNode key={`${node.label}-${node.x}-${node.y}`} {...node} />
                                    ))}

                                    <div className="absolute left-1/2 top-[87.5%] z-10 -translate-x-1/2 -translate-y-1/2">
                                        <div className="flex items-center gap-3 rounded-[1.15rem] border border-blue-200/80 bg-white px-5 py-3 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                                            <div className="flex items-center gap-3">
                                                <img src={logoImg} alt="Hexa AI" className="h-10 w-auto" />
                                                <span className="text-xl font-bold tracking-tight text-slate-900">Hexa AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:h-70" />
                </section>

                {/* Live Demo Section */}
                <section
                    id="call"
                    style={{
                        backgroundImage: `url(${gradientGif})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="relative py-16 sm:py-20 lg:py-24"
                >
                    {/* Overlay to reduce GIF opacity */}
                    <div className="absolute inset-0 bg-white/70"></div>
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="relative inline-block text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                                Try Our Live Demo
                                <span className="absolute inset-0 -z-10 translate-y-2 bg-blue-400/20 blur-xl" />
                            </h2>
                            <p className="mt-6 text-base leading-7 text-black-90 sm:text-lg">
                                Discover how our AI caller transforms customer conversations.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr_1.05fr_0.95fr] xl:items-start">
                            <div className="space-y-5 rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] ring-1 ring-slate-100 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-slate-800">Select Department</h3>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
                                    {departments.map((department) => (
                                        <a
                                            key={department}
                                            href="#call"
                                            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-white px-4 text-center text-sm font-medium text-slate-900 ring-1 ring-slate-100 transition hover:text-cyan-500 hover:ring-cyan-200"
                                        >
                                            {department}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-5 rounded-[2rem] bg-white/80 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] ring-1 ring-slate-100 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-slate-800">Choose Voice</h3>
                                <div className="space-y-4">
                                    {voices.map((voice) => (
                                        <div
                                            key={voice.name}
                                            className="flex flex-col gap-4 rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-100 transition hover:ring-cyan-200 sm:flex-row sm:items-center"
                                        >
                                            <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl text-white ${voice.accent}`}>
                                                <div className="grid h-8 w-8 place-items-center rounded-full border-2 border-white/90">
                                                    <PlayIcon className="h-4 w-4 translate-x-[1px]" />
                                                </div>
                                            </div>

                                            <div className="min-w-0 flex-1 flex items-center justify-center">
                                                <div className="flex h-8 w-full items-center gap-[3px]">
                                                    {[
                                                        [28, 1.10, 0.00], [52, 0.90, 0.08], [70, 1.30, 0.16], [44, 1.00, 0.24], [80, 0.80, 0.32],
                                                        [58, 1.20, 0.40], [90, 1.00, 0.48], [36, 1.40, 0.56], [74, 0.90, 0.64], [62, 1.10, 0.72],
                                                        [86, 0.85, 0.80], [48, 1.30, 0.88], [76, 1.00, 0.96], [40, 1.20, 0.60], [66, 0.95, 0.44],
                                                        [84, 1.15, 0.28], [54, 1.35, 0.12], [72, 0.88, 0.52], [42, 1.05, 0.36], [68, 1.25, 0.20],
                                                    ].map(([h, dur, delay], index) => (
                                                        <span
                                                            key={`${voice.name}-${index}`}
                                                            className={`min-w-0 flex-1 rounded-full ${voice.active ? "bg-slate-800" : "bg-slate-300"}`}
                                                            style={{
                                                                height: `${Math.round(h * 0.39)}px`,
                                                                transformOrigin: 'center center',
                                                                animation: voice.active
                                                                    ? `pulseBar ${dur}s ease-in-out ${delay}s infinite`
                                                                    : 'none',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between gap-3 sm:justify-end">
                                                <span
                                                    className={`text-sm ${voice.active ? "font-semibold text-slate-500" : "font-medium text-slate-500"}`}
                                                >
                                                    {voice.name}
                                                </span>
                                                <img
                                                    src={voice.avatar}
                                                    alt={voice.name}
                                                    className="h-8 w-8 rounded-full border border-slate-100 object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[2rem] bg-black p-6  sm:p-8">
                                <h3 className="text-2xl font-normal text-white">Enter Details</h3>

                                <div className="mt-6 space-y-4">
                                    <input
                                        type="text"
                                        placeholder="123-456-7890"
                                        className="h-14 w-full rounded-xl border border-slate-500 bg-transparent px-4 text-sm text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Wilson"
                                        className="h-14 w-full rounded-xl border border-slate-500 bg-transparent px-4 text-sm text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="wilson@company.com"
                                        className="h-14 w-full rounded-xl border border-slate-500 bg-transparent px-4 text-sm text-white placeholder:text-slate-500 focus:border-slate-300 focus:outline-none"
                                    />
                                </div>

                                <a
                                    href="#call"
                                    className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-xl bg-white text-base font-semibold text-black transition hover:bg-slate-100"
                                >
                                    Get a Call
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="signup" className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Time to Hire Your{" "}
                            <span className="bg-[linear-gradient(90deg,#ef4444_0%,#a855f7_50%,#3b82f6_100%)] bg-clip-text font-bold text-transparent">
                                AI Call Center
                            </span>
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                            Revolutionize your call operation with Hexa AI
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="#call"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-800 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-700 sm:w-auto"
                            >
                                Try For Free
                            </a>
                            <a
                                href="#signup"
                                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                            >
                                Contact Sales Team
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Landing;
