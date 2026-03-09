import logo from "../assets/logo.png";
import gradientGif from "../assets/gradient.gif";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
    return (
        <footer
            className="w-full relative overflow-hidden"
            style={{
                backgroundImage: `url(${gradientGif})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0"></div>

            <div className="relative z-10">
                {/* Gradient Banner */}
                <div className="w-full h-24 md:h-32 relative overflow-hidden">
                    {/* Large faded "Hexa AI" text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                        <span className="text-6xl sm:text-7xl md:text-9xl lg:text-[13rem] font-bold tracking-wider translate-y-2 md:translate-y-5 text-white opacity-30 whitespace-nowrap">
                            Hexa Ai
                        </span>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="px-6 sm:px-10 md:px-16 lg:px-24 pt-14 pb-10">
                    {/* Top Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-16">
                        {/* Left: Logo + Subscribe */}
                        <div className="flex flex-col gap-4">
                            {/* Logo */}
                            <div className="flex items-center gap-2 text-base">
                                <img src={logo} alt="Hexa Ai" className="h-10 w-auto" />
                                <span className="text-2xl text-gray-900 tracking-tight font-semibold">Hexa AI</span>
                            </div>

                            <p className="text-base text-gray-500 max-w-sm">Subscribe to our newsletter for our product updates</p>

                            {/* Email Input */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full max-w-md">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="h-10 w-full sm:w-auto flex-1 px-4 text-sm border border-gray-300 rounded-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                                />
                                <button className="h-10 px-6 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition whitespace-nowrap w-full sm:w-auto">
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-gray-900 rounded-lg text-white hover:bg-gray-700">
                                <Facebook size={16} />
                            </a>

                            <a href="#" className="p-2 bg-gray-900 rounded-lg text-white hover:bg-gray-700">
                                <Instagram size={16} />
                            </a>

                            <a href="#" className="p-2 bg-gray-900 rounded-lg text-white hover:bg-gray-700">
                                <Twitter size={16} />
                            </a>

                            <a href="#" className="p-2 bg-gray-900 rounded-lg text-white hover:bg-gray-700">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Company</h4>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                About
                            </a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                Careers
                            </a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                Contact
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Legal</h4>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                Terms of Service
                            </a>
                            <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                Privacy Policy
                            </a>
                        </div>

                        <div className="flex flex-col gap-3 sm:col-span-2">
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Use Cases</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    AI Receptionist
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    Customer Feedback
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    Ordering & Reordering
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    Call Centers
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    Healthcare
                                </a>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-700">
                                    Sales & Leads
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-300 pt-6">
                        <p className="text-sm text-gray-900 text-center sm:text-left">Copyright © Hexa Ai. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
