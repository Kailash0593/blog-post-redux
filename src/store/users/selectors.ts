import { useSelector } from "react-redux"
import type { RootStore } from "../store"

export const useUserSelector = () => {
    const userSelector = useSelector((store: RootStore) => store.users);

    const getAllUsers = () => {
        return userSelector.users;
    }

    const getState = () => {
        return userSelector.state;
    }

    const getUser = () => {
        return userSelector.user;
    }

    return { getAllUsers, getState, getUser };
}