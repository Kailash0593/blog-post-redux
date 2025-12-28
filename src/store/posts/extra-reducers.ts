import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostsHttpClass } from './../../http';

const postsHttpClass = new PostsHttpClass;

export const asyncGetAllPosts = createAsyncThunk("posts/asyncGetAllPosts", (userId: string) => {
    return postsHttpClass.getAllPost(userId)
})

export const asyncGetPost = createAsyncThunk("posts/asyncGetPost", (postId: number) => {
    return postsHttpClass.getPost(postId)
})

export const asyncDeletePost = createAsyncThunk("posts/asyncDeletePost", (postId: number) => {
    return postsHttpClass.deletePost(postId)
})