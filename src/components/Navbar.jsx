import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Product', path: '/product' },
        { name: 'Pricing', path: '/#pricing' },
        { name: 'Integrations', path: '/integrations' },
    ];

    const ChevronDown = () => (
        <svg className="w-4 h-4 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 h-20 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full">

                {/* Left: Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <img src={logo} alt="Hexa AI Logo" className="h-8 w-auto" />
                    <span className="text-2xl font-semibold text-gray-900 tracking-tight">Hexa AI</span>
                </Link>

                {/* Center: Nav Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150 flex items-center"
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown />}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions (Desktop) */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        to="/login"
                        className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors duration-150"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 bg-[#2D2D2D] text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all duration-150 h-11 px-6 shadow-sm"
                    >
                        Get Started
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="flex md:hidden">
                    <button
                        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 py-6 flex flex-col gap-4 px-6 shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-between"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown />}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 w-full my-2"></div>
                    <Link to="/login" className="text-base text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 bg-[#2D2D2D] text-white text-base font-medium px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Started →
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;