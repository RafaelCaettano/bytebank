import { createReducer, Action, on } from "@ngrx/store";
import * as UserActions from '../actions/user.action'
import { User } from "../../models/user.model";
import { USER } from "../../consts/models.initializer";

export const initialState: User = USER;

const _userReducer = createReducer(
    initialState,
    on(UserActions.Add, 
        (state, { payload }) => {
            console.log('USER STATE', state);
            console.log('USER PAYLOAD', payload);
            state = payload;
            return state;
        }
    ),
);

export function userReducer(state: User | undefined, action: Action) {
    return _userReducer(state, action);
}