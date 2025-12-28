import { useSelector } from "react-redux"
import type { RootStore } from "../store"

export const usePostSelector = () => {
    const postSelector = useSelector((store: RootStore) => store.posts);

    const getAllPosts = (userId: number) => {
        return postSelector.posts.filter(p => p.userId === userId);
    }

    const getPost = () => {
        return postSelector.post;
    }

    const getState = () => {
        return postSelector.state;
    }

    return { getAllPosts, getPost, getState };
}