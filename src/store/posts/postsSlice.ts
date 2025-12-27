import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PostI } from '../../interface/posts.interface';
import { asyncDeletePost, asyncGetAllPosts } from './extra-reducers';

interface PostsStateI {
    state: "none" | "pending" | "success" | "error";
    posts: PostI [];
}

const initialState: PostsStateI = {
     state: "none",
     posts: []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(asyncGetAllPosts.fulfilled, (state, action: PayloadAction<PostI []>) => {
            state.state = "success";
            state.posts = [...state.posts, ...action.payload] 
        })
        .addCase(asyncGetAllPosts.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetAllPosts.rejected, (state) => {
            state.state = "error";
        })
        .addCase(asyncDeletePost.fulfilled, (state, action) => {
            state.state = "success";
            const id: number = action.meta.arg;
            state.posts = [...state.posts.filter(p => p.id!==id)];
        })
        .addCase(asyncDeletePost.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncDeletePost.rejected, (state) => {
            state.state = "error";
        })
    }
});

export default postsSlice.reducer;