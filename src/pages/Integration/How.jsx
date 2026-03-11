import React from 'react';
import googleSheetsLogo from "../../assets/GoogleSheets.png";
import gmailLogo from "../../assets/Gmail.png";
import slackLogo from "../../assets/Slack.png";
import driveLogo from "../../assets/Drive.png";
import hubspotLogo from "../../assets/HubSpot.png";
import calendlyLogo from "../../assets/Calendly.png";
import airtableLogo from "../../assets/Airtable.png";
import salesforceLogo from "../../assets/Salesforce.png";

const How = () => {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">How it works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Select a trigger */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square w-full rounded-[2rem] bg-gradient-to-br from-[#fdf2f8] via-[#f0fdfa] to-[#f0f9ff] flex flex-col items-center justify-center gap-4 mb-4 relative overflow-hidden">
                            <div className="w-[80%] bg-white rounded-xl py-3 px-4 shadow-sm border border-slate-50 flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full  flex items-center justify-center text-pink-700 text-xs">⚡</div>
                                <span className=" text-sm font-medium ">When this happens...</span>
                            </div>
                            <div className=" transform scale-y-[3.5] text-black ">↓</div>
                            <div className="w-[80%] bg-white rounded-xl py-3 px-4 shadow-sm border border-slate-50 flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full  flex items-center justify-center text-blue-500 text-xs">🔗</div>
                                <span className=" text-sm font-medium ">Do this</span>
                            </div>
                        </div>
                        <h3 className="text-2xl  text-slate-800 mb-2">Select a trigger</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            A trigger is an event kicking off your AI agent — like a new email in your Gmail inbox.
                        </p>
                    </div>

                    {/* Card 2: Connect your apps */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square w-full rounded-[2rem] bg-gradient-to-br from-[#eff6ff] via-[#f0f9ff] to-[#eef2ff] flex items-center justify-center relative overflow-hidden group mb-4">
                            {/* Floating Icons Grid */}
                            <div className="absolute inset-0 p-6 grid grid-cols-3 gap-4 items-center justify-items-center">
                                {/* Top row */}
                                {/* Group 1: Sheet */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 animate-icon-group-1">
                                    <img src={googleSheetsLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                                <div />
                                {/* Group 2: Gmail */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 animate-icon-group-2">
                                    <img src={gmailLogo} alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Middle row */}
                                {/* Group 2: Calendly */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 translate-y-2 animate-icon-group-2">
                                    <img src={calendlyLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                                {/* Group 1: Slack */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-lg p-2 scale-110 z-10 md:-mt-20 animate-icon-group-1">
                                    <img src={slackLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                                {/* Group 1: Drive */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 translate-y-2 animate-icon-group-1">
                                    <img src={driveLogo} alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Bottom row */}
                                {/* Group 1: HubSpot */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 animate-icon-group-1">
                                    <img src={hubspotLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                                {/* Group 2: Salesforce */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 translate-y-[-4px] md:-mt-10 animate-icon-group-2">
                                    <img src={salesforceLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                                {/* Group 2: Airtable */}
                                <div className="w-10 h-10 bg-white rounded-xl shadow-md p-2 animate-icon-group-2">
                                    <img src={airtableLogo} alt="" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl text-slate-800 mb-2">Connect your apps</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            Hundreds of integrations available.
                        </p>
                    </div>

                    {/* Card 3: Let AI do the work */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square w-full rounded-[2rem] bg-gradient-to-br from-[#fff1f2] to-[#ffedd5] p-8 flex flex-col justify-center gap-3 relative overflow-hidden mb-4 md:-ml-2">
                            <span className="text-slate-400 text-xs font-semibold mb-1">Email body</span>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl py-2 px-4 shadow-sm border border-white self-start">
                                <span className="text-slate-600 text-xs font-medium -translate-x-1">Write a personalized email to the</span>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl py-2 px-4 shadow-sm border border-white self-start -translate-x-1">
                                <span className="text-slate-600 text-xs font-medium">lead, using the info you found</span>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl py-2 px-4 shadow-sm border border-white self-start -translate-x-1">
                                <span className="text-slate-600 text-xs font-medium">about them.</span>
                            </div>
                        </div>
                        <h3 className="text-2xl  text-slate-800 mb-2">Let AI do the work</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            Give custom instructions to your agent, all in natural language.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default How;
