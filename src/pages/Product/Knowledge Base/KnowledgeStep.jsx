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

const DocIcon = ({ active }) => (
    <div className="relative shrink-0 flex items-center justify-center w-[18px] h-[18px]">
        <img src={FileIcon} alt="File" className={`w-[16px] h-[16px] ${active ? '' : 'opacity-100'}`} />
    </div>
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
                            <div className="relative z-10 bg-[#FAFAFA] rounded-[10px] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden w-full max-w-[240px]">
                                <div className="flex items-center justify-between px-4 pt-[18px] pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="grid place-items-center">
                                            <BulbIcon className="h-5 w-5" />
                                        </div>
                                        <span className="text-[14px] font-[600] text-[#333333] tracking-tight hover:text-black">Knowledge Base</span>
                                    </div>
                                    <div className="w-[26px] h-[26px] rounded-[6px] bg-[#FFBE00] flex items-center justify-center -mr-1 shadow-sm">
                                        <Plus className="w-[18px] h-[18px] text-white" strokeWidth={3} />
                                    </div>
                                </div>
                                <div className="pb-[14px] pt-1 flex flex-col">
                                    <div className="flex items-center gap-2 bg-gray-100 border-y border-[#EAEAEA] px-5 py-2.5">
                                        <div className='flex items-center gap-2 w-full bg-gray-200 rounded-sm p-2 mr-2 '>

                                            <DocIcon active={true} badgeColor="bg-[#3B82F6]" />
                                            <span className="text-[12px] font-[500] text-[#333333]">Terms & Conditions</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-5 py-2.5">
                                        <DocIcon active={false} />
                                        <span className="text-[12px] font-[500] text-[#6b7280]">Privacy Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[15px] md:text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Create a knowledge base in Hexa Ai
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-[#6b7280] leading-relaxed">
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
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FEF2F2] to-[#FFF7ED] opacity-50"></div>

                            {/* Source Selection Mockup */}
                            <div className="relative z-10 bg-[#FAFAFA] rounded-[10px] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] border border-[#EDEDED] overflow-hidden w-full max-w-[240px] mx-auto">
                                <div className="bg-gray-100 px-5 py-[7px]  flex items-center  border-b border-[#D4D4D4]/40 ">
                                    <div className='flex items-center gap-2 w-full bg-gray-200 rounded-sm p-2 mr-2 '>
                                        <DocIcon active={true} badgeColor="bg-[#475569]" />
                                        <span className="text-[12px] font-[600] text-gray-600 tracking-tight">Customer Service</span>
                                    </div>
                                </div>


                                <div className="flex flex-col py-2">
                                    <div className="flex items-center gap-2 px-5 py-2">
                                        <DocIcon active={false} />
                                        <span className="text-[9px] font-[500] text-gray-600">Sales Policy</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-5 py-2">
                                        <DocIcon active={true} badgeColor="bg-[#3B82F6]" />
                                        <span className="text-[9px] font-[500] text-gray-600">Customer Service</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-5 py-2">
                                        <DocIcon active={false} />
                                        <span className="text-[9px] font-[500] text-gray-600">Leaves Policy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[15px] md:text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Add the knowledge base to your agent
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-[#6b7280] leading-relaxed">
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
                            <div className="relative z-10 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-3 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-medium text-gray-600">Knowledge Base</span>
                                    <div className="w-5 h-5 rounded-md bg-[#FFBE00] flex items-center justify-center text-white">
                                        <X className="w-3.5 h-3.5" strokeWidth={3} />
                                    </div>
                                </div>
                                <hr className="border-gray-100 mb-1" />
                                <p className="text-[9px] text-gray-400 mb-1 font-medium opacity-80">Chat with Hexa Ai</p>
                                <div className="bg-gray-50/50 p-3 rounded-xl border border-gray-100 mb-2">
                                    <p className="text-[8px] font-medium text-gray-400 leading-relaxed">
                                        To test the knowledge base, ask related questions in the test LLM area. The agent will automatically use the knowledge base content in its responses without needing prompt updates.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 w-full ">
                                    <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-1.5 flex-1 flex items-center">
                                        <span className="text-[9px] text-gray-600 font-medium">Hi, How to test...</span>
                                    </div>
                                    <div className="bg-[#00A3FF] w-[26px] h-[26px] rounded-full flex shrink-0 items-center justify-center shadow-md">
                                        <SendHorizontal className="w-[12px] h-[12px] text-white -rotate-45 -ml-[1px] mt-[1px]" strokeWidth={3.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[15px] md:text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Test the knowledge base in the playground
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-[#6b7280] leading-relaxed">
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
