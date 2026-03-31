import React from 'react';
import Setup1 from '../../assets/Setup1.gif';
import Setup2 from '../../assets/Setup2.gif';
import Setup3 from '../../assets/Setup3.gif';

const Setup = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-16 tracking-tight">
                    How to Setup Our Call Transfer Feature
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Setup3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay for better text readability */}
                            <div className="absolute inset-0 bg-white/85"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-700 font-semibold text-sm">Functions</span>
                                    <div className="w-6 h-6 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500 mb-4 leading-relaxed pr-2">
                                    Enable your agent with capabilities such as calendar bookings, call termination..
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 bg-[#F4F4F5] p-2.5 rounded-lg opacity-80">
                                        <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-[11px] font-medium text-gray-700">Phone call</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5] p-2.5 rounded-lg opacity-80">
                                        <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-[11px] font-medium text-gray-700">Calendar</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Add the function</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Start by selecting a template or using an existing AI agent, then go to the Functions section and add the "Call Transfer" function.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Setup2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay for better text readability */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-3  max-w-[280px]  scale-90 origin-center">
                                <div className="flex items-center justify-between  mb-5">
                                    <span className="text-gray-700 font-semibold text-sm">Transfer Call</span>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="text-[10px] text-gray-500 mb-1.5 block">Transfer to</label>
                                    <div className="bg-white border border-gray-200 rounded p-2">
                                        <span className="text-[11px] text-gray-600">+ 571 1289 2345</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="text-[10px] text-gray-500 mb-1.5 block">Type</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-[#F4F4F5] rounded p-2.5 flex items-start justify-between">
                                            <div>
                                                <span className="text-[10px] font-semibold text-gray-700 block mb-0.5">Cold Transfer</span>
                                                <span className="text-[8px] text-gray-500 leading-[1.1] block">AI transfers without speaking</span>
                                            </div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-white mt-0.5 shrink-0"></div>
                                        </div>
                                        <div className="bg-[#F4F4F5] rounded p-2.5 flex items-start justify-between border border-gray-200">
                                            <div>
                                                <span className="text-[10px] font-semibold text-gray-700 block mb-0.5">Warm Transfer</span>
                                                <span className="text-[8px] text-gray-500 leading-[1.1] block">AI brief's the next agent after transfer</span>
                                            </div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-0.5 shrink-0"></div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] text-gray-500 mb-1.5 block">Handoff Message</label>
                                    <div className="bg-white border border-gray-200 rounded p-2.5 min-h-[50px]">
                                        <p className="text-[9px] text-gray-500 leading-snug">
                                            Say hello to the agent and summarize the user problem to him.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Configure the function</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Decide between Cold Transfer for quick routing or Warm Transfer to share context, set the "Transfer To" number accordingly, and you're all set.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Setup1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay for better text readability */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-[#FCFBFC] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-6 w-full max-w-[280px] max-h-[250px]">
                                <div className="flex  items-center justify-between mb-6">
                                    <span className="text-gray-700   text-sm">Prompt</span>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] text-gray-500 mb-2 block">Write prompt here</label>
                                    <div className="bg-[#FAF9FA] border border-gray-100 rounded-lg p-3 min-h-[140px]">
                                        <p className="text-[10px] text-gray-500 mb-3 leading-relaxed">
                                            <span className="font-semibold text-gray-700 block mb-1">Step 03</span>
                                            Thank you for answering all the questions. I'd like to connect you with one of our specialized sales repetitive.
                                        </p>
                                        <p className="text-[10px] text-gray-800 font-medium leading-relaxed">
                                            "If the user said yes, call 'transfer_call' to transfer the call to a human."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Add the function into the agent</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Finally, add the function to your agent with a prompt like "If the user said yes, call 'transfer_call' to transfer the call to a human."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Setup;
