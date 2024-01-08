import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="sticky left-0 top-0 z-50 w-full bg-teal-500">
            <div className="container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <Link href="/" className="block w-full py-5">
                            <img
                                src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg"
                                alt="logo"
                                className="block w-24"
                            />
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <nav className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11">
                                <ul className="block lg:flex">
                                    {
                                        [
                                            { title: 'Home', link: '/' }
                                        ].map((item) => (
                                            <li key={item.title}>
                                                <Link
                                                    href={item.link}
                                                    className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            {[
                                { title: 'Sign in', link: 'sign-in' },
                                { title: 'Sign up', link: 'sign-up' },
                            ].map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.link}
                                    className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
