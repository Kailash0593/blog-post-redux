import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserI } from '../../interface';
import { asyncGetAllUsers, asyncGetUser } from './extra-reducers';

interface UsersStateI {
    state: "none" | "pending" | "success" | "error",
    users: UserI[],
    user: UserI | undefined
}

const initialState: UsersStateI = {
    state: "none",
    users: [],
    user: undefined
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        selectUser: (state, action: PayloadAction<UserI>) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncGetAllUsers.fulfilled, (state, action: PayloadAction<UserI[]>) => {
            state.state = "success";
            state.users = [...state.users, ...action.payload];
        })
        .addCase(asyncGetAllUsers.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetAllUsers.rejected, (state) => {
            state.state = "error";
        })
        .addCase(asyncGetUser.fulfilled, (state, action: PayloadAction<UserI>) => {
            state.state = "success";
            state.user = action.payload;
        })
        .addCase(asyncGetUser.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetUser.rejected, (state) => {
            state.state = "error";
        })
    }
});

export const fromUserReducer = usersSlice.actions;

export default usersSlice.reducer;