import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CommentI } from "../../interface";
import { asyncCreateComment, asyncGetAllComments } from "./extra-reducers";

interface CommentStateI {
    state: "none" | "pending" | "success" | "error";
    comments: CommentI[];
}

const initialState: CommentStateI = {
    state: "none",
    comments: []
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(asyncGetAllComments.fulfilled, (state, action: PayloadAction<CommentI []>) => {
            state.state = "success";
            state.comments = [...state.comments, ...action.payload];
        })
        .addCase(asyncGetAllComments.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetAllComments.rejected, (state) => {
            state.state = "error";
        })
        .addCase(asyncCreateComment.fulfilled, (state, action) => {
            state.state = "success";
            state.comments = [...state.comments, {...action.payload, id: new Date().getTime()}];
        })
        .addCase(asyncCreateComment.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncCreateComment.rejected, (state) => {
            state.state = "error";
        })
    }
});

export default commentsSlice.reducer;