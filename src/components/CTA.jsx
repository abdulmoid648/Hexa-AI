import React from 'react';

const CTA = () => {
    return (
        <section id="signup" className="bg-white px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Time to Hire Your{" "}
                    <span className="bg-[linear-gradient(90deg,#e7646c_0%,#8b6aa8_50%,#4f8edc_100%)] bg-clip-text font-bold text-transparent">
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
    );
};

export default CTA;
