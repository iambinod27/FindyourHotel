import hotelAxios from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllHotel = createAsyncThunk("hotels/all", async () => {
    try {
        const res = await hotelAxios.get("/api/hotel/all");
        const data = res.data;
        return data

    } catch (error) {
        throw error
    }
})

export const getOneHotel = createAsyncThunk("hotels/detail", async (values) => {
    try {
        const res = await hotelAxios.get(`api/hotel/${values}`)
        const data = res.data
        return data
    } catch (error) {
        throw error
    }
})