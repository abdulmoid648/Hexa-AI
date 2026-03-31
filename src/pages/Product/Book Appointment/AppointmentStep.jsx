import React from 'react';
import Step1 from '../../../assets/Product/Book Appointment/Step1.gif';
import Step2 from '../../../assets/Product/Book Appointment/Step2.gif';
import Step3 from '../../../assets/Product/Book Appointment/Step3.gif';

const AppointmentStep = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-16 tracking-tight">
                    Step by Step to use Appointment Booking
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Step 1: Functions */}
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
                            <div className="absolute inset-0 bg-white/90"></div>
                            {/* Functions Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-5 w-full max-w-[300px] md:max-w-[280px]">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                    <span className="text-gray-500 text-xs md:text-sm font-medium">Functions</span>
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm">
                                        <svg className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-[8px] md:text-[10px] text-gray-400 mb-6 leading-relaxed pr-6">
                                    Enable your agent with capabilities such as calendar
                                    bookings, call termination...
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 bg-[#F4F4F5] p-3 rounded-xl border border-gray-100/50">
                                        <div className="relative w-4 h-4 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                            </svg>
                                            <div className="absolute top-0 right-0 transform  translate-x-0,5 md:-translate-x-1,5 translate-y-1.1   -rotate-45">
                                                <svg className="w-2 h-2 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-[9px] md:text-[11px] text-[#6B7280] font-medium tracking-tight translate-x-1">Phone call</span>
                                    </div>
                                    {/* Calendar item */}
                                    <div className="flex items-center gap-3 bg-[#F4F4F5] p-3 rounded-xl border border-gray-100/50">
                                        <div className="relative w-4 h-4 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <div className="absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="w-1.5 h-1.5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-[9px] md:text-[11px] text-gray-400 font-medium tracking-tight">Calendar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[15px] md:text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Create Appointment Booking Functions
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-[#6b7280] leading-relaxed">
                                Start by creating an AI agent tailored for appointment booking and add the "Check Availability" and "Book Appointments" functions.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Prompt */}
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
                            <div className="absolute inset-0 bg-white/70"></div>
                            {/* Prompt Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-6 w-full max-w-[280px] h-[240px]">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-400 text-xs md:text-sm font-medium">Prompt</span>
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm">
                                        <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[8px] md:text-[10px] text-gray-400 mb-1 font-medium opacity-80">Write prompt here</p>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 min-h-[130px] min-h-[140px]  ">
                                    <p className="text-[7px] md:text-[9px] text-gray-600 mb-2 font-semibold opacity-50 uppercase tracking-widest text-left">Step 03</p>
                                    <p className="text-[7px] md:text-[9px] text-gray-500 leading-relaxed max-w-[190px] mb-2 text-left mx-auto">
                                        Thank you for answering all the questions. I'd like to connect you with one of our specialized sales repetitive.
                                    </p>
                                    <p className="text-[7px] md:text-[9px] text-gray-400 font-medium leading-relaxed text-left">
                                        "If the user said yes, call 'transfer_call' to transfer the call to a human."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[15px] md:text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Set Up & Add Function Logic to Prompts
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-[#6b7280] leading-relaxed">
                                Define the scenarios where the appointment booking functions will be triggered, such as providing available slots to the customer.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Bookings */}
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
                            <div className="absolute inset-0 bg-white/60"></div>
                            {/* Bookings Mockup */}
                            <div className="relative z-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 p-2 w-full max-w-[280px]">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-400 text-xs md:text-sm font-semibold tracking-tight translate-x-2">Bookings</span>
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm -translate-x-1">
                                        <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[8px] md:text-[10px] text-gray-400 mb-4 leading-relaxed pr-6">
                                    See upcoming and past events booked through your event type links.
                                </p>
                                <div className="space-y-2.5">
                                    {['Upcoming', 'Unconfirmed', 'Past', 'Cancelled'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-[#F4F4F5] p-3 rounded-xl border border-gray-100/50 ">
                                            <div className="relative w-4 h-4 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div className="absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 bg-[#4ADE80] rounded-full border-2 border-white flex items-center justify-center">
                                                    <svg className="w-1.5 h-1.5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-[11px] text-[#6B7280] font-medium tracking-tight translate-x-1">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Text Bottom Half */}
                        <div className="px-2 pb-4 flex flex-col">
                            <h3 className="text-[22px] font-semibold text-[#333333] mb-3 tracking-tight">
                                Monitor Appointments and Optimize
                            </h3>
                            <p className="text-[14px] text-[#6b7280] leading-relaxed">
                                Once an appointment is booked, view it directly on the dashboard and refine your agent's prompts to further enhance customer interactions.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppointmentStep;
