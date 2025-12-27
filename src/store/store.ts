import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer
    }
})

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;