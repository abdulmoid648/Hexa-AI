import React from 'react';

// Import Assets
import Healthcare2 from '../../../assets/Product/Book Appointment/Healthcare2.png';
import Financial from '../../../assets/Product/Book Appointment/Financial.png';
import Insurance from '../../../assets/Product/Book Appointment/Insurance.png';
import Logistics from '../../../assets/Product/Book Appointment/Logistics.png';
import Home from '../../../assets/Product/Book Appointment/Home.png';
import Debt from '../../../assets/Product/Book Appointment/Debt.png';
import Retail from '../../../assets/Product/Book Appointment/Retail.png';
import Travel from '../../../assets/Product/Book Appointment/Travel.png';

const industryData = [
    // Row 1: Large Cards (Col span 2)
    {
        title: "Healthcare",
        desc: "Automate patient service, reminders, and front-desk tasks.",
        img: Healthcare2,
        size: "large"
    },
    {
        title: "Financial Services",
        desc: "Handle account inquiries, transfers, and support with accuracy.",
        img: Financial,
        size: "large"
    },
    // Row 2: Small Cards (Col span 1)
    {
        title: "Insurance",
        desc: "Streamline claims, quotes and policy update via voice.",
        img: Insurance,
        size: "small"
    },
    {
        title: "Logistics",
        desc: "Confirm deliveries, reroute shipments and notify customers.",
        img: Logistics,
        size: "small"
    },
    {
        title: "Home Services",
        desc: "Answer bookings, route calls and manage appointments 24/7.",
        img: Home,
        size: "small"
    },
    {
        title: "Debt Collection",
        desc: "Automate payments reminders and follow-ups with care.",
        img: Debt,
        size: "small"
    },
    // Row 3: Large Cards (Col span 2)
    {
        title: "Retail & Consumer",
        desc: "Support orders, returns and FAQs with instant voice agents.",
        img: Retail,
        size: "large"
    },
    {
        title: "Travel & Hospitality",
        desc: "Manage reservations, cancellations, and guest requests efficiently.",
        img: Travel,
        size: "large"
    }
];

const Industries = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-gray-900 mb-16 px-2">
                    Industries We Serve
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {industryData.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300
                                flex flex-col group
                                ${item.size === 'large' ? 'md:col-span-2 md:flex-row gap-8 items-center h-auto md:h-[220px]' : 'md:col-span-1 h-auto min-h-[350px]'}
                            `}
                        >
                            {/* Image Container */}
                            <div className={`
                                shrink-0 overflow-hidden rounded-2xl
                                ${item.size === 'large' ? 'w-full md:w-1/2 h-[200px] md:h-full' : 'w-full h-[180px] mb-6'}
                            `}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl  text-gray-900 mb-2 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-base text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
