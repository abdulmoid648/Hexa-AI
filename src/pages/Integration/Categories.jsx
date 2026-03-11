import React, { useState } from 'react';
import { Mail, Layout, Database, Slack as SlackIcon, Calendar, Users, HardDrive, FileText, PlayCircle, Layers, MessageCircle } from 'lucide-react';
import googleSheetsLogo from "../../assets/GoogleSheets.png";
import gmailLogo from "../../assets/Gmail.png";
import slackLogo from "../../assets/Slack.png";
import driveLogo from "../../assets/Drive.png";
import hubspotLogo from "../../assets/HubSpot.png";
import calendlyLogo from "../../assets/Calendly.png";
import airtableLogo from "../../assets/Airtable.png";
import salesforceLogo from "../../assets/Salesforce.png";

const categories = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'assistant', name: 'Personal Assistant' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'support', name: 'Customer Support' },
];

const integrationsData = {
    popular: [
        { name: 'Google Sheets', description: 'Integrate Google Sheets with your AI Workflows', icon: googleSheetsLogo, color: 'bg-gray-50' },
        { name: 'Gmail', description: 'Integrate Gmail with your AI Workflows', icon: gmailLogo, color: 'bg-gray-50' },
        { name: 'Slack', description: 'Integrate Slack with your AI Workflows', icon: slackLogo, color: 'bg-gray-50' },
        { name: 'Google Drive', description: 'Integrate Google Drive with your AI Workflows', icon: driveLogo, color: 'bg-gray-50' },
        { name: 'HubSpot', description: 'Integrate HubSpot with your AI Workflows', icon: hubspotLogo, color: 'bg-gray-50' },
        { name: 'Calendly', description: 'Integrate Calendly with your AI Workflows', icon: calendlyLogo, color: 'bg-gray-50' },
        { name: 'Airtable', description: 'Integrate Airtable with your AI Workflows', icon: airtableLogo, color: 'bg-gray-50' },
        { name: 'Salesforce', description: 'Integrate Salesforce with your AI Workflows', icon: salesforceLogo, color: 'bg-gray-50' },
    ],
    assistant: [
        { name: 'Todoist', description: 'Manage tasks with your AI Assistant', icon: <PlayCircle className="w-6 h-6 text-red-600" />, color: 'bg-red-50' },
        { name: 'Notion', description: 'Sync notes and databases seamlessly', icon: <FileText className="w-6 h-6 text-slate-800" />, color: 'bg-slate-50' },
    ],
    sales: [
        { name: 'Pipedrive', description: 'Track deals and sales pipelines', icon: <Layers className="w-6 h-6 text-green-700" />, color: 'bg-green-50' },
        { name: 'Outreach', description: 'Automate sales engagement', icon: <MessageCircle className="w-6 h-6 text-blue-700" />, color: 'bg-blue-50' },
    ],
    marketing: [
        { name: 'Mailchimp', description: 'Automate your email marketing', icon: <Mail className="w-6 h-6 text-yellow-600" />, color: 'bg-yellow-50' },
        { name: 'Meta Ads', description: 'Optimize your ad spend with AI', icon: <PlayCircle className="w-6 h-6 text-blue-800" />, color: 'bg-blue-50' },
    ],
    support: [
        { name: 'Zendesk', description: 'Provide top-tier customer support', icon: <Layers className="w-6 h-6 text-emerald-800" />, color: 'bg-emerald-50' },
        { name: 'Intercom', description: 'Engage customers in real-time', icon: <MessageCircle className="w-6 h-6 text-blue-600" />, color: 'bg-blue-50' },
    ],
};

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('popular');

    const currentIntegrations = integrationsData[activeCategory] || [];
    const activeCategoryName = categories.find(c => c.id === activeCategory)?.name;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-xl font-bold text-slate-900 mb-8 px-4">Categories</h3>
                        <nav className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`text-left px-5 py-3 rounded-2xl transition-all duration-200 text-sm font-medium
                                        ${activeCategory === cat.id
                                            ? 'bg-white text-slate-900 shadow-[0_4px_20px_-4px_rgba(34,211,238,0.2),0_0_0_1px_rgba(226,232,240,0.8)] border-b border-b-cyan-400'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:w-3/4">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-slate-900">{activeCategoryName}</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {currentIntegrations.map((int, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-cyan-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                    <div className={`shrink-0 w-12 h-12 ${int.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden`}>
                                        {typeof int.icon === 'string' ? (
                                            int.icon ? <img src={int.icon} alt={int.name} className="w-full h-full object-contain p-2" /> : <div className="text-xs text-slate-400 font-bold">{int.name[0]}</div>
                                        ) : (
                                            int.icon
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-slate-800 text-[15px]">{int.name}</h4>
                                        <p className="text-slate-500 text-[13px] leading-tight mt-0.5">{int.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* See More Button */}
                        <div className="mt-8 flex justify-end px-4">
                            <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-[13px] font-semibold rounded-xl hover:border-cyan-200 hover:text-cyan-600 transition-all shadow-sm">
                                See More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
