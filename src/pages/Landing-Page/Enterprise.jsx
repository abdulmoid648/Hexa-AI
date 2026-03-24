import { useEffect, useRef, useState } from "react";
import uaeFlag from "../../assets/UAE.gif";
import germanyFlag from "../../assets/Germany.gif";
import brazilFlag from "../../assets/Brazil.gif";
import logoImg from "../../assets/logo.png";
import card1Img from "../../assets/Card1.png";
import card2Img from "../../assets/Card2.png";
import card3Img from "../../assets/Card3.png";
import card4Img from "../../assets/Card4.png";

const avatarUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
];

function FlagCircle({ country }) {
    let flagSrc = "";
    if (country === "uae") flagSrc = uaeFlag;
    else if (country === "germany") flagSrc = germanyFlag;
    else if (country === "brazil") flagSrc = brazilFlag;

    return (
        <div className="relative h-14 w-14 overflow-hidden rounded-full  shadow-2xl sm:h-16 sm:w-16 flex items-center justify-center">
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

const Enterprise = () => {
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);

    const [card4InView, setCard4InView] = useState(false);
    const [card5InView, setCard5InView] = useState(false);

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
            { threshold: 0.4 },
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

    return (
        <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="max-w-none whitespace-nowrap text-base tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    Build Enterprise-grade AI Voice Agents At scale
                </h2>

                <div className="mt-12 grid gap-y-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4">
                    {/* Card 1 */}
                    <div
                        className="overflow-hidden rounded-[1rem] p-6 shadow-[0_18px_60px_rgba(99,102,241,0.18)] sm:p-6 lg:col-span-2 lg:h-56 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card1Img})` }}
                    >
                        <h3 className="text-xl font-medium text-white sm:text-2xl">Fully Complaint Platform</h3>
                        <p className="mt-4 text-base whitespace-nowrap text-blue-50/90">
                            Hexa Ai is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                            <ComplianceBadge label="HIPAA" variant="hipaa" />
                            <ComplianceBadge label="SOC 2" variant="soc2" />
                            <ComplianceBadge label="GDPR" variant="gdpr" />
                        </div>
                    </div>

                    {/* Card 2 */}

                    <div
                        className="overflow-hidden rounded-[1rem] p-6 text-white shadow-[0_18px_60px_rgba(59,130,246,0.16)] sm:p-8 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card2Img})` }}
                    >
                        <h3 className="text-2xl font-semibold">Voice AI API</h3>
                        <p className="mt-3 max-w-sm text-base leading-7 text-blue-50/95">
                            Natural, smooth and empathetic AI conversations with only 500ms latency.
                        </p>
                        <div className="mt-10 flex h-20 items-center justify-center gap-[3px] px-2">
                            {[
                                28, 52, 70, 44, 80, 58, 90, 36, 74, 62,
                                86, 48, 76, 40, 66, 84, 54, 72, 42, 68, 56
                            ].map((h, i) => (
                                <div
                                    key={`api-${i}`}
                                    className="w-1.5 flex-shrink-0 rounded-full"
                                    style={{
                                        height: `${h}%`,
                                        backgroundColor: 'black',
                                        transformOrigin: 'center center',
                                        animation: `pumpBar 1.2s ease-in-out ${i * 0.05}s infinite`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Card 3 */}

                    <div
                        className="relative overflow-hidden rounded-[1rem] shadow-[0_18px_60px_rgba(30,58,138,0.3)] sm:min-h-[360px] sm:p-8 lg:-translate-y-8  bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card3Img})` }}
                    >
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
                                <circle cx="50" cy="420" r="310" fill="none" stroke="white" strokeWidth="1" />
                            </svg>
                        </div>

                        {/* Desktop flags — absolutely positioned, hidden on mobile */}
                        <div className="absolute bottom-12  left-8 sm:left-[10%] sm:bottom-[28%] hidden sm:block">
                            <FlagCircle country="uae" />
                        </div>
                        <div className="absolute right-10 top-20 sm:right-[31%] sm:top-[65%] hidden sm:block">
                            <FlagCircle country="germany" />
                        </div>
                        <div className="absolute bottom-20 right-6 sm:bottom-[3%] sm:right-[2%] hidden sm:block">
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
                    {/* card 4 */}
                    <div
                        ref={card4Ref}
                        className="relative overflow-hidden rounded-[1rem] shadow-[0_18px_60px_rgba(213,84,145,0.3)] sm:min-h-[420px]  sm:p-8 lg:-translate-y-8 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${card4Img})` }}
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
                                            className="flex items-center gap-3 ml-8  w-25 rounded-2xl border border-white/20 bg-white/95 px-3 py-2.5  shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10"
                                            style={{
                                                opacity: card4InView ? 1 : 0,
                                                animation: card4InView ? `slideInLeftLoop 4.5s ease-in-out infinite ${index * 0.1}s` : "none",
                                            }}
                                        >
                                            <div className="flex items-center justify-center p-1 opacity-80 h-2  ">
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
                                        { y1: 10, y2: -20 },
                                        { y1: 15, y2: 12 },
                                        { y1: 20, y2: 42 },
                                        { y1: 25, y2: 71 },
                                        { y1: 30, y2: 104 },
                                    ].map((line, index) => (
                                        <line
                                            key={index}
                                            x1="30"
                                            y1={line.y1}
                                            x2="650"
                                            y2={line.y2}
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeDasharray="4 6"
                                            style={{
                                                opacity: card4InView ? 0.6 : 0,
                                                animation: card4InView ? `fadeLineLoop 4.5s ease-in-out infinite ${index * 0.1}s` : "none",
                                            }}
                                        />
                                    ))}
                                </svg>
                            </div>

                            <div className="absolute right-5   bottom-35    flex flex-col justify-between items-end z-20 pointer-events-none hidden md:flex gap-1 ">
                                {avatarUrls.map((url, index) => (
                                    <div
                                        key={url}
                                        className="h-6 w-6 overflow-hidden  rounded-full border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.2)] sm:h-8 sm:w-8 pointer-events-none"
                                        style={{
                                            opacity: card4InView ? 1 : 0,
                                            animation: card4InView ? `slideInLeftLoop 4.5s ease-in-out infinite ${index * 0.1}s` : "none",
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
                                            animation: card4InView ? `fadeLineLoop 4.5s ease-in-out infinite ${index * 0.1}s` : "none",
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
                                            animation: card4InView ? `slideInLeftLoop 4.5s ease-in-out infinite ${index * 0.1}s` : "none",
                                        }}
                                    >
                                        <img src={url} alt="Person" className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div
                        ref={card5Ref}
                        className="overflow-hidden rounded-[1rem] border border-slate-100 bg-slate-50 p-6 shadow-sm sm:min-h-[320px] lg:h-108 lg:translate-y-5 sm:p-8 "
                    >
                        <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                            Reliable and Stable Platform <br /> You can trust
                        </h3>
                        <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-sm ">
                            With average 99.99% uptime and effortless fallback, Hexa AI ensures your phone callers are always
                            production-ready.
                        </p>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center gap-3">
                                <img src={logoImg} alt="Hexa AI" className="h-10 w-auto" />
                                <span className="text-2xl  text-slate-900">Hexa Ai</span>
                            </div>


                            <div
                                className="uptime-badge mx-auto flex h-[64px] items-center justify-start overflow-hidden rounded-2xl bg-gradient-to-r from-sky-100 to-fuchsia-100 px-[14px] shadow-sm "
                                style={{ animation: card5InView ? "expandBadge 6s ease-in-out infinite" : "none" }}
                            >
                                <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border-2 border-emerald-500 text-emerald-500">
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
        </section>
    );
};

export default Enterprise;
