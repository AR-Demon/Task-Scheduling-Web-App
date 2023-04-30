import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userStats:null,
    token: null,
    Todo: [],
    
};
const userSlice = createSlice({
    name: "User",
    initialState,
    reducers:{
        setUserLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setUserTodo: (state, action) => {
            const newTodoArray = action.payload;
            state.Todo = newTodoArray;
        },
        setUserStats: (state, action) => {
            const newUserStats = action.payload;
            state.userStats = newUserStats;
        },
        setUserLogout: (state) => {
            state.user = null;
            state.token = null;
            state.userStats = null;
            state.Todo = [];
        },
    }
});

export const {setUserLogin ,setUserTodo,setUserStats, setUserLogout} = userSlice.actions;

export default userSlice.reducer;