import { useMemo } from "react";
import logoImg from "../../assets/logo.png";
import arrowsIcon from "../../assets/Arrows.png";
import vIcon from "../../assets/v.png";
import gptIcon from "../../assets/Gpt.png";
import iIcon from "../../assets/I.png";
import circleIcon from "../../assets/Circle.png";

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

const Integration = () => {
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

    return (
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
    );
};

export default Integration;
