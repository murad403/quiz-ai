'use client';
import { navLinks, TNavLink } from '@/lib/navlinks';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Function to get proper link href
    const getLinkHref = (route: string) => {
        // If route starts with #, it's a section link
        if (route.startsWith('#')) {
            // If we're on home page, just use the hash
            if (pathname === '/') {
                return route;
            }
            // If we're on another page, prepend home route
            return `/${route}`;
        }
        // Otherwise return as is
        return route;
    };

    return (
        <nav className="py-4 md:px-0 px-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl md:text-3xl font-bold text-main">
                    Quiz ai
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-5 items-center">
                    {navLinks.map((link: TNavLink) => (
                        <li key={link.id}>
                            <Link
                                href={getLinkHref(link.route)}
                                className="text-title hover:text-main transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/auth/sign-in"
                        className="border border-gray-700/70 rounded-lg py-2 px-6 text-title font-semibold hover:bg-header hover:text-white transition-all duration-200"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/auth/sign-up"
                        className="bg-header rounded-lg py-2 px-6 font-semibold text-white hover:bg-header/90 transition-all duration-200"
                    >
                        Get started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-header z-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={toggleMenu} />
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col mt-24 px-8 gap-8">
                    {navLinks.map((link: TNavLink) => (
                        <Link
                            key={link.id}
                            href={getLinkHref(link.route)}
                            onClick={toggleMenu}
                            className="text-xl text-title hover:text-main transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="border-t border-gray-200 pt-8 mt-4 flex flex-col gap-4">
                        <Link
                            href="/auth/sign-in"
                            onClick={toggleMenu}
                            className="border border-header rounded-lg py-3 px-6 text-center text-title font-semibold hover:bg-header hover:text-white transition-all"
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/auth/sign-up"
                            onClick={toggleMenu}
                            className="bg-header rounded-lg py-3 px-6 text-center font-semibold text-white hover:bg-header/90 transition-all"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;