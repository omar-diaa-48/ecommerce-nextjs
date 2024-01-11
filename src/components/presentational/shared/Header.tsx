'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [animateHeader, setAnimateHeader] = useState(false);
    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 140) {
                setAnimateHeader(true);
            } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <header className={`w-full backdrop-filter backdrop-blur-lg bg-white/50 fixed z-20 transition-all ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
            <div className="max-w-7xl mx-auto ">
                <div className={`flex max-w-screen-xl py-10 ${animateHeader && "py-5"} mx-auto items-center justify-between px-8 transition-all ease-in-out duration-500`}>
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tighter text-indigo-400 pr-8"
                    >
                        E-commerce app
                    </Link>
                    <nav>
                        <ul className="flex items-center justify-start">
                            {[
                                { title: 'Sign in', link: '/sign-in' },
                                { title: 'Sign up', link: '/sign-up' },
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.link}
                                    className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
