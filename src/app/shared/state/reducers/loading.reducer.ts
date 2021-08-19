import { createReducer, Action, on } from "@ngrx/store";
import * as LoadingActions from '../actions/loading.action'

export const initialState = false;

const _loadingReducer = createReducer(
    initialState,
    on(LoadingActions.Start, 
        (state) => {
            state = true;
            console.log('START LOADING');
            return state;
        }
    ),
    on(LoadingActions.Stop, 
        (state) => {
            state = false;
            console.log('STOP LOADING');
            return state;
        }
    ),
);

export function loadingReducer(state: boolean | undefined, action: Action) {
    return _loadingReducer(state, action);
}