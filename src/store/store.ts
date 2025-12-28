import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;