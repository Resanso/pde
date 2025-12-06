
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
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
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6">
            <nav className="bg-[#2E5843] rounded-full px-8 py-4 flex items-center justify-center gap-24 w-[65vw] shadow-lg relative">
                {/* Placeholder for Logo */}
                <div className="flex-shrink-0 relative w-32 h-16 bg-white rounded-full overflow-hidden p-1">
                    <img src="/logo.png" alt="PDE Logo" className="w-full h-full object-contain" />
                </div>

                {/* Navigation Links */}
                <ul className="flex items-center gap-18">
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

                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform">
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
            </nav>
        </div>
    );
}

