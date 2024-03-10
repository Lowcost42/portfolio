"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { IconMenu2, IconX } from '@tabler/icons-react';

const navLinks = [
    {
        title: "Mes projets",
        path: "#mes_projets",
    },
    {
        title: "A Propos",
        path: "#a_propos",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    LOGO
                </Link>
                <div className='mobile-menu block md:hidden'>
                    <button
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {navbarOpen ? (
                            <IconX className="h-5 w-5" />
                        ) : (
                            <IconMenu2 className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
