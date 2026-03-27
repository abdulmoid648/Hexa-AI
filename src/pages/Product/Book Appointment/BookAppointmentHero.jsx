import React, { useState, useEffect } from 'react';
import AppointmentHeroImg from '../../../assets/Product/Book Appointment/AppointmentHero.gif';
import BookOnCalendarImg from '../../../assets/Product/Book Appointment/Book-On-Calendar.png';

const CalendarWidget = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const blanks = 1; // September 2025 starts on Monday
    const totalDays = 30;
    const today = 19;

    return (
        <div className="bg-white rounded-xl shadow-2xl border border-white/50 p-4 w-[220px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <button className="text-gray-300 hover:text-gray-500 transition-colors text-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className="text-xs font-semibold text-amber-500 tracking-wide">September 2025</span>
                <button className="text-gray-300 hover:text-gray-500 transition-colors text-sm">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-0 mb-1">
                {days.map(day => (
                    <div key={day} className="text-center text-[7px] font-semibold text-gray-400 tracking-wider py-1">
                        {day}
                    </div>
                ))}
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 gap-0">
                {Array.from({ length: blanks }).map((_, i) => (
                    <div key={`blank-${i}`} className="text-center py-1" />
                ))}
                {Array.from({ length: totalDays }).map((_, i) => {
                    const day = i + 1;
                    const isToday = day === today;
                    return (
                        <div
                            key={day}
                            className={`text-center py-1 text-[9px] font-medium rounded-full cursor-default transition-colors
                                ${isToday
                                    ? 'bg-amber-400 text-white font-bold'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            style={isToday ? { width: '22px', height: '22px', lineHeight: '22px', margin: '0 auto', padding: 0 } : {}}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const BookAppointmentHero = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(prev => !prev);
        }, 2500); // Faster cycle: 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-20">
                        <span className="text-gray-400 font-medium mb-4 block tracking-wider uppercase text-sm">Build</span>
                        <h1 className="text-5xl sm:text-5xl text-gray-900 leading-[1.1] mb-6 tracking-tight">
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

                            {/* Image + Calendar wrapper with group hover and auto-animation */}
                            <div className={`relative z-10 group cursor-default mt-7 -translate-x-2 transition-all duration-500`}>
                                {/* Book on Calendar Image */}
                                <img
                                    src={BookOnCalendarImg}
                                    alt="Book on Calendar"
                                    className={`max-w-[320px] transform transition-all duration-700 origin-top-left
                                        ${isAnimating ? 'scale-[0.90]' : 'scale-[0.30] group-hover:scale-[0.90]'}`}
                                />

                                {/* Calendar Widget - appears on auto-animation OR hover */}
                                <div className={`absolute left-[250px] top-[35px] transform transition-all duration-700 delay-100 origin-top-left
                                    ${isAnimating
                                        ? 'scale-[0.90] opacity-100'
                                        : 'scale-0 opacity-0 group-hover:scale-[0.90] group-hover:opacity-100'}`}>
                                    <CalendarWidget />
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
