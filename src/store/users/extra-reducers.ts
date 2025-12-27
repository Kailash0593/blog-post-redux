import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserHttpClass } from '../../http';

const userHttpClass = new UserHttpClass;

export const asyncGetAllUsers = createAsyncThunk("user/asyncGetAllUsers", () => {
    return userHttpClass.getAllUsers();
});

export const asyncGetUser = createAsyncThunk("user/asyncGetUser", (id: string) => {
    return userHttpClass.getUser(id);
});