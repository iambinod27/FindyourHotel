"use client"

import { loginUser } from "@/lib/actions/auth/authActions"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Link from "next/link"
import { useEffect, useState } from "react"

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
                    <div className="flex gap-[15px] items-center">

                        <div className="font-[500]">Hello, {user?.fname}</div>
                        <div className="cursor-pointer" onClick={() => removeToken()}>Logout</div>
                    </div>
                </>) : (<>
                    <Link href="/login">Login</Link>
                </>)
            }
        </div>
    )
}
export default UserStatus