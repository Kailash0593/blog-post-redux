import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PostI } from '../../interface/posts.interface';
import { asyncDeletePost, asyncGetAllPosts, asyncGetPost } from './extra-reducers';

interface PostsStateI {
    state: "none" | "pending" | "success" | "error";
    posts: PostI[];
    post: undefined | PostI
}

const initialState: PostsStateI = {
    state: "none",
    posts: [],
    post: undefined
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        selectPost: (state, action: PayloadAction<PostI>) => {
            state.post = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(asyncGetAllPosts.fulfilled, (state, action: PayloadAction<PostI[]>) => {
            state.state = "success";
            state.posts = [...state.posts, ...action.payload]
        })
        .addCase(asyncGetAllPosts.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetAllPosts.rejected, (state) => {
            state.state = "error";
        })
        .addCase(asyncGetPost.fulfilled, (state, action: PayloadAction<PostI>) => {
            state.state = "success";
            state.post = action.payload;
        })
        .addCase(asyncGetPost.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncGetPost.rejected, (state) => {
            state.state = "error";
        })
        .addCase(asyncDeletePost.fulfilled, (state, action) => {
            state.state = "success";
            const id: number = action.meta.arg;
            state.posts = [...state.posts.filter(p => p.id !== id)];
        })
        .addCase(asyncDeletePost.pending, (state) => {
            state.state = "pending";
        })
        .addCase(asyncDeletePost.rejected, (state) => {
            state.state = "error";
        })
    }
});

export const fromPostsReducer = postsSlice.actions;
export default postsSlice.reducer;