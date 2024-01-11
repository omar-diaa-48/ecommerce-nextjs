"use client"
import Button from "@/components/handlers/Button";
import TextFieldInput from "@/components/handlers/TextFieldInput";
import AuthContainer from "@/components/presentational/auth/AuthContainer";
import { ISignInForm } from "@/utilities/interfaces/auth.interface";
import schema from "@/utilities/schemas/sign-in";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

const SignIn = () => {

    const methods = useForm<ISignInForm>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { formState, handleSubmit } = methods;

    const handleUserSubmit = (form: ISignInForm) => {
        console.log(form);
    }

    return (
        <AuthContainer title="Sign in to your account">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <FormProvider {...methods} >
                    <form className="space-y-6" onSubmit={handleSubmit(handleUserSubmit)}>
                        <TextFieldInput name="email" label="Email" />
                        <TextFieldInput name="password" label="Password" type="password" />
                        <div>
                            <Button disabled={!formState.isValid} type="submit" />
                        </div>
                    </form>
                </FormProvider>

                <p className="mt-10 text-center text-sm text-gray-500">
                    <span>Don&apos;t have an account, </span>
                    <Link href="sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </p>
            </div>
        </AuthContainer>
    )
}

export default SignIn;