import React from 'react';
import SupplierImg from '../../../assets/Product/Navigate IVR/Supplier.png';
import PrescriptionImg from '../../../assets/Product/Navigate IVR/Prescription.png';
import QuotationImg from '../../../assets/Product/Navigate IVR/Quotation.png';

const When = () => {
    const useCases = [
        {
            category: "B2B Sales",
            title: "Supplier Communication",
            description: "AI agents contacting suppliers for order updates, inventory checks, need navigates IVR systems to reach certain departments.",
            image: SupplierImg
        },
        {
            category: "Healthcare",
            title: "Prescription Verification",
            description: "AI agents contacting pharmacies to verify prescriptions, request refills, need to navigates IVR to reach the department.",
            image: PrescriptionImg
        },
        {
            category: "Financial",
            title: "Request for Quotation",
            description: "AI agents following up on Request for Quotation, or delivery timelines. They will need to route to right department.",
            image: QuotationImg
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-gray-900 mb-16 text-center lg:text-left tracking-tight">
                    When to use navigate IVR?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="h-[240px] overflow-hidden m-4 rounded-[2rem]">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-4 flex flex-col">
                                <span className="text-[13px] font-medium text-gray-400 mb-2 block uppercase tracking-wide">
                                    {useCase.category}
                                </span>
                                <h3 className="text-[22px]  text-gray-900 mb-4 leading-snug tracking-tight">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {useCase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default When;
