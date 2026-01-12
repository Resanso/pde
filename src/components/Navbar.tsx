"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    
    const hiddenPaths = ["/login", "/dashboard"];
    const shouldHide = hiddenPaths.some((path) => pathname.startsWith(path));

    if (shouldHide) return null;

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        {
            label: "Activity",
            href: "/activity/academic",
            children: [
                { label: "Academic", href: "/activity/academic" },
                { label: "Research", href: "/activity/research" },
                { label: "Pengabdian Masyarakat", href: "/activity/community-service" },
            ],
        },
        {
            label: "Our Team",
            href: "/our-team/lecture",
            children: [
                { label: "Lecture", href: "/our-team/lecture" },
                { label: "Assistant", href: "/our-team/assistant" },
            ],
        },
        { label: "Feedback", href: "/feedback" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center mt-6 px-4">
            <nav className="bg-[#2E5843] rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between w-full md:w-fit md:gap-24 shadow-lg relative transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0 relative w-24 h-12 md:w-32 md:h-16 bg-white rounded-full overflow-hidden p-1">
                    <img src="/logo.png" alt="PDE Logo" className="w-full h-full object-contain" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <li key={item.label} className="relative group">
                            <Link
                                href={item.href}
                                className="text-white hover:text-white/80 transition-colors font-extrabold text-md flex items-center gap-1"
                            >
                                {item.label}
                                {item.children && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-3 h-3 transition-transform group-hover:rotate-180"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                )}
                            </Link>

                            {/* Dropdown Menu (Desktop) */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform">
                                    <div className="bg-white rounded-xl shadow-xl overflow-hidden min-w-[200px] py-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm font-medium transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                   {isOpen ? (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                       </svg>
                   ) : (
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                       </svg>
                   )}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden w-full mt-4 bg-[#2E5843] rounded-2xl p-6 shadow-xl animate-in slide-in-from-top-4 fade-in duration-200">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.label} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-lg font-bold"
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 flex flex-col gap-2 mt-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-white/80 text-sm hover:text-white"
                                                >
                                                    • {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
