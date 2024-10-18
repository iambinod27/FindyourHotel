import { createUser, loginUser } from "@/lib/actions/auth/authActions";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    token: null,
    message: null,
    user: null,
    info: {}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.message = action.payload.message
                state.user = action.payload.user
            })
            .addCase(createUser.rejected, state => {
                state.isLoading = true
            })
            .addCase(loginUser.pending, state => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user
                state.info = action.meta.arg
                state.message = action.payload.message
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = true
                console.log(action)
                state.message = action.error.message;
            });
    }
})

export default authSlice.reducer;