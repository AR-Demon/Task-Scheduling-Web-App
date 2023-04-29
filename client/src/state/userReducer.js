import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userStats:null,
    todo: {},
    token: null,
};
const userSlice = createSlice({
    name: "User",
    initialState,
    reducers:{
        setUserLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.todo =  action.payload.todo;
        },
        setUserLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setUserTodo:(state, action) => {}
    },
});

export const {setUserLogin, setUserLogout} = userSlice.actions;

export default userSlice.reducer;