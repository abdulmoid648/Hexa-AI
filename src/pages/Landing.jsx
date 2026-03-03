import { useState, useEffect, useRef } from 'react'
import mobileMockup from '../assets/Mobile.png'
import VoiceBars from '../components/VoiceBars'
import { PhoneCall } from 'lucide-react'
import vIcon from '../assets/v.png'
import gptIcon from '../assets/gpt.png'
import arrowsIcon from '../assets/arrows.png'
import iIcon from '../assets/i.png'
import circleIcon from '../assets/circle.png'

const features = [
    "Auto-Sync Knowledge Base",
    "Powerful Call Transfer Feature",
    "Easy Appointment Booking",
    "Navigate IVR"
];

const lines = [
    { x1: "30%", y1: "28%", x2: "72%", y2: "24%" },
    { x1: "30%", y1: "40%", x2: "72%", y2: "36%" },
    { x1: "30%", y1: "52%", x2: "72%", y2: "48%" },
    { x1: "30%", y1: "64%", x2: "72%", y2: "60%" },
    { x1: "30%", y1: "76%", x2: "72%", y2: "72%" }
]

export default function Landing() {
    const [card4InView, setCard4InView] = useState(false);
    const card4Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCard4InView(true);
                }
            },
            { threshold: 0.2 }
        );

        if (card4Ref.current) {
            observer.observe(card4Ref.current);
        }

        return () => {
            if (card4Ref.current) {
                observer.unobserve(card4Ref.current);
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section */}

            <section className="flex flex-col items-center justify-center min-h-[125vh] text-center px-4 pt-20 pb-16 bg-white overflow-hidden gap-7 mb-10">
                {/* Heading */}
                <div className='h-20'></div>
                <h1 className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight max-w-3xl ">
                    Enterprise-Ready{' '}
                    <span
                        className="font-bold"
                        style={{
                            background: 'linear-gradient(90deg, #ef4444 0%, #a855f7 50%, #3b82f6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Voice AI Agents
                    </span>
                    <br />
                    for Automated Phone Calls
                </h1>

                {/* Subheading */}
                <p className="text-base md:text-lg text-gray-500 max-w-md  leading-snug">
                    Unlock the power of AI-driven voice synthesis
                    <br />
                    and agent management.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-20">

                    {/* Primary */}
                    <a href="#call" className="flex items-center justify-center gap-2 bg-gray-800 text-white rounded-lg text-base h-12 w-44 font-semibold hover:bg-gray-700 transition">
                        <PhoneCall className="w-5 h-5" />
                        CALL GAIA
                    </a>

                    {/* Secondary */}
                    <a href="#signup" className="flex items-center justify-center h-12 w-44 rounded-lg text-base font-semibold border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition">
                        TRY FOR FREE
                    </a>

                </div>
                {/* Phone Image Container */}
                <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto pt-20 pb-10 translate-y-10 -mt-10 ">
                    <VoiceBars />

                    {/* Restored Cyan Top Glow */}
                    <div className="absolute top-20 left-[53%] -translate-x-1/2 w-80 h-80 bg-cyan-400 blur-[80px] opacity-30 rounded-full z-0" />

                    {/* Glow behind image (Restored original gradient) */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 rounded-full blur-3xl opacity-30"
                        style={{ background: 'radial-gradient(ellipse, #a855f7 0%, #3b82f6 60%, transparent 100%)' }}
                    />

                    <img
                        src={mobileMockup}
                        alt="Hexa AI Mobile Interface"
                        className="relative z-10 w-full max-w-[300px] h-auto "
                    />

                    {/* White Bottom Fade */}
                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/95 to-transparent z-20 pointer-events-none" />
                </div>
                <div className='h-40'></div>
            </section>

            {/* Features Section */}
            <section className="w-full h-full bg-[#f0f2f5]" style={{ padding: '80px 24px' }}>
                <div className="max-w-6xl mx-auto flex flex-col" style={{ gap: '90px' }}>

                    {/* Section Heading */}
                    <div className="flex justify-center">
                        <h2 className="text-5xl font-medium text-gray-900">
                            Powerful AI Voice Agent Creation Features
                        </h2>
                    </div>
                    {/* Two column grid - increased gap */}
                    <div className="grid md:grid-cols-2 gap-30 items-center ">

                        {/* Left: Feature list */}
                        <div className="flex flex-col">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <span className="text-base font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition-colors" style={{ padding: '20px 0' }}>
                                        {feature}
                                    </span>
                                    {index < features.length - 1 && (
                                        <div className="h-px w-full bg-cyan-400" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right: Gradient preview card */}
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4f9cf9 0%, #a78bfa 55%, #c084fc 100%)', transform: 'translateX(50px)' }}>

                            {/* Knowledge Base widget - centered */}
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col" style={{ width: '200px', padding: '12px', gap: '8px' }}>
                                <div className="flex items-center gap-2 border-b border-gray-100" style={{ paddingBottom: '8px' }}>
                                    <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center text-xs">💡</div>
                                    <span className="text-xs font-bold text-gray-600">Knowledge Base</span>
                                    <div className="ml-auto w-4 h-4 rounded bg-yellow-400 text-white flex items-center justify-center text-xs font-bold">+</div>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg border border-gray-100" style={{ padding: '6px 8px' }}>
                                    <div className="w-3 h-3 border border-blue-400 rounded-sm bg-blue-50" />
                                    <span className="text-gray-500 font-medium" style={{ fontSize: '10px' }}>Terms & Conditions</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 rounded-lg border border-gray-100" style={{ padding: '6px 8px' }}>
                                    <div className="w-3 h-3 border border-gray-300 rounded-sm" />
                                    <span className="text-gray-500 font-medium" style={{ fontSize: '10px' }}>Privacy Policy</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Hexa Section */}
            <section className="py-20 bg-white">
                <div className='h-40'></div>
                <div className="max-w-6xl  mx-auto px-4 translate-x-30 ">
                    <h2 className="text-4xl font-semibold text-left text-gray-900 mb-16 max-w-6xl">
                        Build Enterprise-grade AI Voice Agents At scale
                    </h2>
                    <div className='h-20'></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1: Fully Complaint Platform */}
                        <div
                            className="md:col-span-2 w-[850px]  rounded-[1rem] p-4 flex flex-col gap-10 overflow-hidden relative self-start -translate-x-20  "
                            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 60%, #8b5cf6 100%)' }}
                        >
                            <div className="relative z-10 ">

                                <h3 className="text-xl font-medium text-white mb-0 translate-x-5 translate-y-1">Fully Complaint Platform</h3>
                                <p className="text-blue-50 text-base opacity-90 leading-relaxed translate-x-">
                                    Hexa Ai is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.
                                </p>
                            </div>
                            <div className="flex -mt-4">
                                {/* HIPAA Logo */}
                                <div className="w-16 h-16  rounded-full bg-white flex items-center justify-center p-2 shadow-sm -translate-y-4 translate-x-2">
                                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600 fill-current">
                                        <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                                    </svg>
                                </div>
                                {/* SOC 2 Logo */}
                                <div className="w-16 h-16 rounded-full bg-blue-700 flex flex-col items-center justify-center p-2 border border-blue-400 shadow-sm text-center -translate-y-4 translate-x-2">

                                    <span className="text-[8px] font-bold text-white leading-tight">AICPA</span>
                                    <span className="text-[10px] font-black text-white leading-tight">SOC 2</span>
                                </div>
                                {/* GDPR Logo */}
                                <div className="w-16 h-16 rounded-full bg-indigo-900 flex items-center justify-center p-2 border border-indigo-400 shadow-sm relative -translate-y-4 translate-x-2">
                                    <span className="text-[10px] font-bold text-white">GDPR</span>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 border border-dotted border-white/30 rounded-full animate-spin-slow"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Card 2: Voice AI API */}
                        <div className="rounded-[1rem] p-10 flex flex-col overflow-hidden relative min-h-[320px]"
                            style={{ background: 'linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)' }}>
                            <div className="relative z-10">
                                <div className='h-5'></div>
                                <h3 className="text-2xl font-semibold text-white mb-2 translate-x-5">Voice AI API</h3>
                                <p className="text-blue-50 text-base opacity-95 leading-relaxed translate-x-5">
                                    Natural, smooth and empathetic AI conversations with only 500ms latency.
                                </p>
                            </div>

                            {/* High-Fidelity Audio Waveform Visual */}
                            <div className="mt-auto mb-4 flex items-center justify-center gap-1.5 h-20">
                                {[
                                    0.2, 0.4, 0.8, 1.0, 0.8, 0.4, 0.2, 0.4, 0.8, 1.0, 0.8, 0.4, 0.2, 0.4, 0.8, 1.0, 0.8, 0.4, 0.2, 0.4, 0.8, 1.0, 0.8, 0.4, 0.2
                                ].map((h, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 bg-black rounded-full soundwave-bar"
                                        style={{
                                            height: `${h * 100}%`,
                                            animationDelay: `${i * 0.1}s`,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Card 3: Multilingual Support */}
                        <div className="rounded-[1rem] p-10 flex flex-col overflow-hidden relative min-h-[400px] min-w-[400px] -translate-y-40 -translate-x-20"
                            style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                            <div className="relative z-10">
                                <div className='h-2'></div>
                                <h3 className="text-xl font-semibold text-white mb-3 translate-x-5">Multilingual Support</h3>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-[280px] translate-x-5">
                                    Support 18+ languages, can dial to any countries phone numbers.
                                </p>
                            </div>

                            {/* Concentric Circles from Bottom Left */}
                            <div className="absolute inset-0 pointer-events-none">
                                <svg viewBox="0 0 400 400" className="w-full h-full opacity-20">
                                    <circle cx="0" cy="400" r="160" fill="none" stroke="white" strokeWidth="1" />
                                    <circle cx="0" cy="400" r="260" fill="none" stroke="white" strokeWidth="1" />
                                    <circle cx="0" cy="400" r="360" fill="none" stroke="white" strokeWidth="1" />
                                </svg>
                            </div>

                            {/* Flag Placeholders - EXACTLY ON LINES */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* UAE Flag (Inner Circle - r=160, theta=45°) */}
                                <div className="absolute left-[28.2%] bottom-[28.2%] w-12 h-12 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden bg-white flex translate-x-[-90%] -translate-y-[40%]">
                                    <div className="w-1/3 h-full bg-red-600"></div>
                                    <div className="w-2/3 h-full flex flex-col">
                                        <div className="h-1/3 bg-green-700"></div>
                                        <div className="h-1/3 bg-white"></div>
                                        <div className="h-1/3 bg-black"></div>
                                    </div>
                                </div>

                                {/* Germany Flag (Middle Circle - r=260, theta=65°) */}
                                <div className="absolute left-[27.5%] bottom-[59%] w-12 h-12 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden flex flex-col translate-x-[100%] translate-y-[170%]">
                                    <div className="h-1/3 bg-black"></div>
                                    <div className="h-1/3 bg-red-600"></div>
                                    <div className="h-1/3 bg-yellow-400"></div>
                                </div>

                                {/* Brazil Flag (Outer Circle - r=360, theta=25°) */}
                                <div className="absolute left-[81.5%] bottom-[38%] w-12 h-12 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden bg-green-600 flex items-center justify-center translate-x-[-50%] translate-y-[50%]">
                                    <div className="w-full h-full relative flex items-center justify-center">
                                        <div className="w-8 h-8 bg-yellow-400 rotate-45 absolute"></div>
                                        <div className="w-5 h-5 bg-blue-700 rounded-full z-10 absolute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Effortless Scalability */}
                        <div
                            ref={card4Ref}
                            className="rounded-[1rem] p-10 flex flex-col overflow-hidden relative min-h-[500px] min-w-[400px] -translate-y-40 -translate-x-15"
                            style={{ background: 'linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #6366f1 100%)' }}>
                            <div className="relative z-10 mb-8 translate-x-5">
                                <div className='h-4 '></div>
                                <h3 className="text-xl font-semibold text-white mb-3">Effortless Scalability</h3>
                                <p className="text-purple-50 text-lg opacity-95 leading-relaxed max-w-md">
                                    Effortlessly handle millions of calls with scalable concurrent calling.
                                </p>
                            </div>

                            <div className="flex justify-between items-center relative h-full">


                                {/* Left Side: Call Status Cards (Frame Style) */}
                                <div className="flex flex-col gap-4 relative z-10 min-w-[70px]  translate-x-13 -translate-y-15 ">
                                    {[5, 30, 80, 130, 45].map((num, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/95 backdrop-blur-sm rounded-lg py-50 px-17 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 min-h-[30px]"
                                            style={{
                                                animation: card4InView ? `slideInLeft 0.8s ease-out forwards ${i * 0.1}s` : 'none',
                                                opacity: 0
                                            }}
                                        >
                                            <div className="text-black bg-gray-50 p-2 rounded-lg shadow-inner translate-x-3 ">
                                                <PhoneCall size={18} />
                                            </div>
                                            <span className="text-base  text-gray-900 tracking-tight ">{num}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Connection Lines SVG - Originating from first phone card */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                    {[
                                        { x1: "32%", y1: "9%", x2: "78%", y2: "3.5%" },
                                        { x1: "32%", y1: "10%", x2: "78%", y2: "12%" },
                                        { x1: "32%", y1: "12%", x2: "78%", y2: "20%" },
                                        { x1: "32%", y1: "13%", x2: "78%", y2: "29%" },
                                        { x1: "32%", y1: "15%", x2: "78%", y2: "36%" }
                                    ].map((line, i) => (
                                        <line
                                            key={i}
                                            {...line}
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeDasharray="2 3"
                                            className="opacity-50"
                                            style={{
                                                animation: card4InView ? `slideInLeft 0.8s ease-out forwards ${i * 0.12}s` : 'none',
                                                opacity: 0
                                            }}
                                        />
                                    ))}
                                </svg>

                                {/* Right Side: People Avatars (Frame Style) */}
                                <div className="flex flex-col gap-1 relative z-10 -translate-x-15 -translate-y-30">
                                    {[
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                                    ].map((url, i) => (
                                        <div
                                            key={i}
                                            className="w-7 h-7 rounded-full border-2 border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden bg-purple-200"
                                            style={{
                                                animation: card4InView ? `slideInLeft 0.8s ease-out forwards ${i * 0.15}s` : 'none',
                                                opacity: 0
                                            }}
                                        >
                                            <img src={url} alt="Person" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>



                            </div>
                        </div>

                        {/* Card 5: Reliable and Stable Platform */}
                        <div className="rounded-[2rem] p-10 flex flex-col bg-[#f8fafc] overflow-hidden relative min-h border border-gray-100 shadow-sm">
                            <div className="relative z-10 translate-y-10 translate-x-2">

                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                                    Reliable and Stable Platform <br /> You can trust
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed mb-10">
                                    With average 99.99% uptime and effortless fallback, Hexa AI ensures your phone callers are always production-ready.
                                </p>

                                <div className="flex items-center gap-2 mt-auto">
                                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
                                            <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-800 text-xl tracking-tight">Hexa Ai</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-10'></div>
            </section>

            {/* Integrations Section */}
            <section className="py-24 bg-white relative overflow-hidden ">
                {/* Soft background glow - Bottom Left */}
                <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#f8fafc] via-[#eff6ff] to-transparent rounded-full blur-[100px] opacity-70 -translate-x-1/2 translate-y-1/3 pointer-events-none" />
                {/* Soft background glow - Top Right */}
                <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#fdf4ff] via-[#f3e8ff] to-transparent rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6 translate-x-10">
                            <div className='h-10'></div>
                            <h2 className="text-4xl md:text-4xl text-gray-900 leading-[1.1] max-w-lg ">
                                Seamlessly Integrate with your tech stack
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                                With native and external connectivity to any CRM, telephony, automation platform, and database, building and deploying phone agents has never been easier.
                            </p>
                            <a href="#call" className="flex items-center justify-center gap-2 bg-gray-800 text-white rounded-lg text-base h-12 w-44  hover:bg-gray-700 transition">

                                See All Integrations
                            </a>
                        </div>

                        {/* Right Content - Visual Diagram */}
                        <div className="relative w-full max-w-xl mx-auto aspect-[5/4] mt-10 lg:mt-0 translate-y-50">
                            {/* SVG Connections with Rounded Corners */}
                            <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full pointer-events-none">
                                <path d="M 250 350 L 70 350 A 20 20 0 0 1 50 330 L 50 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                <path d="M 250 350 L 430 350 A 20 20 0 0 0 450 330 L 450 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                <path d="M 50 250 L 50 170 A 20 20 0 0 1 70 150 L 150 150" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                <path d="M 150 150 L 150 70 A 20 20 0 0 1 170 50 L 250 50" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                <path d="M 250 50 L 330 50 A 20 20 0 0 1 350 70 L 350 150" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                                <path d="M 350 150 L 430 150 A 20 20 0 0 1 450 170 L 450 250" stroke="#e2e8f0" strokeWidth="2.5" fill="none" />
                            </svg>

                            {/* Nodes Array */}
                            {[
                                { x: '10%', y: '62.5%', src: vIcon }, // Bottom Left
                                { x: '30%', y: '37.5%', src: gptIcon }, // Mid Left
                                { x: '50%', y: '12.5%', src: arrowsIcon }, // Top
                                { x: '70%', y: '37.5%', src: iIcon }, // Mid Right
                                { x: '90%', y: '62.5%', src: circleIcon }  // Bottom Right
                            ].map((node, i) => (
                                <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: node.x, top: node.y }}>
                                    {/* Outer dashed/cyan border container with soft background */}
                                    <div className="bg-[#f8fbff] border-[1.5px] border-[#38bdf8] rounded-[1.25rem] flex items-center justify-center p-[6px] sm:p-[8px] shadow-sm">
                                        {/* Inner actual box containing the image */}
                                        <div className="w-[55px] h-[55px] sm:w-[65px] sm:h-[65px] bg-white rounded-[0.85rem] shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] flex items-center justify-center overflow-hidden border border-gray-100">
                                            <img src={node.src} alt="Integration" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Central Hexa AI Node */}
                            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: '50%', top: '87.5%' }}>
                                <div className="bg-white border border-blue-200/80 rounded-full py-2.5 px-6 shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center gap-2">
                                    <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
                                            <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                                        </svg>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm tracking-tight text-[#2d68ff]">Hexa Ai</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='h-100'></div>
            </section>

            {/* Try Our Live Demo Section */}
            <section className="py-24 bg-[#f4f6fb] relative">
                <div className='h-10'></div>
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 inline-block relative">
                            Try Our Live Demo
                            {/* Text shadow/glow effect behind heading */}
                            <span className="absolute inset-0 bg-blue-400 blur-xl opacity-20 -z-10 translate-y-2"></span>
                        </h2>
                        <p className="text-lg text-gray-500">
                            Discover how our AI caller transforms customer conversations.
                        </p>
                    </div>

                    {/* Columns Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                        {/* Column 1: Select Department */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-gray-800">Select Department</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-semibold text-[#0ea5e9] shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-blue-50 hover:shadow-md transition-shadow">
                                    Receptionist
                                </button>
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
                                    Appointment
                                </button>
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
                                    Customer Service
                                </button>
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
                                    Survey
                                </button>
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
                                    Queries
                                </button>
                                <button className="bg-white rounded-xl py-4 px-2 text-sm font-medium text-gray-600 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow">
                                    Leads
                                </button>
                            </div>
                        </div>

                        {/* Column 2: Choose Voice */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-gray-800">Choose Voice</h3>
                            <div className="flex flex-col gap-4">
                                {/* Voice Option 1 (Active) */}
                                <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-blue-50 cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-[#0ea5e9] rounded-full flex items-center justify-center shrink-0">
                                        {/* Play icon */}
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current translate-x-[1px]">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 px-4 flex items-center justify-center hidden sm:flex">
                                        {/* Fake waveform */}
                                        <div className="flex items-center gap-[2px] h-6">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="w-[2px] bg-gray-800 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-sm font-semibold text-gray-500">Voice 01</span>
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Voice 1" className="w-8 h-8 rounded-full border border-gray-100" />
                                    </div>
                                </div>

                                {/* Voice Option 2 */}
                                <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current translate-x-[1px]">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 px-4 flex items-center justify-center hidden sm:flex">
                                        <div className="flex items-center gap-[2px] h-6 opacity-40">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="w-[2px] bg-gray-400 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-sm font-medium text-gray-500">Voice 02</span>
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Voice 2" className="w-8 h-8 rounded-full border border-gray-100" />
                                    </div>
                                </div>

                                {/* Voice Option 3 */}
                                <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current translate-x-[1px]">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 px-4 flex items-center justify-center hidden sm:flex">
                                        <div className="flex items-center gap-[2px] h-6 opacity-40">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="w-[2px] bg-gray-400 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-sm font-medium text-gray-500">Voice 03</span>
                                        <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop" alt="Voice 3" className="w-8 h-8 rounded-full border border-gray-100" />
                                    </div>
                                </div>

                                {/* Voice Option 4 */}
                                <div className="bg-white rounded-xl p-3 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current translate-x-[1px]">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 px-4 flex items-center justify-center hidden sm:flex">
                                        <div className="flex items-center gap-[2px] h-6 opacity-40">
                                            {[...Array(20)].map((_, i) => (
                                                <div key={i} className="w-[2px] bg-gray-400 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-sm font-medium text-gray-500">Voice 04</span>
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Voice 4" className="w-8 h-8 rounded-full border border-gray-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Enter Details Form */}
                        <div className="bg-[#333333] rounded-2xl p-8 flex flex-col gap-6 shadow-xl h-full">
                            <h3 className="text-xl font-bold text-white">Enter Details</h3>

                            <div className="flex flex-col gap-4 flex-1">
                                <input
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="bg-transparent border border-gray-500 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Wilson"
                                    className="bg-transparent border border-gray-500 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="wilson@company.com"
                                    className="bg-transparent border border-gray-500 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white transition-colors"
                                />
                            </div>

                            <button className="w-full bg-white text-gray-900 rounded-xl py-4 font-semibold hover:bg-gray-100 transition-colors mt-auto">
                                Get a Call
                            </button>
                        </div>

                    </div>
                </div>
                <div className='h-100'></div>
            </section>
        </>
    )
}
