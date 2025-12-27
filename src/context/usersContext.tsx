import { createContext } from "react";
import type { UserI } from "../interface";

const usersStateContext = createContext<"none" | "pending" | "success" | "error">("none");

const userContextProvider = () => {
    
}