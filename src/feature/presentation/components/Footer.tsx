import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-auto">
            {/* Main footer container with border radius */}
            <div className="max-w-[1440px] mx-auto bg-main text-second py-4 md:py-6 shadow-2xl rounded-tl-3xl rounded-tr-3xl overflow-hidden">
                {/* Inner content with padding */}
                <div className="px-6 md:px-8 flex flex-col">
                    {/* Main Footer Content - Reordered layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-4">
                        {/* LEFT: Contact Info */}
                        <div className="flex flex-col items-end gap-2 md:gap-3 order-3">
                            <a
                                href="tel:+201234567890"
                                className="flex items-center gap-2 md:gap-3 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group"
                            >
                                <span className="text-sm md:text-base font-medium text-white">
                                    01069727438
                                </span>
                                <Phone size={18} className="text-white group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="digital.t@shubra.net"
                                className="flex items-center gap-2 md:gap-3 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group"
                            >
                                <Mail size={18} className="text-white group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base font-medium text-white">
                                    digital.t@shubra.net
                                </span>
                            </a>
                        </div>

                        {/* CENTER: Social Icons */}
                        <div className="flex justify-center gap-3 md:gap-4 order-2">
                            <a
                                href="https://www.facebook.com/share/1CamxwaGRu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 hover:bg-white p-2.5 md:p-3 rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl group"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-white group-hover:text-main transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/ahmedmagdy__10?igsh=OXU3bWFpemVscG9z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 hover:bg-white p-2.5 md:p-3 rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl group"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} className="text-white group-hover:text-main transition-colors" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 hover:bg-white p-2.5 md:p-3 rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl group"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} className="text-white group-hover:text-main transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ahmed-magdy-873759243/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/20 hover:bg-white p-2.5 md:p-3 rounded-full transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} className="text-white group-hover:text-main transition-colors" />
                            </a>
                        </div>

                        {/* RIGHT: Logo - Icon + Text */}
                        <div className="flex justify-start order-1">
                            <div className="flex items-center gap-2 md:gap-3">
                                {/* Icon Container */}
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-2.5 md:p-3 shadow-lg border border-white/10">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <line
                                            x1="3"
                                            y1="6"
                                            x2="21"
                                            y2="6"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16 10a4 4 0 0 1-8 0"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                {/* Text */}
                                <div className="flex flex-col">
                                    <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        شبرا الطائف
                                    </h1>
                                    <p className="text-xs text-white/70 hidden md:block">
                                        Shobra Store
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-3" />

                    {/* Bottom Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center mb-3">
                        <a href="#about" className="text-white/80 hover:text-white transition text-xs md:text-sm font-medium hover:underline py-1">
                            عن المتجر
                        </a>
                        <a href="#privacy" className="text-white/80 hover:text-white transition text-xs md:text-sm font-medium hover:underline py-1">
                            سياسة الخصوصية
                        </a>
                        <a href="#terms" className="text-white/80 hover:text-white transition text-xs md:text-sm font-medium hover:underline py-1">
                            شروط الاستخدام
                        </a>
                        <a href="#contact" className="text-white/80 hover:text-white transition text-xs md:text-sm font-medium hover:underline py-1">
                            اتصل بنا
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-xs md:text-sm font-medium text-white/70 pb-2">
                        <p>&copy; 2025 متجر شبرا. جميع الحقوق محفوظة.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Paste into browser console
