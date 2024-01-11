"use client"
import Button from "@/components/handlers/Button";
import DateInput from "@/components/handlers/DateInput";
import TextFieldInput from "@/components/handlers/TextFieldInput";
import AuthContainer from "@/components/presentational/auth/AuthContainer";
import { ISignUpForm } from "@/utilities/interfaces/auth.interface";
import schema from "@/utilities/schemas/sign-up";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const SignUp = () => {

    const methods = useForm<ISignUpForm>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            birthDate: new Date()
        }
    })

    const { formState } = methods;

    return (
        <AuthContainer title="Create an account">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <FormProvider {...methods} >
                    <form className="space-y-6" action="#" method="POST">
                        <TextFieldInput name="email" label="Email" />
                        <TextFieldInput name="firstName" label="First Name" />
                        <TextFieldInput name="password" label="Password" type="password" />
                        <DateInput name="birthDate" label="Birth date" />
                        <div>
                            <Button disabled={!formState.isValid} type="submit" />
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

export default SignUp;