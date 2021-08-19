import { ActionReducerMap } from "@ngrx/store";
import { User } from "../models/user.model";
import { loadingReducer } from "./reducers/loading.reducer";
import { userReducer } from "./reducers/user.reducer";

interface AppState {
    loading: boolean,
    user: User,
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    loading: loadingReducer,
}