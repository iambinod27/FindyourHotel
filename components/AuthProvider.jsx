"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import BigSpinner from "./BigSpinner";

const AuthProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const [isLoading, setLoading] = useState(true)
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token && pathname === "/login") {
            router.push("/");
        } else {
            setLoading(false)
        }
    }, [router, pathname]);

    if (isLoading) {
        return <BigSpinner />
    }

    return (
        <>
            {children}
        </>
    )
}
export default AuthProvider