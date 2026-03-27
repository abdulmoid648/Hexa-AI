import React from 'react';
import ReceptionistImg from '../../../assets/Product/Book Appointment/Receptionist.png';
import SettlerImg from '../../../assets/Product/Book Appointment/Settler.png';
import AutomatedImg from '../../../assets/Product/Book Appointment/Automated.png';
import DemoImg from '../../../assets/Product/Book Appointment/Demo.png';
import VisitsImg from '../../../assets/Product/Book Appointment/Visits.png';
import HealthcareImg from '../../../assets/Product/Book Appointment/Healtcare.png'; // Using the filename provided (has a typo)

const cards = [
    {
        category: "Virtual Front Desk",
        title: "Receptionist",
        description: "Handling initial queries, directing calls to appropriate departments, and scheduling appointments for visitors or clients.",
        image: ReceptionistImg,
        bgColor: "bg-blue-50"
    },
    {
        category: "Marketing",
        title: "Appointment Settler",
        description: "Ask a few questions to ensure the lead meets specific criteria. Then setting up consultations or demo appointments for sales representatives.",
        image: SettlerImg,
        bgColor: "bg-purple-50"
    },
    {
        category: "Operation",
        title: "Automated Follow-Ups",
        description: "Contacting clients to confirm upcoming appointments and reschedule if needed, or handling rescheduling for missed appointments.",
        image: AutomatedImg,
        bgColor: "bg-amber-50"
    },
    {
        category: "Sales",
        title: "Demo & Discovery Booking",
        description: "Handling initial queries, directing calls to appropriate departments, and scheduling appointments for visitors or clients.",
        image: DemoImg,
        bgColor: "bg-green-50"
    },
    {
        category: "Field Services",
        title: "On-Site Visits",
        description: "From HVAC to repairs, offer real-time availability, book technician windows, and trigger reminders and reschedules automatically.",
        image: VisitsImg,
        bgColor: "bg-pink-50"
    },
    {
        category: "Operation",
        title: "Healthcare & Wellness",
        description: "Intake essentials, check eligibility/availability, and book or reschedule visits securely with an AI appointment scheduler that reduces no-shows.",
        image: HealthcareImg,
        bgColor: "bg-cyan-50"
    }
];

const AI = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-medium text-gray-900 mb-16 text-center lg:text-left">
                    When to use AI appointment booking?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-start group">
                            <div className={`w-full h-48 rounded-2xl mb-8 flex items-center justify-center overflow-hidden ${card.bgColor} relative`}>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay gradient for premium feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                            </div>

                            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-3">
                                {card.category}
                            </span>

                            <h3 className="text-xl text-gray-900 mb-4 tracking-tight">
                                {card.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AI;
