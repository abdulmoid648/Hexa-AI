import React from 'react';
import MobileImg from '../../../assets/Product/Verified Phone Numbers/Mobile.png';
import VerifiedImg from '../../../assets/Product/Verified Phone Numbers/VerifiedHero.gif';

const VerifiedHero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl mb-20">
                        <span className="text-gray-400 font-medium mb-4 block tracking-wider uppercase text-sm">Build</span>
                        <h1 className="text-5xl sm:text-5xl text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Ensure Your Calls Get  <br />
                            Answered with
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-fuchsia-500"> Verified <br /> Phone Numbers</span>
                        </h1>
                        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm">
                            Boost trust and credibility in your call campaigns with Retell AI’s Verified Phone Numbers. Reduce the chances of your calls being flagged as spam and improve answer rates to make every outreach effort count.
                        </p>
                    </div>

                    {/* Right Side: Visual Mockup */}
                    <div className="relative flex justify-center">
                        {/* Container Stage matching the image */}
                        <div className="rounded-[2.5rem] w-full max-w-[500px] h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden relative shadow-2xl bg-white/10 border border-white">
                            {/* Background GIF */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${VerifiedImg})`,
                                }}
                            />
                            {/* Lightening Overlay for better readability */}
                            <div className="absolute inset-0 bg-white/20 pointer-events-none" />

                            {/* Inner blur blobs for extra depth */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/40 blur-[90px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/40 blur-[90px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-100/20 blur-[100px] rounded-full"></div>

                            {/* Mobile Image */}
                            <div className="relative z-10 w-full flex justify-center items-center px-6 sm:px-12 pt-8 sm:pt-12">
                                <img
                                    src={MobileImg}
                                    alt="Spam Likely Detection"
                                    className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] transform translate-y-40 sm:translate-y-64"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifiedHero;
