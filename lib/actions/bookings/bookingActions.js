import hotelAxios from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createBooking = createAsyncThunk("booking/add", async (value) => {
    try {
        const res = await hotelAxios.post("/api/booking/add", value);
        const data = res.data
        return data
    } catch (error) {
        console.log(error)
    }
})