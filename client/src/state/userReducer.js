import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:"light",
    user: null,
    token: null,
    todo: [],
};
const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; 
        },
        setLogin: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
});