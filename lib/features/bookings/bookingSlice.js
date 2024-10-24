const { createBooking } = require("@/lib/actions/bookings/bookingActions");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: true,
    data: null
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createBooking.pending, (state, action) => {
            state.isLoading = true;
            state.data = action.payload
        })
        builder.addCase(createBooking.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(createBooking.rejected, (state, action) => {
            state.isLoading = true;
            state.data = action.payload
        })
    }
})


export default bookingSlice.reducer