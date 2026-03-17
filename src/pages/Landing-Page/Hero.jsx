import { useState } from "react";
import { PhoneCall } from "lucide-react";
import mobileMockup from "../../assets/Mobile.png";
import qrCode from "../../assets/CallQR.png";
import Voicebars from "@/components/Voicabars";

const Hero = () => {
    const [showQr, setShowQr] = useState(false);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen lg:min-h-[125vh] text-center px-4 pt-10 md:pt-20 pb-16 bg-white overflow-hidden gap-7 mb-10 relative">
            {/* Heading */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl  text-gray-900 leading-[1.1] max-w-4xl mt-10 md:mt-20">
                Enterprise-Ready{" "}
                <span className="bg-[linear-gradient(90deg,#e7646c_0%,#8b6aa8_50%,#4f8edc_100%)] bg-clip-text text-transparent font-medium">
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
            <div className="h-20 md:h-20"></div>
        </section>
    );
};

export default Hero;
