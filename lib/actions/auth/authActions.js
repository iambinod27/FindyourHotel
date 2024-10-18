import hotelAxios from "@/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk("user/login", async (values) => {
    try {
        const res = await hotelAxios.post("/api/users/login", values);
        const data = await res.data;
        return data;
    } catch (error) {
        throw error
    }
})


export const createUser = createAsyncThunk("user/register", async (values) => {
    try {
        const res = await hotelAxios.post("/api/users/register", values);
        const data = res.data;
        return data

    } catch (error) {
        throw error
    }
})