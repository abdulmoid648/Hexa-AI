import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="w-full bg-white border-b-2 border-gray-100 pl-20 pr-6 h-20 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <div className="flex items-center gap-2 ml-8 mr-20  ">
                    <img src={logo} alt="Hexa AI Logo" className="h-14 w-auto" />
                </div>

                {/* Center Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Pricing', 'Product', 'Integrations'].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-lg text-gray-500 hover:text-gray-900 transition-colors duration-150"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#"
                        className="text-lg text-gray-700 font-medium hover:text-gray-900 transition-colors duration-150"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-lg font-medium  rounded-lg hover:bg-white hover:text-black transition-colors duration-150"
                    >
                        Get Started
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-gray-600 hover:text-gray-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-4 px-2">
                    {['Pricing', 'Product', 'Integrations'].map((link) => (
                        <a key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900">
                            {link}
                        </a>
                    ))}
                    <a href="#" className="text-sm text-gray-700 font-medium">Login</a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg"
                    >
                        Get Started →
                    </a>
                </div>
            )}
        </nav>
    )
}
