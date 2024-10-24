import Image from "next/image"
import { TfiLocationPin } from "react-icons/tfi";
import { HiOutlineStar } from "react-icons/hi";
import Link from "next/link";

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="rounded-md overflow-hidden">
                <Image src={data.mainImage} width={1000} height={1000} unoptimized alt={data.name} className="max-h-[200px] object-cover" />
            </div>
            <div className="mt-4">
                <div className="flex items-start justify-between min-h-[55px]">
                    <Link href={`/hotels/${data._id}`} className="text-[22px] font-[600] leading-tight line-clamp-2 capitalize hover:text-underline">{data.name}</Link>
                    <p className="font-[700]  bg-[#F9EFE4] text-[#f69c6f] inline-flex items-center self-center gap-[5px] px-[10px] py-[5px] rounded-md"><HiOutlineStar width={18} height={18} />{data.ratings}</p>
                </div>
                <p className="text-[15px] font-[400] leading-tight flex items-center gap-[5px] mt-[5px] text-gray-600"><TfiLocationPin className="w-[16px] h-[16px]" />{data.location.name}, {data.location.address}</p>
                <p className="leading-tight text-[24px] font-[600] mt-[5px] flex items-center gap-[5px]">${data.basePrice} <span className="text-gray-600 text-[18px] "> / night</span></p>
            </div>
        </div>
    )
}
export default Card