import mobileMockup from '../assets/Mobile.png'
import VoiceBars from '../components/VoiceBars'

const features = [
    "Auto-Sync Knowledge Base",
    "Powerful Call Transfer Feature",
    "Easy Appointment Booking",
    "Navigate IVR"
];

export default function Landing() {
    return (
        <>        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20 pb-16 bg-white overflow-hidden">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight max-w-3xl mb-6">
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
            <p className="text-base md:text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
                Unlock the power of AI-driven voice synthesis
                <br />
                and agent management.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    CALL GAIA
                </button>

                <button className="border border-gray-300 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
                    TRY FOR FREE
                </button>
            </div>

            {/* Phone Image Container */}
            <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto pt-20 pb-0">
                {/* Voice Bars Animation */}
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
                    className="relative z-10 w-full max-w-[300px] h-auto drop-shadow-2xl"
                />

                {/* White Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/90 to-transparent z-20 pointer-events-none" />
            </div>
        </section>

            {/* Features Section */}
            <section className="w-full bg-[#f0f2f5] py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-16 mb-16 pl-4">
                        Powerful AI Voice Agent Creation Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Left: Features List */}
                        <div className="flex flex-col pl-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-base md:text-lg font-semibold text-gray-700 py-5 cursor-pointer hover:text-gray-900 transition-colors">
                                        {feature}
                                    </span>
                                    {index < features.length - 1 && (
                                        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 to-cyan-200 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right: Preview Card */}
                        <div className="relative">
                            <div className="w-full aspect-[1.5/1] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#4facfe] via-[#a78bfa] to-[#c084fc] flex items-center justify-center">

                                {/* Knowledge Base UI Widget - centered */}
                                <div className="w-52 bg-white rounded-xl shadow-xl p-3 border border-gray-100 flex flex-col gap-2">
                                    <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                        <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center text-[9px]">💡</div>
                                        <span className="text-[11px] font-bold text-gray-600">Knowledge Base</span>
                                        <div className="ml-auto w-4 h-4 rounded bg-yellow-400 text-white flex items-center justify-center text-[8px] font-bold">+</div>
                                    </div>

                                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-3 h-3 border border-blue-400 rounded-sm bg-blue-50" />
                                        <span className="text-[9px] text-gray-500 font-medium">Terms & Conditions</span>
                                    </div>

                                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-3 h-3 border border-gray-300 rounded-sm" />
                                        <span className="text-[9px] text-gray-500 font-medium">Privacy Policy</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}
