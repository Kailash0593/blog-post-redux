import { useSelector } from "react-redux"
import type { RootStore } from "../store"

export const usePostSelector = () => {
    const userSelector = useSelector((store: RootStore) => store.posts);

    const getAllPosts = (userId: number) => {
        return userSelector.posts.filter(p => p.userId===userId);
    }

    const getState = () => {
        return userSelector.state;
    }

    return { getAllPosts, getState };
}