"use client"

import { createBooking } from "@/lib/actions/bookings/bookingActions";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useFormik } from "formik"
import { useState } from "react";
import * as Yup from 'yup';

const BookingForm = ({ roomTyped, hotelId }) => {
    const { user } = useAppSelector(state => state.auth)
    const { data } = useAppSelector(state => state.booking)
    const dispatch = useAppDispatch()
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")

    const userEmail = user?.email;

    const formik = useFormik({
        initialValues: {
            checkInDate: "",
            checkOutDate: "",
            roomType: "",
            numberOfGuests: 1,
        },

        validationSchema: Yup.object({
            checkInDate: Yup.date().required("Check-In Date is Required"),
            checkOutDate: Yup.date().required("Check-Out Date is Required"),
            roomType: Yup.string().required("Select any one roomtype"),
            numberOfGuests: Yup.number().required("enter number of Guests")
        }),

        onSubmit: async (value, { resetForm }) => {
            if (user !== null) {
                dispatch(createBooking({ userEmail: userEmail, hotelId: hotelId, ...value, totalPrice: 100 }))
                resetForm();
                setSuccess(data?.message)
            } else {
                setErr("Please login")
            }
        }

    })



    return (
        <div className="mt-[50px]">
            <form className="p-5 shadow-md max-w-[525px] mx-auto" onSubmit={formik.handleSubmit}>
                {err &&
                    <p className="p-3 rounded-md font-[500] mb-4 text-white bg-[#ad4242]">
                        {err}
                    </p>
                }

                {success && <p className={"p-3 rounded-md font-[500] mb-4 text-white  bg-[#70d670]"}>
                    {success}
                </p>}


                <div className="flex flex-col mb-4">
                    <label className="label">Check-in Date</label>
                    <input type="date" className="input" name="checkInDate" value={formik.values.checkInDate} onChange={formik.handleChange} onBlur={formik.handleBlur} min={new Date().toISOString().split("T")[0]} />
                    {formik.errors.checkInDate && <p className="text-red-600">{formik.errors.checkInDate}</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="label">Check-out Date</label>
                    <input type="date" className="input" name="checkOutDate" value={formik.values.checkOutDate} onChange={formik.handleChange} onBlur={formik.handleBlur} min={formik.values.checkInDate} max={!formik.values.checkInDate} />
                    {formik.errors.checkOutDate && <p className="text-red-600">{formik.errors.checkOutDate}</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="label">Room Types</label>
                    <select className="input" name="roomType" value={formik.values.roomType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <option value="" selected>Select a type of room</option>
                        {roomTyped?.map(room => (
                            <option value={room}>{room}</option>
                        ))}
                    </select>
                    {formik.errors.roomType && <p className="text-red-600">{formik.errors.roomType}</p>}
                </div>

                <div className="flex flex-col mb-4">
                    <label className="label">No of Guests</label>
                    <input type="number" className="input" name="numberOfGuests" value={formik.values.numberOfGuests} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.numberOfGuests && <p className="text-red-600">{formik.errors.numberOfGuests}</p>}
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="btn drop-shadow-md ">
                        Confirm and Reserve
                    </button>
                </div>
            </form>
        </div>
    )
}
export default BookingForm