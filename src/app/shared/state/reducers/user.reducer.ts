import { createReducer, Action, on } from "@ngrx/store";
import * as UserActions from '../actions/user.action'
import { User } from "../../models/user.model";

export const initialState: User = {
    name: '',
    saldo: 0,
    id: 0,
    agencia: '',
    conta: '',
    fatura: 0,
    emprestimo: 0,
    cartoes: []
}

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