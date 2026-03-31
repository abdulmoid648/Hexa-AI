import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (name) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // Small delay for better UX
    };

    useEffect(() => {
        if (activeDropdown) {
            document.body.classList.add('nav-dropdown-open');
        } else {
            document.body.classList.remove('nav-dropdown-open');
        }
        return () => document.body.classList.remove('nav-dropdown-open');
    }, [activeDropdown]);

    const navLinks = [
        { name: 'Product', path: '/product', hasDropdown: true },
        { name: 'Use Cases', path: '#' },
        { name: 'Pricing', path: '/#pricing' },
        { name: 'Integrations', path: '/integrations' },
    ];

    const productDropdown = {
        Build: [
            { name: "Call Transfer", path: "/product" },
            { name: "Book Appointments", path: "/product/book-appointment" },
            { name: "Knowledge Base", path: "/product/knowledge-base" },
            { name: "Navigate IVR", path: "/product/navigate-ivr" },
        ],
        Deploy: [
            { name: "Verified Phone Numbers", path: "/product/verified-phone-numbers" },
        ],
        Monitor: [
            { name: "Post Call Analysis", path: "/product/post-call-analysis" }
        ]
    };

    const ChevronDown = ({ isOpen }) => (
        <svg className={`w-4 h-4 ml-1 transition-all duration-300 ${isOpen ? "text-[#00A3FF] rotate-180 opacity-100" : "opacity-50"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <nav className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 h-20 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-full relative">

                {/* Mobile: Hamburger Button (Left) */}
                <div className="flex md:hidden items-center">
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

                {/* Logo (Hidden on Mobile, Visible on Desktop) */}
                <Link to="/" className="hidden md:flex items-center gap-2 shrink-0" onClick={() => setActiveDropdown(null)}>
                    <img src={logo} alt="Hexa AI Logo" className="h-8 w-auto" />
                    <span className="text-2xl text-gray-900 font-medium tracking-tight">Hexa AI</span>
                </Link>

                {/* Center: Nav Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 h-full">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="h-full flex items-center"
                            onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                            onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                        >
                            <Link
                                to={link.path}
                                className={`text-base font-medium transition-colors duration-150 flex items-center h-full ${activeDropdown === link.name ? "text-[#00A3FF]" : "text-gray-600 hover:text-gray-900"}`}
                                onClick={() => setActiveDropdown(null)}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown isOpen={activeDropdown === link.name} />}
                            </Link>

                            {/*  Menu for Product */}
                            {link.name === 'Product' && activeDropdown === 'Product' && (
                                <div className="absolute top-full left-[55%] lg:left-[60%] xl:left-[80%] -translate-x-1/2 w-[calc(100vw-2rem)] max-w-5xl  min-h-[400px] bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 mt-5 lg:p-10 z-50 animate-dropdown-fade">
                                    <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:gap-20 justify-center">
                                        {Object.entries(productDropdown).map(([category, items], idx) => (
                                            <div key={category} className={`${idx < 2 ? 'border-r border-gray-300 pr-12' : ''}`}>
                                                <h3 className="text-[#00A3FF]   text-base mb-6">{category}</h3>
                                                <ul className="space-y-6">
                                                    {items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                to={item.path}
                                                                className="text-gray-500 hover:text-gray-900 text-[12px] font-medium transition-colors"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side Actions (Desktop & Mobile "Get Started") */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link
                        to="/login"
                        className="hidden md:block text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors duration-150"
                        onClick={() => setActiveDropdown(null)}
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 bg-[#2D2D2D] text-white text-xs sm:text-sm font-medium rounded-xl hover:bg-gray-800 transition-all duration-150 h-10 sm:h-11 px-4 sm:px-6 shadow-sm"
                        onClick={() => setActiveDropdown(null)}
                    >
                        Get Started
                        <svg className="hidden sm:block w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 py-6 flex flex-col gap-2 px-6 shadow-xl z-40 animate-in fade-in slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col">
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center justify-between py-2"
                                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                    >
                                        {link.name}
                                        <ChevronDown isOpen={activeDropdown === link.name} />
                                    </button>

                                    {/* Mobile Product Dropdown Content */}
                                    {link.name === 'Product' && activeDropdown === 'Product' && (
                                        <div className="pl-4 mt-2 mb-4 space-y-6 animate-in fade-in slide-in-from-top-1 duration-200">
                                            {Object.entries(productDropdown).map(([category, items]) => (
                                                <div key={category}>
                                                    <h3 className="text-[#00A3FF] text-xs font-semibold uppercase tracking-wider mb-3">{category}</h3>
                                                    <ul className="space-y-3">
                                                        {items.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    to={item.path}
                                                                    className="text-gray-600 hover:text-gray-900 text-sm font-medium block"
                                                                    onClick={() => {
                                                                        setMenuOpen(false);
                                                                        setActiveDropdown(null);
                                                                    }}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="h-px bg-gray-100 w-full my-2"></div>
                    <Link to="/login" className="text-base text-gray-700 font-medium py-2" onClick={() => setMenuOpen(false)}>Login</Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center justify-center gap-2 bg-[#2D2D2D] text-white text-base font-medium px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors mt-2 shadow-sm"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Started
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            )}

            {/* Clickaway overlay to close dropdown */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 top-20 z-40"
                    onMouseEnter={() => setActiveDropdown(null)}
                />
            )}
        </nav>
    );
}

export default Navbar;