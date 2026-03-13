import React from 'react';

const Difference = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#FCF5F8]/70 to-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12 tracking-tight">
                    What is the Difference?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Cold Transfer Card */}
                    <div className="bg-[#FAF9FA] rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Cold Transfer</h3>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            Quick and simple—our AI transfers the call directly without interaction.
                        </p>
                        
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">No prior context is shared.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">Agents will need to search for context.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">Low-touch, speed-focused approach</span>
                            </li>
                        </ul>
                    </div>

                    {/* Warm Transfer Card */}
                    <div className="bg-[#FAF9FA] rounded-[2rem] p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Warm Transfer</h3>
                        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                            Want to keep things personal? The AI briefs the next agent before transferring the call.
                        </p>
                        
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">The next agent gets all the context they need.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">Includes agent introduction to help build trust with customers.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-gray-600">Builds trust and loyalty</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Difference;
