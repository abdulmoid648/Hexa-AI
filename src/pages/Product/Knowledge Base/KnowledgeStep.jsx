import React from 'react';
import { Plus, FileText, Check, X, SendHorizontal } from 'lucide-react';
import Step1 from '../../../assets/Product/Knowledge Base/Step1.gif';
import Step2 from '../../../assets/Product/Knowledge Base/Step2.gif';
import Step3 from '../../../assets/Product/Knowledge Base/Step3.gif';
import FileIcon from '../../../assets/File forward dual tone icon.png';

const BulbIcon = ({ className = "h-6 w-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rays */}
        <path d="M12 1V3M4.22 4.22L5.64 5.64M1 12H3M4.22 19.78L5.64 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.78 4.22L18.36 5.64M23 12H21M19.78 19.78L18.36 18.36" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Bulb Base */}
        <path d="M9 20H15M10 22H14" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Bulb Body */}
        <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#FBBF24" />
        {/* Gear inside */}
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="white" />
        <path d="M12 9V10M12 14V15M9 12H10M14 12H15M9.88 9.88L10.59 10.59M13.41 13.41L14.12 14.12M9.88 14.12L10.59 13.41M13.41 10.59L14.12 9.88" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
);

const KnowledgeStep = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-16 tracking-tight">
                    Step by step to use a knowledge base?                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1: Create Knowledge Base */}
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FDF2F8] to-[#EEF2FF] opacity-90"></div>

                            {/* Knowledge Base Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[220px]">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="grid h-7 w-7 place-items-center">
                                            <BulbIcon className="h-6 w-6" />
                                        </div>
                                        <span className="text-[11px] font-bold text-gray-700 tracking-tight">Knowledge Base</span>
                                    </div>
                                    <div className="w-5 h-5 rounded bg-[#FFBE00] flex items-center justify-center text-white">
                                        <Plus className="w-3.5 h-3.5" strokeWidth={3} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 bg-gray-100/80 p-2 rounded-lg border border-gray-100">
                                        <FileText className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
                                        <span className="text-[10px] font-bold text-gray-700">Terms & Conditions</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded-lg">
                                        <FileText className="w-3.5 h-3.5 text-gray-300" strokeWidth={2} />
                                        <span className="text-[10px] font-medium text-gray-400">Privacy Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Create a knowledge base in Hexa Ai
                            </h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Navigate to the “Knowledge Base” tab and click the “Add” button. Choose your source: URL, File, or Text.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Add to Agent */}
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
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FEF2F2] to-[#FFF7ED] opacity-90"></div>

                            {/* Source Selection Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[190px]">
                                <div className="bg-gray-100/50 rounded-lg p-2.5 mb-4 flex items-center gap-2 border border-gray-100">
                                    <img src={FileIcon} alt="File" className="w-4 h-4" />
                                    <span className="text-[10px] font-bold text-gray-600">Customer Service</span>
                                </div>
                                <div className="space-y-2.5 ml-1">
                                    <div className="flex items-center gap-2">
                                        <img src={FileIcon} alt="File" className="w-3 h-3 opacity-50" />
                                        <span className="text-[9px] font-medium text-gray-400">Sales Policy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={FileIcon} alt="File" className="w-3 h-3" />
                                        <span className="text-[9px]  text-gray-700">Customer Service</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={FileIcon} alt="File" className="w-3 h-3 opacity-50" />
                                        <span className="text-[9px] font-medium text-gray-400">Leaves Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Add the knowledge base to your agent
                            </h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                In the agent editor, select your knowledge items for accurate responses.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Playground */}
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
                            <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] opacity-90"></div>

                            {/* Playground Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-4 w-full max-w-[260px]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-medium text-gray-400">Knowledge Base</span>
                                    <div className="w-5 h-5 rounded-md bg-[#FFBE00] flex items-center justify-center text-white">
                                        <X className="w-3.5 h-3.5" strokeWidth={3} />
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mb-4 font-medium opacity-80">Chat with Hexa Ai</p>
                                <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 mb-4">
                                    <p className="text-[9px] font-medium text-gray-400 leading-relaxed">
                                        To test the knowledge base, ask related questions in the test LLM area. The agent will automatically use the knowledge base content in its responses without needing prompt updates.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="bg-white border border-gray-100 rounded-lg p-2 flex items-center justify-between">
                                        <span className="text-[9px] text-gray-400">Hi, How to test...</span>
                                        <div className="bg-[#00A3FF] w-5 h-5 rounded flex items-center justify-center">
                                            <SendHorizontal className="w-3 h-3 text-white" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Test the knowledge base in the playground
                            </h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Ask a related question in the test LLM area to verify the knowledge base integration.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KnowledgeStep;
