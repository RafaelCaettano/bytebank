import { createReducer, Action, on } from "@ngrx/store";
import * as InformationActions from '../actions/question.action'
import { Information } from "../../models/information.model";

export const initialState: Information = {
    title: '',
    id: 0,
    questions: [],
    description: ''
};

const _questionReducer = createReducer(
    initialState,
    on(InformationActions.Add, 
        (state, { payload }) => {
            state = payload;
            console.log('QUESTION STATE', state);
            return state;
        }
    )
);

export function questionReducer(state: Information | undefined, action: Action) {
    return _questionReducer(state, action);
}