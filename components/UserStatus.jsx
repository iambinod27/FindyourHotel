"use client"

import { loginUser } from "@/lib/actions/auth/authActions"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"
import { HiUser } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";

const UserStatus = () => {
    const [value, setValue] = useState("")
    const [form, setForm] = useState(null)
    const { user } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    function removeToken() {
        window.localStorage.removeItem("token")
        window.location.href = "/"
    }

    useEffect(() => {
        const tok = window.localStorage.getItem("token")

        if (tok) {
            const parsedData = JSON.parse(tok)

            setValue(parsedData?.token)
            setForm(parsedData?.info)
        }

        if (tok) {
            dispatch(loginUser(form))
        }
    }, [value])

    return (
        <div className="text-[18px] font-medium">
            {
                value && form !== null ? (<>
                    <div className="flex gap-[25px] items-center">

                        <div className="font-[400] flex items-center gap-[7.5px] leading-tight text-[16px] capitalize"><HiUser className="h-[22px] w-[22px]" /> Hello, {user?.fname}</div>
                        <div className="cursor-pointer flex items-center gap-[7.5px] text-[16px]" onClick={() => removeToken()}><RiLogoutBoxLine className="h-[22px] w-[22px]" />Logout</div>
                    </div>
                </>) : (<>
                    <Link href="/login">Login</Link>
                </>)
            }
        </div>
    )
}
export default UserStatus