import React from 'react';
import ScamImg from '../../../assets/Product/Verified Phone Numbers/Scam.png';
import IncomingIcon from '../../../assets/Product/Verified Phone Numbers/Incoming call.png';
import OutgoingIcon from '../../../assets/Product/Verified Phone Numbers/Outgoing.png';
import DocumentIcon from '../../../assets/Product/Verified Phone Numbers/Document.png';
import FeatureGif from '../../../assets/Product/Verified Phone Numbers/VerifiedFeature.gif';

const What = () => {
    const features = [
        {
            icon: <img src={OutgoingIcon} alt="Outgoing" className="w-5 h-5 object-contain" />,
            title: "Trusted Caller ID",
            description: "Build credibility with recipients by displaying a verified number."
        },
        {
            icon: <img src={IncomingIcon} alt="Incoming" className="w-5 h-5 object-contain" />,
            title: "Higher Answer Rates",
            description: "Avoid spam filters and increase the likelihood of your calls being answered.",
            isHighlighted: true
        },
        {
            icon: <img src={DocumentIcon} alt="Document" className="w-5 h-5 object-contain" />,
            title: "Enhance Campaign Success",
            description: "Ensure your outreach efforts connect with more customers."
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-white">
            {/* Background GIF */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat     "
                style={{
                    backgroundImage: `url(${FeatureGif})`,
                }}
            />
            {/* Lightening Overlay */}
            <div className="absolute inset-0 bg-white/70 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-[40px] font-medium text-[#111827] mb-20">
                    What are verified phone numbers?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    {/* Left: Image */}
                    <div className="relative group max-w-[400px]  mx-auto lg:mx-0">
                        <div className="rounded-[20px]  h-[450px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <img
                                src={ScamImg}
                                alt="Phone displaying Scam Likely"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: '40% center' }}
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 mb-20 lg:max-w-md lg:-ml-30  ">
                        <div>
                            <h3 className="text-xl  text-[#111827] mb-6">
                                Prevent "Scam Likely" or "Unknown" Tag
                            </h3>
                            <div className="space-y-6">
                                <p className="text-[#6B7280] text-base leading-relaxed">
                                    Verified Phone Numbers are phone numbers that have been authenticated and approved by major carriers like T-Mobile, AT&T, and Verizon. This ensures your calls are recognized as legitimate and prevent your phone numbers being flagged as "Spam Likely," or "Unknown".
                                </p>
                                <p className="text-[#6B7280] text-base leading-relaxed">
                                    Verified Phone Numbers are an essential tool for businesses looking to improve call efficiency and maintain a professional image.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-[2rem] bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-2 ${feature.isHighlighted ? 'border-[#0081e6] ring-1 ring-[#0081e6] ring-opacity-10' : 'border-transparent'
                                }`}
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8 shadow-sm">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-[#111827] mb-4">
                                {feature.title}
                            </h4>
                            <p className="text-[#6B7280] leading-relaxed">
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
