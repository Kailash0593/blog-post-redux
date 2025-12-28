import { useSelector } from "react-redux"
import type { RootStore } from "../store"

export const useCommentSelector = () => {
    const commentSelector = useSelector((store: RootStore) => store.comments);

    const getAllComments = (postId: number) => {
        console.log("postId", postId)
        return commentSelector.comments.filter(c => c.postId === postId).sort((a, b) => b.id - a.id);
    }

    const getState = () => {
        return commentSelector.state;
    }

    return { getAllComments, getState };
}