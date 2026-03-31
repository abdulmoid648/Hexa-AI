import React from 'react';
import KnowledgefeatureImg from '../../../assets/Product/Knowledge Base/Knowledgefeature.gif';

const Knowledgefeature = () => {
    return (
        <section
            className="py-24 relative overflow-hidden"
            style={{
                backgroundImage: `url(${KnowledgefeatureImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* White overlay for better text readability */}
            <div className="absolute inset-0 bg-white/79"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12 tracking-tight">
                    What are Hexa's knowledge base features?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Cold Transfer Card */}
                    <div className="bg-[#FAF9FA] rounded-[1rem] py-5 px-20 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className=" text-lg md:text-xl font-semibold text-gray-900 -ml-15 md:ml-0 mb-2 md:mb-4">Upload Webpages</h3>
                        <p className="text-sm md:text-base text-gray-500 mb-4  md:mb-8 -ml-13 md:ml-0 leading-relaxed">
                            Easily import content from your website to keep your AI agent
                            informed.
                        </p>

                        <ul className="space-y-3 md:space-y-5 -ml-13 md:ml-0">
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs md:text-base text-gray-600 whitespace-nowrap">Supports single pages or entire websites</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs md:text-base text-gray-600">Real-Time Updates</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className=" text-xs md:text-base text-gray-600">Streamlined and Efficient</span>
                            </li>
                        </ul>
                    </div>

                    {/* Warm Transfer Card */}
                    <div className="bg-[#FAF9FA] rounded-[1rem] py-5 px-20 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900  -ml-15 md:ml-0 mb-2 md:mb-4">Upload Documents</h3>
                        <p className="text-xs md:text-base text-gray-500 mb-4  md:mb-8 -ml-13 md:ml-0 leading-relaxed">
                            Empower your AI agent with key resources by uploading important
                            documents.                        </p>

                        <ul className="space-y-3 md:space-y-5 -ml-13 md:ml-0">
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs md:text-base text-gray-600">Wide Format Support</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs md:text-base text-gray-600">Ease Of Use Uploading</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#52C45A] flex items-center justify-center shrink-0">
                                    <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs md:text-base text-gray-600">Multiple Documents Allowed to Add At Once</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Knowledgefeature;
