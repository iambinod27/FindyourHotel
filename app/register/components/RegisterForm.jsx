"use client"

import MessageBox from "@/components/MessageBox";
import Spinner from "@/components/Spinner";
import { createUser } from "@/lib/actions/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from 'yup';

const RegisterForm = () => {
    const { user, message, isLoading } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            fname: Yup.string().min(2, "Too short").max(50, "Too Long!").required("First Name is Required"),
            lname: Yup.string().min(2, "Too short").max(50, "Too Long!").required("First Name is Required"),
            email: Yup.string().email("Invalid email").required("Email is Required"),
            password: Yup.string().min(6, "Too weak").required("Password Field is Required"),
        }),

        onSubmit: async (values) => {
            dispatch(createUser(values))
        },
    })

    console.log(user)

    useEffect(() => {
        if (user) {
            window.location.href = "/login"
        }
    }, [user])

    return (
        <div>
            <form className="max-w-full mx-auto drop-shadow-sm p-[20px] rounded-[15px]" onSubmit={formik.handleSubmit}>
                <div>{message ? <p className="font-[700] capitalize">"{message}"</p> : ""}</div>
                <div className="flex items-start gap-5 mt-[15px] w-full">
                    <div className="w-full">
                        <div className="flex flex-col gap-[5px]">
                            <label className="font-[500]">First Name</label>
                            <input type="text" className="border p-[5px] w-full" value={formik.values.fname} placeholder="First Name" onChange={formik.handleChange} name="fname" onBlur={formik.handleBlur} />
                        </div>
                        {formik.errors.fname && <p className="text-red-600">{formik.errors.fname}</p>}
                    </div>

                    <div className="w-full">
                        <div className="flex flex-col gap-[5px]">
                            <label className="font-[500]">Last Name</label>
                            <input type="text" className="border p-[5px] w-full" value={formik.values.lname} name="lname" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        </div>
                        {formik.errors.lname && <p className="text-red-600">{formik.errors.lname}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] mt-[20px]">
                    <label className="font-[500]">Email</label>
                    <input type="email" className="border p-[5px]" value={formik.values.email} placeholder="Enter email" onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} />
                </div>
                {formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}


                <div className="flex flex-col gap-[5px] mt-[20px]">
                    <label className="font-[500]">Password</label>
                    <input type="password" className="border p-[5px]" value={formik.values.password} name="password" placeholder="Enter Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                {formik.errors.password && <p className="text-red-600">{formik.errors.password}</p>}

                <button type="submit" className="bg-green-600 text-[#fff] px-[10px] py-[5px] max-w-full w-full mt-[20px] hover:opacity-80 ease-in rounded-md h-[50px] text-[18px] " >
                    {isLoading ? <><div className="flex justify-center"><Spinner width={23} height={23} /></div></> : "Register"}
                </button>

            </form>
        </div>
    )
}
export default RegisterForm