"use client"

import Spinner from "@/components/Spinner";
import { loginUser } from "@/lib/actions/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useFormik } from "formik"
import Link from "next/link";
import { useEffect, useState } from "react"
import * as Yup from 'yup';

const LoginForm = () => {
    const { err, setErr } = useState("");
    const { token, user, message, info } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is Required"),
            password: Yup.string().min(6, "Password should more than 6").required("Password Field is Required"),
        }),

        onSubmit: async (values) => {
            dispatch(loginUser(values));
        },
    })

    const formData = { token, info };

    useEffect(() => {
        if (token && info) {
            window.localStorage.setItem("token", JSON.stringify(formData))
            window.location.href = "/"
        }
    }, [token, user])


    return (
        <>
            <form className="max-w-[400px] mx-auto drop-shadow-sm border p-[20px] rounded-[15px] shadow-sm" onSubmit={formik.handleSubmit}>
                <p className="text-red-600">{message ? <>{message}</> : ""}</p>
                <div className="flex flex-col gap-[5px]">
                    <label className="font-[500]">Email</label>
                    <input type="email" className="border p-[5px]" value={formik.values.email} placeholder="Enter email" onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} />
                </div>
                {formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}


                <div className="flex flex-col gap-[5px] mt-[20px]">
                    <label className="font-[500]">Password</label>
                    <input type="password" className="border p-[5px]" value={formik.values.password} name="password" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.errors.password && <p className="text-red-600">{formik.errors.password}</p>}


                <label htmlFor="remeber" className="flex gap-[5px] mt-[20px] cursor-pointer">
                    <input type="checkbox" className="w-[15px]" id="remeber" value="checked" name="remember" onChange={formik.handleChange} />
                    remember me
                </label>

                <button type="submit" className="bg-green-600 text-[#fff] px-[10px] py-[5px] max-w-full w-full mt-[20px] hover:opacity-80 ease-in rounded-md h-[50px] text-[18px] " >
                    {token && info ? <><div className="flex justify-center"><Spinner width={23} height={23} /></div></> : "Login"}
                </button>

                <Link href="/register" className="mt-5 underline block text-center font-[300]">Create Account</Link>
            </form>
        </>
    )
}
export default LoginForm