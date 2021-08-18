import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user.model";
import { userReducer } from "./reducers/user.reducer";

interface AppState {
    user: User
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer
}