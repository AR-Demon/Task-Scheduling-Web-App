import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:"light",
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; 
        },
        setAuthLogin: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setAuthLogout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
}); 

export const {setMode, setAuthLogin, setAuthLogout} = authSlice.actions;

export default authSlice.reducer;