"use client"

import { getOneHotel } from "@/lib/actions/hotel/hotelActions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useEffect } from "react";
import { MdBedroomChild } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdMeetingRoom } from "react-icons/md";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPhoneAlt } from "react-icons/fa";
import { Autoplay } from "swiper/modules"
import { hotelCleanUp } from "@/lib/features/hotel/hotelSlice";
import { MdEmail } from "react-icons/md";
import BookingForm from "./components/BookingForm";

const pageDetail = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const { detail } = useAppSelector(state => state.hotel)

    useEffect(() => {
        dispatch(getOneHotel(id))
        dispatch(hotelCleanUp())
    }, [id])

    return (
        <div className="container mx-auto py-[80px] min-h-screen">
            <h2 className="text-center font-bold text-4xl uppercase mb-[30px]">{detail?.name}</h2>
            <Image src={detail?.images[0]} alt={detail?.name} width={1000} height={1000} unoptimized className="w-full rounded-md" loading="lazy" />
            <p className="text-[16px] leading-relaxed  mt-[50px] text-center max-w-[725px] mx-auto">{detail?.description}</p>

            <div className="p-10 shadow-md rounded-md mt-[50px] bg-[#b3f1d7] border border-[#13b16f] ">
                <p className="flex items-center gap-[10px] text-[18px] leading-tight "><span className="font-[700] flex items-center gap-[5px]"><FaSackDollar width={24} height={24} className="w-[24px] h-[24px]" />Base Price :</span> ${detail?.basePrice}</p>
                <p className="flex items-center gap-[10px] text-[18px] leading-tight mt-[10px]"><span className="font-[700] flex items-center gap-[5px]"><MdBedroomChild width={24} height={24} className="w-[24px] h-[24px]" />Number of Rooms :</span> {detail?.numberOfRooms}</p>
                <p className="flex items-center gap-[10px] text-[18px] leading-tight mt-[10px] capitalize"><span className="font-[700] flex items-center gap-[5px]"><RiHotelFill width={24} height={24} className="w-[24px] h-[24px]" />Classified :</span> {detail?.propertyType}</p>
                <p className="flex items-center gap-[10px] text-[18px] leading-tight mt-[10px] capitalize"><span className="font-[700] flex items-center gap-[5px]"><MdOutlineStarPurple500 width={24} height={24} className="w-[24px] h-[24px]" />Ratings :</span> {detail?.ratings}</p>
                <p className="flex items-center gap-[10px] text-[18px] leading-tight mt-[10px]"><span className="font-[700] flex items-center gap-[5px]"><MdMeetingRoom width={24} height={24} className="w-[24px] h-[24px]" />Availible Rooms :</span> {detail?.roomTypes.map(item => (<p className="capitalize">{item},</p>))}</p>
            </div>

            <div class="mt-[50px]">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    speed={300}
                    autoplay={true}
                    loop
                >
                    {
                        detail?.images.slice().reverse().map(img => {
                            return <SwiperSlide>{<Image src={img} unoptimized width={1000} height={1000} className="max-h-[500px] object-cover rounded-md w-full" />}</SwiperSlide>
                        })
                    }
                </Swiper>
            </div>

            <div className="mt-[50px]">
                <h3 className="text-3xl font-bold text-center">For Contact</h3>
                <div className="mt-[25px]">
                    <div className="flex gap-[20px]">
                        <div className="shadow rounded-md w-full p-5 text-center">
                            <div className="flex items-center justify-center">
                                <FaPhoneAlt width={24} height={24} className="w-[50px] h-[50px] fill-orange" />
                            </div>
                            <a href={`tel:${detail?.phoneNumber}`} className="mt-[10px] text-[20px] leading-tight block"> {detail?.phoneNumber}</a>
                        </div>
                        <div className="shadow rounded-md w-full p-5 text-center">
                            <div className="flex items-center justify-center">
                                <MdEmail width={24} height={24} className="w-[50px] h-[50px]" />
                            </div>
                            <a href={`mailto:${detail?.email}`} className="mt-[10px] text-[20px] leading-tight block"> {detail?.email}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[50px]">
                <h2 className="text-[#333] leading-tight text-[30px] text-center mb-[50px]">For Reservation</h2>

                <p className="text-[#333] leading-tight text-[24px] text-center font-[500]">Thank you for choosing us !!!</p>
                <p className="text-[18px] leading-tight text-center">{detail?.name}</p>

                <BookingForm roomTyped={detail?.roomTypes} hotelId={id} />
            </div>
        </div>
    )
}
export default pageDetail