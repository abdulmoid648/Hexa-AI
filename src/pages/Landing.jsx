import mobileMockup from '../assets/Mobile.png'
import VoiceBars from '../components/VoiceBars'
import { PhoneCall } from 'lucide-react'

const features = [
    "Auto-Sync Knowledge Base",
    "Powerful Call Transfer Feature",
    "Easy Appointment Booking",
    "Navigate IVR"
];

export default function Landing() {
    return (
        <>
            {/* Hero Section */}

            <section className="flex flex-col items-center justify-center min-h-[125vh] text-center px-4 pt-20 pb-16 bg-white overflow-hidden gap-7 mb-10">
                {/* Heading */}
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
                            className="md:col-span-2 rounded-[1rem] p-4 flex flex-col gap-10 overflow-hidden relative self-start"
                            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 60%, #8b5cf6 100%)' }}
                        >
                            <div className="relative z-10 ">
                                <div className='h-5'></div>
                                <h3 className="text-xl font-medium text-white mb-0 translate-x-5">Fully Complaint Platform</h3>
                                <p className="text-blue-50 text-base opacity-90 leading-relaxed translate-x-3">
                                    Hexa Ai is SOC 2 Type 1&2, HIPAA, and GDPR compliant, meeting all industry compliance standards.
                                </p>
                            </div>
                            <div className="flex -mt-4">
                                {/* HIPAA Logo */}
                                <div className="w-16 h-16  rounded-full bg-white flex items-center justify-center p-2 shadow-sm">
                                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600 fill-current">
                                        <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                                    </svg>
                                </div>
                                {/* SOC 2 Logo */}
                                <div className="w-16 h-16 rounded-full bg-blue-700 flex flex-col items-center justify-center p-2 border border-blue-400 shadow-sm text-center">

                                    <span className="text-[8px] font-bold text-white leading-tight">AICPA</span>
                                    <span className="text-[10px] font-black text-white leading-tight">SOC 2</span>
                                </div>
                                {/* GDPR Logo */}
                                <div className="w-16 h-16 rounded-full bg-indigo-900 flex items-center justify-center p-2 border border-indigo-400 shadow-sm relative">
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
                        <div className="rounded-[2rem] p-10 flex flex-col overflow-hidden relative min-h-[400px]"
                            style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-semibold text-white mb-3">Multilingual Support</h3>
                                <p className="text-slate-300 text-lg leading-relaxed max-w-[280px]">
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
                                <div className="absolute left-[28.2%] bottom-[28.2%] w-12 h-12 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden bg-white flex translate-x-[-50%] translate-y-[50%]">
                                    <div className="w-1/3 h-full bg-red-600"></div>
                                    <div className="w-2/3 h-full flex flex-col">
                                        <div className="h-1/3 bg-green-700"></div>
                                        <div className="h-1/3 bg-white"></div>
                                        <div className="h-1/3 bg-black"></div>
                                    </div>
                                </div>

                                {/* Germany Flag (Middle Circle - r=260, theta=65°) */}
                                <div className="absolute left-[27.5%] bottom-[59%] w-12 h-12 rounded-full border-2 border-white/50 shadow-2xl overflow-hidden flex flex-col translate-x-[-50%] translate-y-[50%]">
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
                        <div className="rounded-[2rem] p-10 flex flex-col overflow-hidden relative min-h-[440px]"
                            style={{ background: 'linear-gradient(135deg, #d946ef 0%, #a855f7 50%, #6366f1 100%)' }}>
                            <div className="relative z-10 mb-8">
                                <h3 className="text-3xl font-semibold text-white mb-3">Effortless Scalability</h3>
                                <p className="text-purple-50 text-lg opacity-95 leading-relaxed max-w-md">
                                    Effortlessly handle millions of calls with scalable concurrent calling.
                                </p>
                            </div>

                            <div className="flex justify-between items-center relative h-full mb-4">
                                {/* Connection Lines SVG - Originating from first phone card */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <line
                                            key={i}
                                            x1="32%"
                                            y1="9%"
                                            x2="88%"
                                            y2={`${9 + i * 20.2}%`}
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeDasharray="4 6"
                                            className="opacity-50"
                                        />
                                    ))}
                                </svg>

                                {/* Left Side: Call Status Cards (Frame Style) */}
                                <div className="flex flex-col gap-4 relative z-10 w-1/3">
                                    {[5, 30, 80, 130, 45].map((num, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/95 backdrop-blur-sm rounded-2xl py-3 px-5 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 transform transition-all duration-700 hover:scale-105"
                                            style={{
                                                animation: `slideInLeft 0.8s ease-out forwards ${i * 0.1}s`,
                                                opacity: 0
                                            }}
                                        >
                                            <div className="text-gray-900 bg-gray-50 p-2 rounded-lg shadow-inner">
                                                <PhoneCall size={18} />
                                            </div>
                                            <span className="text-xl font-bold text-gray-900 tracking-tight">{num}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Side: People Avatars (Frame Style) */}
                                <div className="flex flex-col gap-4 relative z-10">
                                    {[
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                                    ].map((url, i) => (
                                        <div
                                            key={i}
                                            className="w-14 h-14 rounded-full border-2 border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden bg-purple-200"
                                        >
                                            <img src={url} alt="Person" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 5: Reliable and Stable Platform */}
                        <div className="rounded-[1rem] p-10 flex flex-col bg-[#f8fafc] overflow-hidden relative min-h-[400px] border border-gray-100 shadow-sm">
                            <div className="relative z-10">
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
            </section>

        </>


    )
}
