"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Card from "./Card";
import { useEffect } from "react";
import { getAllHotel } from "@/lib/actions/hotel/hotelActions";

const HotelList = () => {
  const { isloading, allHotel } = useAppSelector(state => state.hotel);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllHotel());
  }, [dispatch])

  console.log(allHotel)
  return (
    <>
      {
        allHotel.map(item => {
          return <Card key={item._id} data={item} />
        })
      }
    </>
  )
}

export default HotelList 