import Link from "next/link";
import UserStatus from "./UserStatus";

const Nav = () => {

    return (
        <nav className="shadow-lg border">
            <div className="container mx-auto py-[20px] ">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-[24px] font-bold cursor-pointer">FindMyHotel</Link>
                    <UserStatus />
                </div>
            </div>
        </nav>
    )
}
export default Nav