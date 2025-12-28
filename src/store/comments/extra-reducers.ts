import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsHttpClass } from "../../http";
import type { CommentI } from "../../interface";

const commentsHttpClass = new CommentsHttpClass;

export const asyncGetAllComments = createAsyncThunk("comments/asyncGetAllComments", (postId: number) => {
    return commentsHttpClass.getAllComments(postId)
});

export const asyncCreateComment = createAsyncThunk("comments/asyncCreateComment", (comment: CommentI) => {
    return commentsHttpClass.createComment(comment)
});