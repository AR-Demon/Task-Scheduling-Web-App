import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    userStats:null,
    token: null,
    Todo: [],
    userBarStatus: true,
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
        setUserBarStatus: (state) => {
            state.userBarStatus = state.userBarStatus === true? false : true;
        },
        SyncStateData: (state, action) => {
            const newUserStats = action.payload.userStats;
            state.userStats = newUserStats;
            state.userStats = action.payload.userStats;
            const newTodoArray = action.payload.userTodo;
            state.Todo = newTodoArray;
        }
    }
});

export const {setUserLogin ,setUserTodo,setUserStats, setUserLogout, SyncStateData} = userSlice.actions;

export default userSlice.reducer;