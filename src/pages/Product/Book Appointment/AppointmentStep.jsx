import React from 'react';
import Step1 from '../../../assets/Product/Book Appointment/Step1.gif';
import Step2 from '../../../assets/Product/Book Appointment/Step2.gif';
import Step3 from '../../../assets/Product/Book Appointment/Step3.gif';

const AppointmentStep = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-medium text-gray-900 mb-20 text-center lg:text-left tracking-tight">
                    Step by Step to use Appointment Booking
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Step 1: Functions */}
                    <div className="flex flex-col h-full bg-[#F8F9FA]/40 rounded-[2.5rem] border border-gray-100/50 p-2 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div
                            className="relative  h-[360px] mt-3  w-[90] flex items-center justify-center p-8 overflow-hidden rounded-[2rem] bg-cover bg-center"
                            style={{ backgroundImage: `url(${Step1})` }}
                        >
                            <div className="absolute inset-0 bg-white/90"></div>
                            {/* Functions Mockup */}
                            <div className="relative z-10 bg-white rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 w-full max-w-[280px] transform group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                    <span className="text-gray-500 text-sm font-medium">Functions</span>
                                    <div className="w-6 h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-[10px] text-gray-400 mb-6 leading-relaxed pr-6">
                                    Enable your agent with capabilities such as calendar<br />
                                    bookings, call termination...
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 bg-[#F4F4F5] p-3 rounded-xl border border-gray-100/50">
                                        <div className="relative w-4 h-4 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                                            </svg>
                                            <div className="absolute top-0 right-0 transform -translate-x-1,5 translate-y-1.1   -rotate-45">
                                                <svg className="w-2 h-2 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-[#6B7280] font-medium tracking-tight translate-x-1">Phone call</span>
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
                                        <span className="text-[11px] text-gray-400 font-medium tracking-tight">Calendar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Text Content */}
                        <div className="px-8 pt-8 pb-10">
                            <h3 className="text-[22px] font-semibold text-gray-900 mb-4 leading-snug tracking-tight">
                                Create Appointment Booking Functions
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Start by creating an AI agent tailored for appointment booking.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Add the "Check Availability" and "Book Appointments" functions to your agent.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Prompt */}
                    <div className="flex flex-col h-full bg-[#F8F9FA]/40 rounded-xl border border-gray-100/50 p-2 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div
                            className="relative h-[360px] mt-3   w-full flex items-center justify-center p-8 overflow-hidden rounded-[2rem] bg-cover bg-center"
                            style={{ backgroundImage: `url(${Step3})` }}
                        >
                            <div className="absolute inset-0 bg-white/70"></div>
                            {/* Prompt Mockup */}
                            <div className="relative z-10 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 w-full max-w-[280px] h-[240px] transform group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-400 text-sm font-medium">Prompt</span>
                                    <div className="w-6 h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mb-1 font-medium opacity-80">Write prompt here</p>
                                <div className="bg-white p-5 rounded-2xl border border-gray-100 min-h-[140px]  ">
                                    <p className="text-[9px] text-gray-600 mb-2 font-semibold opacity-50 uppercase tracking-widest text-left">Step 03</p>
                                    <p className="text-[9px] text-gray-500 leading-relaxed max-w-[190px] mb-2 text-left mx-auto">
                                        Thank you for answering all the questions. I'd like to connect you with one of our specialized sales repetitive.
                                    </p>
                                    <p className="text-[9px] text-gray-400 font-medium leading-relaxed text-left">
                                        "If the user said yes, call 'transfer_call' to transfer the call to a human."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 pt-8 pb-10">
                            <h3 className="text-[22px] font-semibold text-gray-900 mb-4 leading-snug tracking-tight">
                                Set Up & Add Function Logic to Prompts
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Define the scenarios where the appointment booking functions will be triggered.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Example: Call the "Check Availability" function and provide available slots to the customer.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Bookings */}
                    <div className="flex flex-col h-full bg-[#F8F9FA]/40 rounded-xl border border-gray-100/50 p-2 shadow-sm hover:shadow-md transition-all duration-300 group ">
                        <div
                            className="relative h-[360px] mt-3 ml-1 w-90 flex items-center justify-center p-8 overflow-hidden rounded-[2rem] bg-cover bg-center "
                            style={{ backgroundImage: `url(${Step2})` }}
                        >
                            <div className="absolute inset-0 bg-white/60"></div>
                            {/* Bookings Mockup */}
                            <div className="relative z-10 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-2 w-full max-w-[280px] transform group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-400 text-sm font-semibold tracking-tight translate-x-2">Bookings</span>
                                    <div className="w-6 h-6 rounded-md bg-[#FFBE00] flex items-center justify-center shadow-sm -translate-x-1">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-400 mb-4 leading-relaxed pr-6">
                                    See upcoming and past events booked through your event type links.
                                </p>
                                <div className="space-y-2.5">
                                    {['Upcoming', 'Unconfirmed', 'Past', 'Cancelled'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-[#F4F4F5] p-3 rounded-xl border border-gray-100/50">
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
                        <div className="px-8 pt-8 pb-10">
                            <h3 className="text-[22px] font-semibold text-gray-900 mb-4 leading-snug tracking-tight">
                                Monitor Appointments and Optimize
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Once an appointment is booked, view it directly on the dashboard.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Review and refine your agent's prompts to further enhance customer interactions and optimize results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppointmentStep;
