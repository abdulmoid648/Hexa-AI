import React from 'react';
import googleSheetsLogo from "../../assets/GoogleSheets.png";
import gmailLogo from "../../assets/Gmail.png";
import slackLogo from "../../assets/Slack.png";
import driveLogo from "../../assets/Drive.png";
import hubspotLogo from "../../assets/HubSpot.png";
import calendlyLogo from "../../assets/Calendly.png";
import airtableLogo from "../../assets/Airtable.png";
import salesforceLogo from "../../assets/Salesforce.png";
import automationBg from "../../assets/Integration/Automation.gif";
import lightningIcon from "../../assets/Integration/How/Lightning.png";
import arrowIcon from "../../assets/Integration/How/arrow.png";
import step1Gif from "../../assets/Integration/How/Step1.gif";
import step2Gif from "../../assets/Integration/How/Step2.gif";
import step3Gif from "../../assets/Integration/How/Step3.gif";

const How = () => {
    return (
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${automationBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1
                }}
            />
            <div className="absolute inset-0 z-0 bg-white/70 pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">How it works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Select a trigger */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square w-full rounded-[2rem] flex flex-col items-center justify-center gap-8 mb-4 relative overflow-hidden">
                            <img src={step1Gif} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-white/90 pointer-events-none" />
                            <div className="relative z-10 w-full flex flex-col items-center gap-8">
                                <div className="w-[80%] bg-white rounded-xl py-2 px-4 shadow-sm border border-slate-50 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                        <img src={lightningIcon} alt="Trigger" className="w-4 h-4 object-contain" />
                                    </div>
                                    <span className=" text-sm font-medium ">When this happens...</span>
                                </div>
                                <div className="w-[80%] bg-white rounded-xl py-2 px-4 shadow-sm border border-slate-50 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                        <img src={arrowIcon} alt="Action" className="w-4 h-4 object-contain" />
                                    </div>
                                    <span className=" text-sm font-medium ">Do this</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl  text-slate-800 mb-2">Select a trigger</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            A trigger is an event kicking off your AI agent — like a new email in your Gmail inbox.
                        </p>
                    </div>

                    {/* Card 2: Connect your apps */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="aspect-square w-full rounded-[2rem] flex items-center justify-center relative overflow-hidden group mb-4">
                            <img src={step3Gif} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            {/* Floating Icons Grid */}
                            <div className="absolute inset-0 p-8 grid grid-cols-3 gap-8 items-center justify-items-center relative z-10">
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
                        <div className="aspect-square w-full rounded-[2rem] p-8 flex flex-col justify-center gap-3 relative overflow-hidden mb-4 md:-ml-2">
                            <img src={step2Gif} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                            <div className="relative z-10 flex flex-col gap-4">
                                <span className="text-slate-400 text-xs font-semibold mb-1">Email body</span>
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-1 px-4 shadow-sm border border-white self-start">
                                    <span className="text-slate-600 text-[10px] font-medium -translate-x-1">Write a personalized email to the</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-1 px-4 shadow-sm border border-white self-start -translate-x-1">
                                    <span className="text-slate-600 text-[10px] font-medium">lead, using the info you found</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm rounded-lg py-1 px-4 shadow-sm border border-white self-start -translate-x-1">
                                    <span className="text-slate-600 text-[10px] font-medium">about them.</span>
                                </div>
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
