import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"
import hotelReducer from "./features/hotel/hotelSlice"
import bookingReducer from "./features/bookings/bookingSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            hotel: hotelReducer,
            booking: bookingReducer
        },
    })
}