import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center font-sans overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/30 blur-[120px] rounded-full pointer-events-none" />

            {/* Logo - Positioned top left */}
            <div className="absolute top-8 left-8 flex items-center gap-2">
                <img src={logo} alt="Hexa Ai" className="h-10 w-auto" />
                <span className="text-xl font-semibold text-gray-900">Hexa AI</span>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md px-6 py-12 relative z-10 flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Create an Account</h1>
                <p className="text-gray-500 text-sm mb-10 text-center font-medium">Sign up to use Hexa AI portal</p>

                <form className="w-full space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full pl-11 pr-12 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                                placeholder="Enter password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-sky-500" /> : <Eye className="h-5 w-5 text-sky-500" />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#2d2d2d] hover:bg-[#1a1a1a] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-gray-200 active:scale-[0.98] mt-4"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="w-full flex items-center justify-center my-8 gap-4">
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                    <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">OR</span>
                    <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>

                {/* Social Logins */}
                <div className="w-full space-y-4">
                    <button className="w-full flex items-center justify-center gap-3 bg-[#f8f9fa] border border-gray-100 hover:border-blue-200 hover:bg-white text-[14px] font-semibold text-gray-700 py-3.5 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-[#f8f9fa] border border-gray-100 hover:border-blue-200 hover:bg-white text-[14px] font-semibold text-gray-700 py-3.5 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.05 20.28c-.96.95-2.04 1.43-3.04 1.43-1.04 0-1.78-.34-2.82-.34-1.04 0-1.89.34-2.82.34-.96 0-2.12-.51-3.21-1.6C3.25 18.06 2 15.31 2 12.06c0-4.04 2.89-6.9 5.86-6.9.96 0 1.93.36 2.54.36.14 0 .36-.04.54-.04.64 0 1.89-.39 2.96-.39 1.14 0 2.21.32 2.93 1.07.39.39.75.93 1 1.5-2.32.96-2.68 3.82-2.36 4.86.32 1.11.89 2.07 1.68 2.86.29.29.61.54.96.79-.11.43-.25.86-.39 1.16-.32.61-.64 1.25-1.04 1.96zM12.04 5.32c-.11-2.04 1.25-4.14 3.07-5.04.18-.07.39-.14.61-.14.11 0 .25.04.36.04.14 2 1 3.79 2.89 4.79-.11.07-.32.14-.54.14-1.78 0-3.32-.71-6.39.21z" />
                        </svg>
                        Continue with Apple
                    </button>
                </div>

                <p className="mt-10 text-sm text-gray-500 font-medium">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 font-bold hover:underline ml-1">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
