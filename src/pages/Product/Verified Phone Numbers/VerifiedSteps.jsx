import React from 'react';
import Step1 from '../../../assets/Product/Navigate IVR/Step1.gif';
import Step2 from '../../../assets/Product/Navigate IVR/Step2.gif';
import Step3 from '../../../assets/Product/Navigate IVR/Step3.gif';
import CheckIcon from '../../../assets/Product/Verified Phone Numbers/Check.png';
import PhoneIcon from '../../../assets/Product/Verified Phone Numbers/Phone.png';
const VerifiedStep = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-16 tracking-tight">
                    How Verified Phone Numbers Work?
                </h2>

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
                            {/* White overlay  */}
                            <div className="absolute inset-0 bg-white/85"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-700 font-semibold text-sm">Phone Numbers</span>
                                    <div className="w-6 h-6 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mb-4 leading-relaxed font-medium">
                                    List of added numbers
                                </p>
                                <div className="space-y-2">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-[#F4F4F5] p-2.5 rounded-lg">
                                            <img src={PhoneIcon} alt="Phone" className="w-3.5 h-3.5 object-contain" />
                                            <span className="text-[11px] font-medium text-gray-500">+971 78643 3409</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Purchase a phone number</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Log in to the Hexa AI dashboard, navigate to the Advanced Add-Ons section, and click "Verified Phone Number" to start the application.
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
                            {/* White overlay for better text readability */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-4 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-500 font-semibold text-sm">Business Details</span>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <hr className="border-gray-100 mb-2" />
                                <div className="space-y-3 ">
                                    <div>
                                        <label className="text-[9px] text-gray-400 mb-1 block ">Business Name</label>
                                        <div className="bg-gray-200 border border-gray-100 rounded-lg p-0.5 ">
                                            <span className="text-[10px] text-gray-400 font-medium">Hexa Ai</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[9px] text-gray-400 mb-1 block">Business Number</label>
                                        <div className="bg-gray-200 border border-gray-100 rounded-lg p-0.5">
                                            <span className="text-[10px] text-gray-400 font-medium">+ 571 1289 2345</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[9px] text-gray-400 mb-1 block">Business Type</label>
                                        <div className="bg-gray-200 border border-gray-100 rounded-lg p-0.5">
                                            <span className="text-[10px] text-gray-400 font-medium">Technology Company</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Submit Your Application</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Fill in your company details in the business profile. Submit the application for verification—approval typically takes 1–2 weeks.
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
                            {/* White overlay for better text readability */}
                            <div className="absolute inset-0 bg-white/55"></div>

                            {/* Inner Mockup */}
                            <div className="relative z-10 bg-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-gray-700 font-semibold text-sm">Verified Phone Numbers</span>
                                    <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-[10px] text-gray-400 mb-4 leading-relaxed font-medium">
                                    Choose a verified phone number for calls
                                </p>

                                <div className="space-y-2">
                                    {[1, 2].map((_, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-gray-200 p-2.5 rounded-lg border border-gray-100">
                                            <img src={CheckIcon} alt="Verified" className="w-4 h-4 object-contain" />
                                            <span className="text-[11px] font-medium text-gray-500">+971 78643 3409</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">Start Using Verified Numbers</h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Once approved, begin making outbound calls with your verified number, saying goodbye to "Spam Likely" and hello to better answer rates.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VerifiedStep;
