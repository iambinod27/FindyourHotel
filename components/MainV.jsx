import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const MainV = () => {
    return (
        <>
            <main>
                <div className="relative max-w-full">
                    <Image src={"https://images.pexels.com/photos/106108/pexels-photo-106108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} unoptimized width={1000} height={500} className="w-full h-full object-cover " />
                    <div className="absolute bg-gradient-to-b from-[#1ce18f] to-blue-400 w-full h-full top-0 opacity-50">

                    </div>
                    <div className="absolute text-white max-w-[675px] pl-[50px] top-[50%] translate-y-[-50%]">
                        <h2 className="text-[62px] font-bold leading-tight">MAKE YOUR STAY LIKE HOME</h2>
                        <p className="text-[24px] font-medium leading-tight mt-5">Find your destination.</p>
                        <Link href="/hotels" className="bg-[#13b16f] py-3 px-5 rounded-md mt-5 inline-flex items-center gap-[10px] text-[18px] font-[500] ease-in hover:opacity-80">
                            Explore Now <FaArrowRight className="w-[16px] h-[16px]" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
export default MainV