import React from 'react';
import AppointmentHeroImg from '../../../assets/Product/Book Appointment/AppointmentHero.gif';

const BookAppointmentHero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-20">
                        <span className="text-gray-400 font-medium mb-4 block tracking-wider uppercase text-sm">Build</span>
                        <h1 className="text-5xl sm:text-5xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            AI Appointment <br />
                            Scheduling for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-500">Instant Booking</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
                            Automate scheduling and booking with Hexa AI. Our AI appointment scheduling checks availability, confirms slots, and keeps every interaction seamless.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative">
                        {/* Container Stage matching the image */}
                        <div className="rounded-xl p-12 lg:p-16 h-[510px] flex items-center justify-start overflow-hidden relative shadow-2xl">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${AppointmentHeroImg})`,
                                }}
                            />
                            {/* Lightening Overlay for better readability */}
                            <div className="absolute inset-0 bg-white/40 pointer-events-none" />

                            {/* Inner blur blobs for extra depth */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            {/* Card Container */}
                            <div className="relative z-10 w-full max-w-[320px] bg-white rounded-xl shadow-2xl border border-white/50 p-4 transform scale-30 hover:scale-90 transition-all duration-500 cursor-default origin-top-left -translate-x-2 mt-7">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg  text-gray-900 tracking-tight">Book on Calendar</h3>
                                    <button className="w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center text-white hover:bg-amber-300 transition-colors">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <label className="text-[9px] text-gray-400 uppercase tracking-widest block mb-2">Description</label>
                                        <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100 min-h-[70px]">
                                            <p className="text-[9px] text-gray-400 leading-relaxed pr-2">
                                                When users ask for availability, check the calendar and provide available slots.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[9px]  text-gray-400 uppercase tracking-widest block mb-2">API key</label>
                                        <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100 flex items-center justify-between">
                                            <span className="text-xs font-bold text-yellow-400 tracking-widest">••••••</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[9px]  text-gray-400 uppercase tracking-widest block mb-1.5">Event Type ID</label>
                                        <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100">
                                            <span className="text-[10px] font-medium text-gray-500">320930</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[9px]  text-gray-400 uppercase tracking-widest block mb-1.5">Time zone (Optional)</label>
                                        <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100">
                                            <span className="text-[10px] font-medium text-gray-500">America/California</span>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <button className="w-full bg-amber-400 text-white text-[12px] font-bold py-3.5 rounded-xl hover:bg-amber-500 transition-colors shadow-lg shadow-amber-200/50">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookAppointmentHero;
