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
                                <Phone size={18} className="text-white group-hover:scale-110 transition-transform" />
                                <span className="text-sm md:text-base font-medium text-white">
                                    +20 1069727438
                                </span>
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

                        {/* RIGHT: Logo Image */}
                        <div className="flex justify-start order-1">
                            <img
                                src="src/assets/shubra logo.png"
                                alt="Shobra Store Logo"
                                className="h-10 md:h-12 lg:h-14 w-auto object-contain filter brightness-0 invert"
                                style={{
                                    maxWidth: '180px',
                                }}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const fallback = document.createElement('div');
                                    fallback.className = 'bg-white/20 rounded-xl flex items-center justify-center px-6 py-3 shadow-lg';
                                    fallback.innerHTML = '<span class="text-white text-xl md:text-2xl font-bold">شبرا ستور</span>';
                                    target.parentNode?.appendChild(fallback);
                                }}
                            />
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