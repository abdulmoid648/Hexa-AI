import React from 'react';
import Step1 from '../../../assets/Product/Post Call Analysis/Step1.gif';
import Step2 from '../../../assets/Product/Post Call Analysis/Step2.gif';
import Step3 from '../../../assets/Product/Post Call Analysis/Step3.gif';
import Texticon from '../../../assets/Product/Post Call Analysis/Texticon.png';
import SelectorIcon from '../../../assets/Product/Post Call Analysis/SelectorIcon.png';
import { Hash } from 'lucide-react';

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
                                backgroundImage: `url(${Step1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white/85"></div>

                            {/* Inner Mockup: Step 1 */}
                            <div className="relative z-10 bg-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
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
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-1.5 rounded-base border border-gray-100/50">
                                        <span className="text-[17px] font-bold text-gray-900">B</span>
                                        <span className="text-[10px] font-medium text-gray-500">Boolean</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-1.5 rounded-base border border-gray-100/50">
                                        <img src={Texticon} alt="Text" className="w-3.5 h-3.5 object-contain" />
                                        <span className="text-[10px] font-medium text-gray-500">Text</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-1.5 rounded-base border border-gray-100/50">
                                        <Hash className="w-3.5 h-3.5 text-gray-400" />
                                        <span className="text-[10px] font-medium text-gray-500">Number</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-[#F4F4F5]/50 p-1.5 rounded-base border border-gray-100/50">
                                        <img src={SelectorIcon} alt="Selector" className="w-3.5 h-3.5 object-contain" />
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
                            <div className="relative z-10 bg-gray-100 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50  px-4 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mt-3 mb-3">
                                    <div className="flex items-center gap-2">
                                        <img src={Texticon} alt="Text" className="w-4 h-4 object-contain" />
                                        <span className="text-gray-400 font-semibold text-sm">Text</span>
                                    </div>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="text-[10px] text-gray-400 mb-1.5 block uppercase tracking-wider ">Name</label>
                                    <div className="bg-[#FAF9FA]/50 border border-gray-100 rounded p-2.5">
                                        <span className="text-[11px] text-gray-400 -ml-1">Email</span>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="text-[9px] text-gray-400 mb-1.5 block uppercase tracking-wider  ">Description</label>
                                    <div className="bg-[#FAF9FA]/50 border border-gray-100 rounded-lg p-3 min-h-[80px] relative">
                                        <p className="text-[9px] leading-relaxed -ml-1 text-gray-400 font-normal">
                                            Extract the customer email
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 justify-start mb-2">
                                    <div className="px-3 bg-gray-400 py-1.5 rounded-2xl text-[8px] font-bold text-white text-center border border-gray-200/50 cursor-pointer">Cancel</div>
                                    <div className="px-4 bg-yellow-400 py-1.5 rounded-2xl text-[8px] font-bold text-white text-center cursor-pointer">Save</div>
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
                                backgroundImage: `url(${Step3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* White overlay */}
                            <div className="absolute inset-0 bg-white/75"></div>

                            {/* Inner Mockup: Step 3 */}
                            <div className="relative z-10 bg-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-1">
                                        <span className="text-[9px] text-gray-600 font-semibold flex items-center gap-1.5 translate-y-[0.5px]">
                                            Use
                                            <div className="flex items-center gap-0.5">
                                                {/* Custom Arrow Up */}
                                                <div className='bg-gray-200 rounded- w-3 flex items-center justify-center'>
                                                    <svg className="w-2 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 8l5-6 5 6" />
                                                        <path d="M12 2v20" />
                                                    </svg>
                                                </div>
                                                {/* Custom Arrow Down */}
                                                <div className='bg-gray-200 rounded- w-3 flex items-center justify-center'>
                                                    <svg className="w-2 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M7 16l5 6 5-6" />
                                                        <path d="M12 22V2" />
                                                    </svg>
                                                </div>
                                            </div>
                                            to navigate
                                        </span>
                                    </div>
                                    <div className="w-4 h-4 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mb-4 ">
                                    <p className="text-[10px] text-gray-700 font-bold mb-1">04/01/26, 15:59:36 Phone Call - Inbound</p>
                                    <div className="flex h-5 items-center gap-[2px] sm:gap-[3px] overflow-hidden bg-white w-30 rounded-xl">
                                        {[
                                            28, 52, 70, 44, 80,
                                            58, 90, 36, 74, 62,
                                            86, 48, 76, 40, 66,
                                            84, 54, 72, 42, 68
                                        ].map((h, i) => (
                                            <span
                                                key={i}
                                                className="w-[2px] flex-shrink-0 rounded-full bg-black translate-x-3"
                                                style={{
                                                    height: `${Math.round(h * 0.2)}px`,
                                                    transformOrigin: 'center',
                                                    animation: `pumpBar 1.2s ease-in-out ${i * 0.05}s infinite`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <p className="text-[11px] font-bold text-gray-900 mb-3">Conversation Analysis</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-gray-200 rounded-lg text-[10px] border-b border-gray-200  pb-2">
                                            <span className="text-gray-500 ml-2 translate-y-1">Call Successful</span>
                                            <span className="text-gray-400 font-medium mr-2 translate-y-1">Complete</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-gray-200 rounded-lg text-[10px] border-b border-gray-200  pb-2">
                                            <span className="text-gray-500 ml-2 translate-y-1">Call Status</span>
                                            <span className="text-gray-400 font-medium mr-2 translate-y-1">Ended</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-gray-200 rounded-lg text-[10px] border-b border-gray-200  pb-2">
                                            <span className="text-gray-500 ml-2 translate-y-1">User Sentiment</span>
                                            <span className="text-gray-400 font-medium mr-2 translate-y-1">Positive</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-gray-200 rounded-lg text-[10px] border-b border-gray-200  pb-2">
                                            <span className="text-gray-500 ml-2 translate-y-1">Disconnection Reason</span>
                                            <span className="text-gray-400 font-medium mr-2 translate-y-1">User hang up</span>
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
