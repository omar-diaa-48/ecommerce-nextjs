import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
    title: string;
}

const AuthContainer: React.FC<Props> = (props) => {
    const { title, children } = props;

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-24 w-auto" src="https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default AuthContainer;