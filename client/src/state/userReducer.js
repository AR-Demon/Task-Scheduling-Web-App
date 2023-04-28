import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userStats:null,
    token: null,
    todo: [],
};
const userSlice = createSlice({
    name: "User",
    initialState,
    reducers:{},
});