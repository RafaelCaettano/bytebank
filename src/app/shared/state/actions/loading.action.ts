import { createAction, props } from '@ngrx/store';

export const Start = createAction(
    '[Loading] Start loading'
);

export const Stop = createAction(
    '[Loading] Stop loading'
);