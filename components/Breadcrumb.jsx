"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Breadcrumb = () => {
    const page = usePathname()


    return (
        <p className="text-[16px] font-[400] mb-5"><Link href="/">Home</Link> / <span className="capitalize text-gray-600">{page.split("/")}</span></p>
    )
}
export default Breadcrumb