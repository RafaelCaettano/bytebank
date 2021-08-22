import { createReducer, Action, on } from "@ngrx/store";
import * as InformationsActions from '../actions/informations.action'
import { Information } from "../../models/information.model";

export const initialState: Information[] = [];

const _informationsReducer = createReducer(
    initialState,
    on(InformationsActions.Add, 
        (state, { payload }) => {
            state = payload;
            console.log('INFORMATIONS STATE', state);
            return state;
        }
    ),
    on(InformationsActions.Clear, 
        (state) => {
            state = initialState;
            return state;
        }
    ),
);

export function informationsReducer(state: Information[] | undefined, action: Action) {
    return _informationsReducer(state, action);
}