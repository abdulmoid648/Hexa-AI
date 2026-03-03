 {/* Right Side: People Avatars (Frame Style) */}
                                <div className="flex flex-col gap-4 relative z-10">
                                    {[
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                                    ].map((url, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden bg-purple-200"
                                        >
                                            <img src={url} alt="Person" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                {/* Left Side: Call Status Cards (Frame Style) */}
                                <div className="flex flex-col gap-4 relative z-10 w-1/6  ">
                                    {[5, 30, 80, 130, 45].map((num, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/95 backdrop-blur-sm rounded-lg py-3 px-5 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 "
                                            style={{
                                                animation: `slideInLeft 0.8s ease-out forwards ${i * 0.1}s`,
                                                opacity: 0
                                            }}
                                        >
                                            <div className="text-black bg-gray-50 p-2 rounded-lg shadow-inner ">
                                                <PhoneCall size={18} />
                                            </div>
                                            <span className="text-base  text-gray-900 tracking-tight">{num}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Connection Lines SVG - Originating from first phone card */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" >
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <line
                                            key={i}
                                            x1="32%"
                                            y1="9%"
                                            x2="88%"
                                            y2={`${9 + i * 20.2}%`}
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeDasharray="4 6"
                                            className="opacity-50"
                                        />
                                    ))}
                                </svg>