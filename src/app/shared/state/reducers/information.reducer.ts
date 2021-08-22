import { createReducer, Action, on } from "@ngrx/store";
import * as InformationActions from '../actions/information.action'
import { Information } from "../../models/information.model";

export const initialState: Information = {
    title: '',
    id: 0,
    questions: [],
    description: ''
};

const _informationReducer = createReducer(
    initialState,
    on(InformationActions.Add, 
        (state, { payload }) => {
            state = payload;
            console.log('INFORMATIONS STATE', state);
            return state;
        }
    )
);

export function informationReducer(state: Information | undefined, action: Action) {
    return _informationReducer(state, action);
}