import { createReducer, Action, on } from "@ngrx/store";
import * as UserActions from '../actions/user.action'
import { User } from "../../models/user.model";

export const initialState: User = {
    id: 0,
    agencia: '',
    cartoes: [],
    conta: '',
    emprestimo: 0, 
    fatura: 0,
    limite: 0,
    name: '',
    saldo: 0
};

const _userReducer = createReducer(
    initialState,
    on(UserActions.Add, 
        (state, { payload }) => {
            state = payload;
            console.log('USER STATE', state);
            return state;
        }
    ),
    on(UserActions.Clear, 
        (state) => {
            state = initialState;
            return state;
        }
    ),
);

export function userReducer(state: User | undefined, action: Action) {
    return _userReducer(state, action);
}