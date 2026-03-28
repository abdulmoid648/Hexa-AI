import React from 'react';
import Step1 from '../../../assets/Product/Post Call Analysis/Step1.gif';
import Step2 from '../../../assets/Product/Post Call Analysis/Step2.gif';
import Step3 from '../../../assets/Product/Post Call Analysis/Step3.gif';
import { AlignLeft, Hash, Sliders } from 'lucide-react';
const PostStep = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-16 tracking-tight">
                    Step by step to add post call analysis             </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Step3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white/85"></div>

                            {/* Inner Mockup: Step 1 */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-gray-400 font-medium text-[13px]">Post Call Analysis</span>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mb-6 leading-relaxed">
                                    Define the information that you need to extract from the call.
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-2.5 rounded-lg border border-gray-100/50">
                                        <span className="text-[11px] font-bold text-gray-900">B</span>
                                        <span className="text-[10px] font-medium text-gray-500">Boolean</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-2.5 rounded-lg border border-gray-100/50">
                                        <AlignLeft className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-[10px] font-medium text-gray-500">Text</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-2.5 rounded-lg border border-gray-100/50">
                                        <Hash className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-[10px] font-medium text-gray-500">Number</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-2.5 rounded-lg border border-gray-100/50">
                                        <Sliders className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-[10px] font-medium text-gray-500">Selector</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Navigate to Post-Call Analysis</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Create an agent or select an agent from template. Go to the agent detail page and click on the "Post-Call Analysis" tab.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Step2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup: Step 2 */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-4 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <AlignLeft className="w-4 h-4 text-gray-400" />
                                        <span className="text-gray-700 font-semibold text-sm">Text</span>
                                    </div>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="text-[10px] text-gray-400 mb-1.5 block uppercase tracking-wider font-bold">Name</label>
                                    <div className="bg-[#FAF9FA]/50 border border-gray-100 rounded p-2.5">
                                        <span className="text-[11px] text-gray-600 font-medium">Email</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="text-[10px] text-gray-400 mb-1.5 block uppercase tracking-wider font-bold">Description</label>
                                    <div className="bg-[#FAF9FA]/50 border border-gray-100 rounded p-3 min-h-[60px]">
                                        <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                                            Extract the customer email
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 bg-gray-100/50 py-2 rounded text-[10px] font-bold text-gray-500 text-center border border-gray-200/50">Cancel</div>
                                    <div className="flex-1 bg-yellow-400 py-2 rounded text-[10px] font-bold text-white text-center">Save</div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Choose Analysis Category Type</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Select the analysis type Boolean for yes/no, Text, Number, or Selector for categorization, and configure it in the description.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-3xl border border-[#EDF5FD] bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ">
                        {/* Visual Top Half */}
                        <div
                            className="relative h-[350px] w-full flex items-center justify-center p-6 shrink-0 rounded-2xl overflow-hidden mb-8"
                            style={{
                                backgroundImage: `url(${Step1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup: Step 3 */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[9px] text-gray-400 font-medium">Use ↑ ↓ to navigate</span>
                                    </div>
                                    <div className="w-4 h-4 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-[10px] text-gray-700 font-bold mb-1">04/01/26, 15:59:36 Phone Call - Inbound</p>
                                    <div className="flex gap-0.5 text-[#4F7AFF]">
                                        {[...Array(8)].map((_, i) => (
                                            <span key={i} className="text-[10px]">◆</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <p className="text-[11px] font-bold text-gray-900 mb-3">Conversation Analysis</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-[10px] border-b border-gray-50 pb-2">
                                            <span className="text-gray-500">Call Successful</span>
                                            <span className="text-gray-400 font-medium">Complete</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] border-b border-gray-50 pb-2">
                                            <span className="text-gray-500">Call Status</span>
                                            <span className="text-gray-400 font-medium">Ended</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] border-b border-gray-50 pb-2">
                                            <span className="text-gray-500">User Sentiment</span>
                                            <span className="text-gray-400 font-medium">Positive</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px]">
                                            <span className="text-gray-500">Disconnection Reason</span>
                                            <span className="text-gray-400 font-medium">User hang up</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Consume the analysis data</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                After analysis, access results via Dashboard or use webhooks/APIs for integration into workflows or external systems.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PostStep;
