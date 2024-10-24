const { getAllHotel, getOneHotel } = require("@/lib/actions/hotel/hotelActions");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: true,
    allHotel: [],
    detail: null
}

const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        hotelCleanUp: state => {
            state.detail = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllHotel.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getAllHotel.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.allHotel = action.payload;
        })
        builder.addCase(getAllHotel.rejected, (state) => {
            state.isLoading = true
        })
        builder.addCase(getOneHotel.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getOneHotel.fulfilled, (state, action) => {
            state.isLoading = false;
            state.detail = action.payload;
        })
        builder.addCase(getOneHotel.rejected, (state) => {
            state.isLoading = true
        })
    }
})

export const { hotelCleanUp } = hotelSlice.actions

export default hotelSlice.reducer