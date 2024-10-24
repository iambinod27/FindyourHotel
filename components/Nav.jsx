import Link from "next/link";
import UserStatus from "./UserStatus";
import { IoCompassOutline } from "react-icons/io5";
const Nav = () => {

    return (
        <nav className="shadow-lg ">
            <div className="container mx-auto py-[20px] ">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-[24px] font-bold cursor-pointer">FindMyHotel</Link>
                    <div className="flex items-center gap-[15px]">
                        <Link href="/hotels" className="text-[18px] font-[500] items-center flex gap-[7.5px] cursor-pointer"><IoCompassOutline className="w-[24px]h-[24px]" /> Explore</Link>
                        <UserStatus />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav