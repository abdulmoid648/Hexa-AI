import gradientGif from "../../assets/gradient.gif";

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

function PlayIcon({ className = "h-4 w-4" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .7.76 1.14 1.37.8l10.67-6.86a.95.95 0 0 0 0-1.6L9.37 4.34A.92.92 0 0 0 8 5.14Z" />
        </svg>
    );
}

const LiveDemo = () => {
    return (
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
    );
};

export default LiveDemo;
