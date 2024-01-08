'use client'

import DateInput from "@/components/data/DateInput";
import TextFieldInput from "@/components/data/TextFieldInput";
import AuthContainer from "@/components/presentational/AuthContainer";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export default function SignUp() {
    const methods = useForm()

    return (
        <AuthContainer title="Create an account">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <FormProvider {...methods} >
                    <form className="space-y-6" action="#" method="POST">
                        <TextFieldInput name="email" label="Email" />
                        <TextFieldInput name="firstName" label="First Name" />
                        <TextFieldInput name="password" label="Password" />
                        <DateInput name="birthDate" label="Birth date" />
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                </FormProvider>

                <p className="mt-10 text-center text-sm text-gray-500">
                    <span>Already have an account, </span>
                    <Link href="sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</Link>
                </p>
            </div>
        </AuthContainer>
    )
}