import React from 'react';
import FeatureGif from '../../../assets/Product/Verified Phone Numbers/VerifiedFeature.gif';
import { AlignLeft, Hash, Sliders } from 'lucide-react';

const What = () => {
    const features = [
        {
            icon: <div className="text-[#111827] font-bold text-lg">B</div>,
            title: "Boolean",
            description: "Simple yes/no determinations. Example: Whether the customer is a first-time caller"
        },
        {
            icon: <AlignLeft className="w-5 h-5 text-[#111827]" />,
            title: "Text",
            description: "Detailed textual information. Example: Call summaries, action items, or key discussion points"
        },
        {
            icon: <Hash className="w-5 h-5 text-[#111827]" />,
            title: "Number",
            description: "Quantitative measurements. Example: Transaction amounts, call duration, or satisfaction."
        },
        {
            icon: <Sliders className="w-5 h-5 text-[#111827]" />,
            title: "Selector",
            description: "Categorization from a fixed list. Example: Issue types, product categories, or resolution status"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            {/* Background GIF */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.4]"
                style={{
                    backgroundImage: `url(${FeatureGif})`,
                }}
            />
            {/* Lightening Overlay */}
            <div className="absolute inset-0 bg-white/70 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-20 max-w-4xl">
                    <h2 className="text-3xl md:text-[44px] font-medium text-[#111827] mb-6">
                        What is post call analysis?
                    </h2>
                    <p className="text-[#6B7280] text-lg leading-relaxed">
                        Post-call analysis is a powerful feature that automatically analyzes customer conversations after they have ended, helping you derive valuable insights from your calls. We provide several built-in analysis categories, and you can create custom categories to match your specific business needs.
                    </p>
                </div>

                {/* Bottom: Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/40 backdrop-blur-sm p-8 rounded-[1.5rem] border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="w-12 h-12 bg-[#F0FBFF] rounded-xl flex items-center justify-center mb-10 shadow-sm border border-[#E0F4FF]">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#111827] mb-4">
                                {feature.title}
                            </h4>
                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default What;
