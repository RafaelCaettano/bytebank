import { ActionReducerMap } from "@ngrx/store";
import { Information } from "../models/information.model";
import { User } from "../models/user.model";
import { questionReducer } from "./reducers/question.reducer";
import { informationsReducer } from "./reducers/informations.reducer";
import { loadingReducer } from "./reducers/loading.reducer";
import { userReducer } from "./reducers/user.reducer";

interface AppState {
    loading: boolean,
    user: User,
    informations: Information[],
    question: Information
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    loading: loadingReducer,
    informations: informationsReducer,
    question: questionReducer
}