import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Gradient Banner */}
            <div
                className="footer-gradient-bg w-full h-32 relative overflow-hidden"
            >
                {/* Large faded "Hexa AI" text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span
                        className="text-9xl md:text-[13rem] font-bold tracking-wider translate-y-5"
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '1.5px rgba(255,255,255,0.6)',
                        }}
                    >
                        Hexa Ai
                    </span>
                </div>
            </div>




            {/* Main Footer Content */}
            <div className="footer-gradient-bg px-6 md:px-16 lg:px-24 pt-14 pb-6">
                {/* Top Row: Logo + Subscribe + Social */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
                    {/* Left: Logo + Subscribe */}
                    <div className="flex flex-col gap-4 md:translate-x-15 md:translate-y-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2 text-base translate-x-10">
                            <img src={logo} alt="Hexa Ai" className="h-10 w-auto" />
                            <span className="text-2xl text-gray-900 tracking-tight">Hexa AI</span>
                        </div>

                        <p className="text-base text-gray-500 translate-x-10 ">
                            Subscribe to our newsletter for our product updates
                        </p>

                        {/* Email Input + Submit */}
                        <div className="flex items-center gap-3 translate-x-10">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="h-10 w-44 px-4 text-sm border border-gray-300 rounded-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                            />
                            <button className="h-10 w-20 px-6 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex items-center gap-3 md:mt-2 md:-translate-x-30 md:translate-y-20">
                        {/* Facebook */}
                        <a href="#" className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        {/* X (Twitter) */}
                        <a href="#" className="w-11 h-11 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>


                {/* Links Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 md:translate-x-15 md:translate-y-20">
                    {/* Company */}
                    <div className="flex flex-col gap-3 md:translate-x-15 md:translate-y-10">
                        <h4 className="text-2xl text-gray-900 mb-1 ">Company</h4>
                        <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">About</a>
                        <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Careers</a>
                        <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Contact</a>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col gap-3 md:translate-x-15 md:translate-y-10">
                        <h4 className="text-2xl text-gray-900 mb-1">Legal</h4>
                        <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Terms of Service</a>
                        <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Privacy Policy</a>
                    </div>

                    {/* Use Cases */}
                    <div className="flex flex-col gap-3 md:col-span-2 md:translate-x-15 md:translate-y-10">
                        <h4 className="text-2xl  text-gray-900 mb-1">Use Cases</h4>
                        <div className="grid grid-cols-1 gap-3">
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">AI Receptionist</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Automated Customer Feedback</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Automatic Ordering & Reordering</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Customer Support & Call Centers</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Healthcare & Clinics</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Sales & Lead Generation</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Banking & Financial Services</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Real Estate</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Logistics & Delivery Services</a>
                            <a href="#" className="text-xl text-gray-500 hover:text-gray-700 transition">Education & Training Platforms</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="h-px  mb-6 " />
                <p className="text-lg text-black pb-4 md:translate-x-15 md:translate-y-50">
                    Copyright @ Hexa Ai. All Rights Reserved
                </p>
                <div className='h-100'></div>
            </div>
        </footer>
    )
}
